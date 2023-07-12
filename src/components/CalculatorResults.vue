<template>
	<div class="flex items-center pt-lg">
		<div class="flex-1">
			<h4 class="font-bold text-secondary text-[24px] leading-[32px] mb-[20px]">By utilising the Bridge Sales Enablement Agency calculator organisations can simplify the processes associated with indirect procurement and unlock significant typical savings of up to 60% of process costs.</h4>
			<p class="mb-[50px]">Based on what you have told us about your process we can estimate that the following costs are being insured within your procurement processes.</p>
			<router-link
				:to="{name: 'CalculatorQuestion', params: {id: storeResponse.getLastQuestion}}"
				v-if="storeResponse.getLastQuestion"
				class="button reverse inline-flex"
			>
				Go Back
			</router-link>
		</div>
		<div class="w-[580px] ml-[32px]">
			<div class="result">
				<div class="result-label">Supplier & product</div>
				<div class="result-cost">{{ formatValue(storeResponse.getSupplierAndProduct) }}</div>
			</div>
			<div class="result">
				<div class="result-label">Quotation to order process</div>
				<div class="result-cost">{{ formatValue(storeResponse.getQuotationToOrderProcess) }}</div>
			</div>
			<div class="result">
				<div class="result-label">Expediting & receiving orders</div>
				<div class="result-cost">{{ formatValue(storeResponse.getExpeditingAndReceivingOrders) }}</div>
			</div>
			<div class="result">
				<div class="result-label">Processing invoices</div>
				<div class="result-cost">{{ formatValue(storeResponse.getProcessingInvoices) }}</div>
			</div>
			<div class="result">
				<div class="result-label">Paying suppliers</div>
				<div class="result-cost">{{ formatValue(storeResponse.getPayingSuppliers) }}</div>
			</div>
			<div class="result total">
				<div class="result-label">Total Process Costs (year)</div>
				<div class="result-cost">{{ formatValue(storeResponse.getTotalProcessCosts) }}</div>
			</div>
			<router-link
				:to="{name: 'CalculatorThankYou'}"
				class="button-alt mt-[40px]"
			>
				Send me this report
			</router-link>
		</div>
	</div>
</template>

<script setup lang="ts">

import { useResponseStore } from '../stores/responses' 

const storeResponse = useResponseStore()

const formatValue = (computedValue) => {
	return "£" + computedValue.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

</script>