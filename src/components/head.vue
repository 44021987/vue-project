<template>
	<div id="header">
		<i v-show="routerRoot" class="go_back el-icon-arrow-left" onclick="window.history.go(-1)"></i>
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
		i.go_back {
			position: absolute;
			width: 30px;
			top: 50%;
			left: 5%;
			margin-top: -8px;
			font-size: 16px;
			font-weight: normal;
			cursor: pointer;
		}
	}
</style>