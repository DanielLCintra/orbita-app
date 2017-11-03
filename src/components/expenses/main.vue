<script>
	import CcForm from './form.vue'
	import CcList from './list.vue'
	import moment from 'moment'
	import { map } from 'lodash'
 
	export default{
		name:"Expenses",
		components: {
			CcForm,
			CcList
		},
		data(){
			return {
				list: []
			}
		},
		mounted(){
			this.$db.ref('expenses').on('value', data => {
				const obj = data.val()
				this.list = map(obj, (expense, index) => {
					expense.id = index
					return expense
				})
				
			})
		},
		
	}
</script>

<template>	
	<div class="container">
		<cc-form></cc-form>
		<hr v-show="list.length > 0">
		<cc-list :list="list"></cc-list>
	</div>
</template>

<style scoped>
	
</style>
