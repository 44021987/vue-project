<template>
	<div class="content_main" v-loading="loading">
		<ul class="main_list_wrap">
			<li v-for="item in articleList">
				<div>
					<router-link :to="{name: 'UsersRouter', params: {id: item.author.loginname}}">
						<img class="main_list_img" :src="item.author.avatar_url" :title="item.author.loginname"/>
					</router-link>
				</div>
				<div>
					<h2>
						<router-link :to="{name: 'ArticleRouter', params:{id: item.id}}">{{item.title}}</router-link>
					</h2>
					<div class="create_wrap">
						<span style="padding-right: 10px;">回复：{{item.reply_count}}</span>
						<span>创建于：{{item.create_at.match(/.{10}/)[0]}}</span>
					</div>
				</div>
			</li>
		</ul>
		<div style="text-align: center; padding-bottom: .4rem;">
			<i class="el-icon-loading"></i>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				articleList: [],
				limit: 10,
				loading: true
			}
		},
		created () {
			this.$http({
				url: "https://cnodejs.org/api/v1/topics",
				methods: "get",
				params: {
                    page: 1,
                    limit: 10,
                    mdrender: 'false',
                }
			}).then((res) => {
                this.articleList = res.data.data;
                this.articleList.sort(function (a, b) {
                	const aTimeString = (a.create_at.match(/.{10}/)[0]).replace(/-/g, "");
                	const bTimeString = (b.create_at.match(/.{10}/)[0]).replace(/-/g, "");
                	return parseInt(bTimeString) - parseInt(aTimeString);
                })
            }).catch((res) => {
                console.log('MaiSec.vue: ', res);
            });
		},
		methods: {
			bodyScroll () {
				const clientHeight = document.documentElement.clientHeight;
				const scrollTop = document.body.scrollTop;
				const scrollHeight = document.body.scrollHeight;
				if (clientHeight + scrollTop === scrollHeight) this.getArticleList();
			},
			getArticleList () {
				this.limit += 10;
				this.$http({
					url: "https://cnodejs.org/api/v1/topics",
					methods: "get",
					params: {
	                    page: 1,
	                    limit: this.limit,
	                    mdrender: 'false',
	                }
				}).then((res) => {
	                this.articleList = res.data.data;
	                this.articleList.sort(function (a, b) {
	                	const aTimeString = (a.create_at.match(/.{10}/)[0]).replace(/-/g, "");
	                	const bTimeString = (b.create_at.match(/.{10}/)[0]).replace(/-/g, "");
	                	return parseInt(bTimeString) - parseInt(aTimeString);
	                })
	            }).catch((res) => {
	                console.log('MaiSec.vue: ', res);
	            });
			}
		},
		mounted () {
			window.addEventListener("scroll", this.bodyScroll);
		},
		watch: {
			articleList (val) {
				if (val) this.loading = false;
			}
		}
	}
</script>

<style lang="less">
	
	.content_main {
		padding: 0 5%;
		max-width: 900px;
		margin: 0 auto;
		.main_list_wrap {
			width: 100%;
			overflow: hidden;
			li {
				display: flex;
				align-items: center;
				text-align: left;
				padding: 1rem 0;
				border-bottom: 1px solid #ddd;
				&:last-child {
					border-bottom: none;
				}
				h2{
					padding-bottom: 1rem;
					font-weight: normal;
					line-height: 1;
				}
				.create_wrap {
					font-size: 14px;
				}
			}
		}
	}
	.main_list_img {
		width: 4rem;
		height: 4rem;
		margin-right: 12px;
		border: 1px solid #F3F3F3;
	}
</style>