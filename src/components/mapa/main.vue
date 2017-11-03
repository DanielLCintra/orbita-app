<script>
	
	import Vue from 'vue'
	import * as VueGoogleMaps from 'vue2-google-maps'

	Vue.use(VueGoogleMaps, {
	  load: {
	    key: 'AIzaSyDVQ6DTwqyg83ozYfnVCA9mFxijuIj516k'
	  }
	})

	export default{
		name:"Mapa",
		components: {
		},
		data(){
			return {
			}
		},
		mounted(){
		
		},
		
	}
</script>

<template>	
	<div>
		<div slot="header" class="toolbar">
			<q-toolbar-title :padding="0">
				Onde vamos entregar seu pedido?
			</q-toolbar-title>
		</div>
		<gmap-map :center="{lat:-19.9026612, lng:-44.1044812}" :zoom="7" map-type-id="terrain" class="google-map"></gmap-map>
	</div>
</template>

<style scoped>
	.google-map{
		width: 100vw;
		height: 100vh;
	}
</style>
