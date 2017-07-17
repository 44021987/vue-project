<template>
	<div id="header">
		<span v-show="routerRoot" class="go_back" onclick="window.history.go(-1)"></span>
		<h5 v-show="!routerRoot">首页</h5>
	</div>
</template>

<script>
	export default {
		data () {
			return {
			}
		},
		computed: {
			routerRoot () {
				if (this.$route.name === "RootPath") return false;
				return true;
			}
		}
	}
</script>

<style lang="less">
	#header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 50px;
		background: #1e2327;
		color: #fff;
		line-height: 50px;
		text-align: center;
		h5 {
			font-weight: normal;
			font-size: 18px;
		}
		span.go_back {
			position: absolute;
			left: 5%;
			width: 30px;
			&::before{
				content: "\2329";
				font-size: 16px;
			}
		}
	}
</style>