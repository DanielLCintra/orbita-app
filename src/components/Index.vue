<script>

	import { map } from 'lodash'

	export default{
		methods:{
			logout(){
				this.$auth.signOut()
			},
			navigate(destiny){
				this.$router.push(`${destiny}`)
			}
		}

	}
</script>

<template>
	<q-layout>
		
		<q-drawer ref="drawer">
			<button class="primary" style="width: 100%" @click="navigate('despesas')">Despesas</button>
			<button class="primary" style="width: 100%" @click="navigate('mapa')">Mapa</button>
			<button class="primary" style="width: 100%" @click="logout">Logout</button>
		</q-drawer>

		<div slot="header" class="toolbar">

			<button class="hide-on-drawer-visible" @click="$refs.drawer.open()">
				<i>menu</i>	
			</button>

			<q-toolbar-title :padding="0">
				Orbita
			</q-toolbar-title>
		</div>
		<router-view></router-view>
	</q-layout>
</template>

<style scoped>
	.container{
		padding: 20px;
	}
</style>

