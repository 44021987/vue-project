<template>
  <div id="app">
  	<router-view></router-view>
  </div>
</template>

<script>
	export default {
	  name: 'app'
	}
</script>

<style>
	body {
		background: #fff;
	}
	#app {
		display: flex;
		justify-content: space-around;
	  font-family: 'Avenir', Helvetica, Arial, sans-serif;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	  text-align: center;
	  color: #2c3e50;
	  margin-top: 60px;
	  text-align: left;
	}
</style>
