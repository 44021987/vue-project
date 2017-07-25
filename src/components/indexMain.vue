<template>
	<div class="content_main">
		<ul class="main_list_wrap">
			<li v-for="item in articleList">
				<router-link :to="{name: 'ArticleRouter', params:{id: item.id}}">
					<h2 :title="getTabInfo(item.top?'top':item.tab)" :class="item.top?'top':item.tab">{{item.title}}</h2>
					<div class="content">
						<img class="main_list_img" :src="item.author.avatar_url" :title="item.author.loginname"/>
						<div class="create_wrap">
							<p>
								<span>{{item.author.loginname}}</span>
								<span>
									<span class="replay">{{item.reply_count}}</span>
									<span> / {{item.visit_count}}</span>
								</span>
							</p>
							<p style="font-size: 12px;">
								<span>创建于：{{item.create_at.match(/.{10}/)[0]}}</span>
								<span>{{item.last_reply_at.match(/.{10}/)[0]}}</span>
							</p>
						</div>
					</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				articleList: [],
				limit: 10,
				loadingData: true
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
            }).catch((res) => {
                console.log('MaiSec.vue: ', res);
            });
		},
		methods: {
			bodyScroll () {
				// 页面滚动到一定位置加载数据
				const clientHeight = document.documentElement.clientHeight;
				const scrollTop = document.body.scrollTop;
				const scrollHeight = document.body.scrollHeight;
				// 上一次数据请求完成后再加载,判断this.loadingData
				if (parseInt(clientHeight + scrollTop) >  parseInt(scrollHeight/1.2) && this.loadingData) this.getArticleList();
			},
			// 请求数据每次10条
			getArticleList () {
				this.loadingData = !this.loadingData;
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
	                this.loadingData = !this.loadingData;
	            }).catch((res) => {
	                console.log('MaiSec.vue: ', res);
	            });
			},
			getTabInfo (tab) {
				let str = "";
				switch (tab){
					case "top":
						str = "顶置";
						break;
					case "ask":
						str = "问答";
						break;
					case "share":
						str = "分享";
						break;
					default:
						str = "其他";
						break;
				}
				return str;
			}
		},
		mounted () {
			window.addEventListener("scroll", this.bodyScroll);
		},
		watch: {
//			articleList (val) {
//				if (val) this.loadingData = false;
//			}
		}
	}
</script>

<style lang="less">
	
	.content_main {
		.main_list_wrap {
			overflow: hidden;
			li {
				padding: .6rem 15px;
				border-bottom: 1px solid #ddd;
				&:last-child {
					border-bottom: none;
				}
				.content {
					display: flex;
					align-items: center;
				}
				h2{
					color: #2c3e50;
					text-align: left;
					font-size: 18px;
					padding-bottom: .8rem;
					line-height: 1;
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
					&::before {
						content: attr(title);
						padding: 4px;
						margin-right: 1rem;
						display: inline-block;
						background: yellowgreen;
						color: #fff;
						font-size: 14px;
						font-weight: normal;
						border-radius: 3px;
					}
					&.ask::before {
						background: #3498db;
					}
					&.share::before {
						background: #1abc9c;
					}
					&.top::before {
						background: red;
					}
				}
				.create_wrap {
					flex: 1;
					font-size: 14px;
					p {
						display: flex;
						justify-content: space-between;
						color: #333;
						line-height: 1.5;
						.replay {
							color: #1abc9c;
							font-weight: bold;
						}
					}
				}
			}
		}
	}
	.main_list_img {
		width: 2.5rem;
		height: 2.5rem;
		margin-right: 12px;
		border: 1px solid #F3F3F3;
		border-radius: 50%;
	}
</style>