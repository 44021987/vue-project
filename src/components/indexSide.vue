<template>
	<div class="content_side">
		<div class="author_info">
			<div>
				<img :src="dataList.author.avatar_url"/>
				<p>{{dataList.author.loginname}}</p>
			</div>
			<div>浏览量：{{dataList.visit_count}}</div>
			<div>github：https://github.com/{{dataList.author.loginname}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "sideContent",
		props: ["dataList"],
		data () {
			return {
				
			}
		}
	}
</script>

<style>
	.content_side {
		width: 25%;
	}
	.author_info {
		padding: 2rem 1rem;
		border: 1px solid #ddd;
	}
</style>