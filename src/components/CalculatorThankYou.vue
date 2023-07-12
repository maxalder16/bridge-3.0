<template>
	<div class="text-center pt-xl">
		<h4 class="font-bold text-secondary text-[24px] leading-[32px] w-[580px] mx-auto mb-[50px]">Thank you for using the Bridge Sales Enablement Agency calculator. A representative will be in touch with you soon.</h4>
		<router-link
			:to="{name: 'CalculatorCosts'}"
			class="button-alt mt-[40px]"
			@click="storeResponse.resetData"
		>
		Restart
		</router-link>
	</div>
</template>

<script setup lang="ts">

import { useResponseStore } from '../stores/responses' 

const storeResponse = useResponseStore()

</script>