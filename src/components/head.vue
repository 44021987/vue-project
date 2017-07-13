<template>
	<div id="header">
		<span onclick="window.history.go(-1)"></span>
	</div>
</template>

<script>
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
		span {
			padding-left: 5%;
			display: inline-block;
			width: 30px;
			&::before{
				content: "\2329";
				font-size: 16px;
			}
		}
	}
</style>