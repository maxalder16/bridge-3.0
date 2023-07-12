<template>
	<div class="flex flex-wrap mx-ixs">
		<CalculatorCostsItem
			v-for="(item, index) in storeResponse.costsData.costs"
	      	:key="index"
	      	:index="index"
		/>
	</div>
	<div class="flex flex-wrap mx-ixs">
		<div class="px-xs w-1/3"></div>
		<div class="px-xs w-1/3">
			<div class="flex group items-center rounded-full drop-shadow-lg bg-white text-primary px-[25px] py-[15px]">
				<div class="flex-1 uppercase font-bold">Total</div>
				<div class="text-secondary text-[28px]">£{{ storeResponse.getCostsTotal }}</div>
			</div>
		</div>
		<div class="px-xs w-1/3 flex items-center justify-center">
			<router-link
				v-if="storeResponse.getFirstQuestion"
				:to="{name: 'CalculatorQuestion', params: {id: storeResponse.getFirstQuestion}}"
				class="button"
			>
				Continue
			</router-link>
		</div>
	</div>
</template>

<script setup lang="ts">

import CalculatorCostsItem from "./CalculatorCostsItem.vue"
import { useResponseStore } from '../stores/responses'

const storeResponse = useResponseStore()

</script>