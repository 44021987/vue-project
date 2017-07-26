<template>
	<div class="menu" :class="{'show': showCover}">
		<ul>
			<li>
				<i class="fa fa-list-ul"></i>
				<router-link :to="{name: 'RootPath', params: {id: 'all'}}">全部</router-link>
			</li>
			<li>
				<i class="fa fa-thumbs-up"></i>
				<router-link :to="{name: 'RootPath', params: {id: 'good'}}">精华</router-link>
			</li>
			<li>
				<i class="fa fa-share-alt"></i>
				<router-link :to="{name: 'RootPath', params: {id: 'share'}}">分享</router-link>
			</li>
			<li>
				<i class="fa fa-chain"></i>
				<router-link :to="{name: 'RootPath', params: {id: 'ask'}}">问答</router-link>
			</li>
			<li class="border">
				<i class="fa fa-users"></i>
				<router-link :to="{name: 'RootPath', params: {id: 'job'}}">招聘</router-link>
			</li>
			<li>
				<i class="fa fa-github"></i>
				<router-link :to="{name: 'RootPath', params: {id: 'job'}}">关于</router-link>
			</li>
		</ul>
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
		li {
			list-style: none;
			margin: 0 2rem;
			text-align: left;
			i.fa {
				margin-right: 1rem;
			}
			a {
				display: inline-block;
				padding: 1.2rem 0;
				color: #313131;
				font-size: 14px;
				font-weight: bold;
			}
		}
		li.border {
			border-bottom: 1px solid #C0C0C0;
		}
	}
</style>