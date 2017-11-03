<script>
	import CcForm from './expenses/form.vue'
	import CcList from './expenses/list.vue'
	import moment from 'moment'
 
	export default{
		componentes:{
			CcForm,
			CcList
		}
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
