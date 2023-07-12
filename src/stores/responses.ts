import { defineStore } from 'pinia'

import costsData from '../../data/costs.json'
import questionsData from '../../data/questions.json'

const initialCostsData = JSON.parse(JSON.stringify(costsData));
const initialQuestionsData = JSON.parse(JSON.stringify(questionsData));

export const useResponseStore = defineStore({
	id: 'responses',
	state: () => ({
		costsData: costsData,
		questionsData: questionsData,
    	initialCostsData: initialCostsData,
    	initialQuestionsData: initialQuestionsData,
	}),
	actions: {
		resetData() {
			this.costsData = JSON.parse(JSON.stringify(this.initialCostsData));
			this.questionsData = JSON.parse(JSON.stringify(this.initialQuestionsData));
		},
		toggleCostActive(index) {
			this.costsData.costs[index].active = !this.costsData.costs[index].active;
		},
		currentQuestion(id) {
			if(this.questionsData.questions){
				for (const item of this.questionsData.questions) {
					if (item.id == id) {
						return item;
					}
				}
			}

			return null;
		},
		currentQuestionCount(id) {

			let count = 0;

			if(this.questionsData.questions){
				for (const item of this.questionsData.questions) {
					count++;

					if (item.id == id) {
						return count;
					}
				}
			}

			return null;
		}
	},
	getters: {
		getCostsTotal: (state) => {
			let total = 0;

			for (const item of state.costsData.costs) {
				if (item.active) {
					total += item.cost;
				}
			}

			return total.toFixed(2);
		},
		getFirstQuestion: (state) => {			
			if(state.questionsData.questions){
				return state.questionsData.questions[0].id;
			}

			return null;
		},
		getLastQuestion: (state) => {			
			if(state.questionsData.questions){
				return [...state.questionsData.questions].reverse()[0].id;
			}

			return null;
		},
		getSupplierAndProduct(state) {
			const indentifyRequirements = state.costsData.costs.find(cost => cost.key === "identify_requirements");
			const requestQuotation = state.costsData.costs.find(cost => cost.key === "request_quotation");
			const question2 = state.questionsData.questions.find(question => question.key === "question_2");

			let sum = 0;

			if(indentifyRequirements.active){
				sum = sum + indentifyRequirements.cost;
			}

			if(requestQuotation.active){
				sum = sum + requestQuotation.cost;
			}

			let total = 0;

			if(question2.cost){
				total = sum * question2.cost;
			}

	    	return total;
		},
		getQuotationToOrderProcess(state) {
			const findProducts = state.costsData.costs.find(cost => cost.key === "find_products");
			const raiseOrder = state.costsData.costs.find(cost => cost.key === "raise_order");
			const authoriseSale = state.costsData.costs.find(cost => cost.key === "authorise_sale");
			const payProvider = state.costsData.costs.find(cost => cost.key === "pay_provider");
			const question2 = state.questionsData.questions.find(question => question.key === "question_2");

			let sum = 0;

			if(findProducts.active){
				sum = sum + findProducts.cost;
			}

			if(raiseOrder.active){
				sum = sum + raiseOrder.cost;
			}

			if(authoriseSale.active){
				sum = sum + authoriseSale.cost;
			}

			if(payProvider.active){
				sum = sum + payProvider.cost;
			}

			let total = 0;

			if(question2.cost){
				total = sum * question2.cost;
			}

	    	return total;
		},
		getExpeditingAndReceivingOrders(state) {
			const deliverProduct = state.costsData.costs.find(cost => cost.key === "deliver_product");
			const question1 = state.questionsData.questions.find(question => question.key === "question_1");

			let total = 0;

			if(question1.cost && deliverProduct.active){
				total = deliverProduct.cost * question1.cost;
			}

	    	return total;
		},
		getProcessingInvoices(state) {
			const invoiceCheck = state.costsData.costs.find(cost => cost.key === "invoice_check");
			const question2 = state.questionsData.questions.find(question => question.key === "question_2");

			let total = 0;

			if(question2.cost && invoiceCheck.active){
				total = invoiceCheck.cost * question2.cost;
			}

	    	return total;
		},
		getPayingSuppliers(state) {
			const placeOrder = state.costsData.costs.find(cost => cost.key === "place_order");
			const question3 = state.questionsData.questions.find(question => question.key === "question_3");

			let total = 0;

			if(question3.cost && placeOrder.active){
				total = placeOrder.cost * question3.cost;
			}

	    	return total;
		},
		getTotalProcessCosts(state) {
	    	let total = this.getSupplierAndProduct + this.getQuotationToOrderProcess + this.getExpeditingAndReceivingOrders
	    	+ this.getProcessingInvoices + this.getPayingSuppliers;
	    	return total;
		}
	}
})