import { createRouter, createWebHistory } from 'vue-router'
import CalculatorCosts from "../components/CalculatorCosts.vue"
import CalculatorQuestion from "../components/CalculatorQuestion.vue"
import CalculatorResults from "../components/CalculatorResults.vue"
import CalculatorThankYou from "../components/CalculatorThankYou.vue"

const routes = [
	{ path: '/', name: 'CalculatorCosts', component: CalculatorCosts },
	{
		path: '/question/:id',
		name: 'CalculatorQuestion',
		component: CalculatorQuestion
	},
	{ path: '/results', name: 'CalculatorResults', component: CalculatorResults },
	{ path: '/thank-you', name: 'CalculatorThankYou', component: CalculatorThankYou }
] 

const router = createRouter({
	history: createWebHistory(),
	routes: routes
})

export default router