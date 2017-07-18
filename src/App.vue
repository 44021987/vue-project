<template>
  <div id="app">
  	<o-head></o-head>
  	<div id="content">
	  	<router-view name="main"></router-view>
	  	<router-view name="topic"></router-view>
  	</div>
  </div>
</template>

<script>
	import oHead from '@/components/head';
	export default {
	  name: 'app',
	  components: {
	  	oHead
	  }
	}
</script>

<style>
	* {
		padding: 0;
		margin: 0;
	}
	a {
		text-decoration: none;
		font-size: 16px;
	}
	body {
		font-size: 16px;
		width: 100%;
	}
	.el-loading-mask {
		position: fixed;
		top: 50px;
	}
	#app {
	  font-family: 'Avenir', Helvetica, Arial, sans-serif;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	  text-align: center;
	  color: #2c3e50;
	  text-align: left;
	  max-width: 640px;
	  margin: 0 auto;
	}
	#content {
		padding-top: 50px;
	}
	

</style>
