<template>
  <div id="app">
  	<div class="page">
  		<o-head></o-head>
  		<div class="page_content">
	  		<transition :name="transitionName" mode="out-in" keep-alive>
		  			<router-view></router-view>
	  		</transition>
  		</div>
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
	}
	.page {
		position: relative;
		width: 100%;
		height: 100%;
		transition: all .3s ease;
	}
	.page.slide_right {
		transform: translateX(200px);
	}
	.fixed {
		position: fixed;
		top: 0;
		left: 0;
	}
	.page_content {
		padding-top: 4rem;
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
