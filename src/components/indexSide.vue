<template>
	<div class="content_side">
		<div class="author_info">
			<div>
				<router-link :to="{name: 'UsersRouter', params: {id: dataList.author.loginname}}">
					<img class="author_img" :src="dataList.author.avatar_url"/>
				</router-link>
			</div>
			<div>
				<h1>{{dataList.author.loginname}}</h1>
				<div>浏览量：{{dataList.visit_count}}</div>
				<div>评论：{{dataList.reply_count}}</div>
				<div>https://github.com/{{dataList.author.loginname}}</div>
			</div>
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

<style lang="less">
	.author_info {
		display: flex;
		align-items: center;
		padding: 1rem 0;
		width: 95%;
		margin: auto;
		border-bottom: 1px solid #ddd;
		.author_img {
			width: 5.5rem;
			height: 5.5rem;
			border: 6px solid #fff;
			border-radius: 3px;
			margin-right: 1rem;
		}
		h1 {
			color: #24292e;
			font-size: 16px;
			margin: 0;
			margin-bottom: 10px;
		}
	}
</style>