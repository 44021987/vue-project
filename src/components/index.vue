<template>
	<div id="loading">
		<img src="../assets/loading.gif"/>
	</div>
</template>

<script>
	export default {
		mounted () {
			setTimeout(() => {
                this.$router.push({
                    name: 'RootPath'
                });
            }, 2000);
		}
	}
</script>

<style lang="less">
	#loading {
		position: fixed;
		top: 0px;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: 99;
		background: #fff;
		img {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}
</style>