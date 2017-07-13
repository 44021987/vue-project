<template>
	<div class="content_main">
		<ul class="main_list_wrap" v-for="item in articleList">
			<li>
				<div>
					<img class="main_list_img" :src="item.author.avatar_url" :title="item.author.loginname"/>
				</div>
				<div>
					<h2>
						<router-link :to="{name: 'ArticleRouter', params:{id: item.id}}">{{item.title}}</router-link>
					</h2>
					<div>
						<span style="padding-right: 10px;">回复：{{item.reply_count}}</span>
						<span>创建于：{{item.create_at.match(/.{10}/)[0]}}</span>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				articleList: []
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
                this.articleList = res.body.data;
                console.log(this.articleList[0]);
            }).catch((res) => {
                console.log('MaiSec.vue: ', res);
            });
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
			li {
				display: flex;
				align-items: center;
				text-align: left;
				padding: 1rem 0;
				border-bottom: 1px solid #ddd;
				h2{
					padding-bottom: 1rem;
					font-weight: normal;
					line-height: 1;
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