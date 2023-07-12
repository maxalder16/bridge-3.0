<template>
	<div class="px-xs w-1/3">
		<div
			class="flex group items-center rounded-full drop-shadow-lg pl-[16px] pr-[25px] py-[19px] mb-sm cursor-pointer hover:bg-primary hover:text-white"
			:class="costsItem.active ? 'bg-primary text-white':'bg-white text-primary'"
			@click="storeResponse.toggleCostActive(index)"
		> 
			<div
				class="bg-check bg-contain w-[32px] h-[32px] mr-[23px] group-hover:brightness-[10]"
				:class="costsItem.active ? 'brightness-[10]':''"
			></div>
			<h4 class="flex-1 font-normal text-center">{{ costsItem.name }}</h4>
			<div class="text-center ml-[18px]">
				<p class="text-primary-light text-xs uppercase mb-[3px]">Estimate</p>
				<div class="text-xs">£{{ costsItem.cost.toFixed(2) }}</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">

import { defineProps, ref } from 'vue';
import { useResponseStore } from '../stores/responses'

const storeResponse = useResponseStore()

const props = defineProps([
	'index'
]);

let costsItem = storeResponse.costsData.costs[props.index];

</script>