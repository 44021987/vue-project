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
						<span>回复：{{item.reply_count}}</span>
						<span>创建于：{{item.create_at}}</span>
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

<style>
	.content_main {
		width: 60%;
		min-height: 500px;
		border: 1px solid #DDDDDD;
	}
	.main_list_wrap>li {
		display: flex;
		text-align: left;
	}
	.main_list_img {
		width: 4rem;
		height: 4rem;
		margin-right: 2rem;
	}
</style>