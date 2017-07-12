<template>
  <div id="app">
  	<main-sec></main-sec>
  	<side-sec></side-sec>
  </div>
</template>

<script>
	import mainSec from '@/components/indexMain';
	import sideSec from '@/components/indexSide';
	export default {
	  name: 'app',
	  components: {
	  	mainSec,
	  	sideSec
	  }
	}
</script>

<style>
	#app {
		display: flex;
		justify-content: space-around;
	  font-family: 'Avenir', Helvetica, Arial, sans-serif;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	  text-align: center;
	  color: #2c3e50;
	  margin-top: 60px;
	}
</style>
