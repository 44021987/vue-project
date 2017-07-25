<template>
	<div class="menu" :class="{'show': showCover}">
		menu
	</div>
</template>

<script>
	export default {
		props: ["showCover"],
		data () {
			return {
				
			}
		}
	}
</script>

<style lang="less" scoped>
	.menu {
		position: fixed;
		top: 0;
		bottom: 0;
		left: -200px;
		width: 200px;
		z-index: 99;
		background: #fff;
		transition: all .3s ease;
		&.show {
			transform: translateX(200px);
		}
	}
</style>