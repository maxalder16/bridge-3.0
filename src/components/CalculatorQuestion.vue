<template>
	<div class="flex pt-xl">
		<div class="flex-1 flex items-center">
			<div
				class="arrow rotate-180"
				@click="prevQuestion"
			></div>
			<div class="px-[43px]">
				<h3>{{ storeResponse.currentQuestion(questionId).text }}</h3>
				<p class="text-center text-grey"><strong>{{ storeResponse.currentQuestionCount(questionId) }}</strong> of <strong>{{ questionsLength }}</strong></p>
			</div>
			<div
				class="arrow"
				@click="nextQuestion"
			></div>
		</div>
		<div class="w-[270px] ml-[45px] flex items-center justify-center">
			<input
				class="bg-white text-grey rounded-lg shadow-md px-[23px] py-[14px] text-[24px] w-[160px]"
				v-model="storeResponse.currentQuestion(questionId).cost"
				type="number"
				min="0"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">

import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useResponseStore } from '../stores/responses' 

const route = useRoute();
const router = useRouter();
const storeResponse = useResponseStore()

const questionId = ref(parseInt(route.params.id));
const questions = storeResponse.questionsData.questions;
const questionsLength = (questions).length;

const prevQuestion = () => {
	const index = questions.findIndex(question => question.id === questionId.value);

	if (index !== -1 && index > 0) {
		questionId.value = questions[index - 1].id;
		router.push({name: 'CalculatorQuestion', params: {id: questionId.value}});
	}
	else {
		router.push({name: 'CalculatorCosts'});
	}
};

const nextQuestion = () => {
	const index = questions.findIndex(question => question.id === questionId.value);

	if (index !== -1 && index < questions.length - 1) {
		questionId.value = questions[index + 1].id;
		router.push({name: 'CalculatorQuestion', params: {id: questionId.value}});
	}
	else {
		router.push({name: 'CalculatorResults'});
	}
};



</script>