<template>
	<div class="menu" :class="{'show': showCover}">
		<ul>
			<li>
				<i class="fa fa-list-ul"></i>
				<router-link :to="{name: 'RootPath', params: {id: 'all'}}" @click.native="hideMenu">全部</router-link>
			</li>
			<li>
				<i class="fa fa-thumbs-up"></i>
				<router-link :to="{name: 'RootPath', query: {tab: 'good'}}" @click.native="hideMenu">精华</router-link>
			</li>
			<li>
				<i class="fa fa-share-alt"></i>
				<router-link :to="{name: 'RootPath', query: {tab: 'share'}}" @click.native="hideMenu">分享</router-link>
			</li>
			<li>
				<i class="fa fa-chain"></i>
				<router-link :to="{name: 'RootPath', query: {tab: 'ask'}}" @click.native="hideMenu">问答</router-link>
			</li>
			<li class="border">
				<i class="fa fa-users"></i>
				<router-link :to="{name: 'RootPath', query: {tab: 'job'}}" @click.native="hideMenu">招聘</router-link>
			</li>
			<li>
				<i class="fa fa-github"></i>
				<router-link :to="{name: 'AboutRouter'}" @click.native="hideMenu">关于</router-link>
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
		},
		methods: {
			// 触发父组件隐藏menu事件
			// 在给router-link添加click事件时需要加上nativ，否则clik事件无效
			hideMenu () {
				this.$emit('hideMenu');
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
			display: flex;
			list-style: none;
			margin: 0 2rem;
			text-align: left;
			padding: 1.2rem 0;
			i.fa {
				margin-right: 1rem;
			}
			a {
				flex: 1;
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