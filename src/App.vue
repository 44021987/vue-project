<template>
  <div id="app">
  	<o-head></o-head>
  	<div id="content">
  		<transition :name="transitionName" mode="out-in" keep-alive>
	  			<router-view></router-view>
  		</transition>
  	</div>
  </div>
</template>

<script>
	import oHead from '@/components/head';
	export default {
	  name: 'app',
	  components: {
	  	oHead
	  },
	  data () {
	  	return {
	  		transitionName: ""
	  	}
	  },
	  watch: {
	  	'$route' (to, from) {
	  		let isBack = this.$router.isBack
	  		if (isBack) {
	  		   this.transitionName = 'slide-left'
	  		} else {
	  		   this.transitionName = 'slide-right'
	  		}
	  		this.$router.isBack = false;
	  	}
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
	/*后退*/
	.slide-right-enter-active, .slide-right-leave-active, .slide-left-enter-active, .slide-left-leave-active {
		transition: all .15s ease
	}
	.slide-right-enter {
		transform: translateX(-100px);
	  	opacity: 0
	}
	.slide-right-leave-to {
		transform: translateX(100px);
	  	opacity: 0
	}
	/*前进*/
	.slide-left-enter {
		transform: translateX(100px);
	  	opacity: 0
	}
	.slide-left-leave-to {
		transform: translateX(-100px);
	  	opacity: 0
	}

</style>
