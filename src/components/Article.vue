<template>
	<div class="page_wrapper" v-loading="loading">
		<h1 class="article_title">{{dataList.title}}</h1>
		<side-sec :dataList="dataList"></side-sec>
		<div class="page_main" v-html="dataList.content"></div>
		<div class="replay">
			<h3 v-show="!!replies">评论</h3>
			<div class="replay_wrapper" v-for="item in replies">
				<div class="replay_head">
					<div>
						<router-link :to="{name: 'UsersRouter', params: {id: item.author.loginname}}">
							<!--<img class="main_list_img" :src="item.author.avatar_url" :title="item.author.loginname"/>-->
							<img :src="item.author.avatar_url" class="replay_img"/>
						</router-link>
					</div>
					<div>
						<h1>{{item.author.loginname}}</h1>
						<div class="replay_time">{{String(item.create_at).match(/.{10}/)[0]}}</div>
					</div>
				</div>
				<div class="replay_text" v-html="item.content"></div>
			</div>
		</div>
	</div>
</template>

<script>
	import sideSec from '@/components/indexSide';
	export default {
		components: {
			sideSec
		},
		data () {
			return {
				dataList: [],
				loading: true
			}
		},
		computed: {
			replies () {
				if (!this.dataList.replies) return;
				return this.dataList.replies.reverse();
			}
		},
		beforeCreate () {
			this.$http({
                url: `https://cnodejs.org/api/v1${this.$route.path}`,
                method: 'get',
            }).then((res) => {
                if (res.statusText === "OK") {
                    this.dataList = res.data.data;
                } else {
                    this.dataList = 'Sorry, Something wrong happened when getting the remote data';
                }
            }).catch((res) => {
                console.log('ArticleCom.vue: ', res);
            });
		},
		updated () {
			var oTag = [...document.querySelectorAll("replay .markdown-text")];
			oTag.forEach((v, i) => {
				var oP = v.querySelectorAll("p");
				if (oP.length === 1) oP[0].style.textAlign = "center";
			})
		},
		watch: {
			dataList (val) {
				if (val) this.loading = false;
			}
		}
	}
</script>

<style lang="less">
	body {
		background: #fafbfc;
	}
	.page_wrapper {
		width: 100%;
		overflow: hidden;
		text-align: left;
		.article_title {
			padding: 2rem 1rem;
			line-height: 1.5;
			font-size: 18px;
			background: #fff;
			
		}
	}
	.page_main {
		background: #fff;
		line-height: 1.8;
		.markdown-text {
			padding: 1rem 0;
			width: 90%;
			margin: 0 auto;
			overflow: auto;
			ul {
				padding-left: 1rem;
			}
			img {
				width: 100%;
			}
			h1 {
				font-size: 18px;
				text-align: center;
			}
			p {
				margin-bottom: 10px;
				text-indent: 2;
				text-align: justify;
			}
		}
	}
	.replay h3 {
		line-height: 3;
		padding-left: 5%;
	}
	.replay_wrapper {
		padding: 1rem;
		background: #fff;
		margin-bottom: .8rem;
		.replay_head {
			display: flex;
			align-items: center;
			padding: 0.4rem;
			h1 {
				padding-bottom: 6px;
				font-size: 14px;
				font-weight: normal;
				color: #333;
			}
			.replay_time {
				color: #ccc;
				font-size: 12px;
			}
			.replay_img {
				margin-right: 12px;
				width: 2.4rem;
				height: 2.4rem;
				border-radius: 50%;
			}
		}
		.replay_text {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			padding: 0 1rem;
			text-align: left;
			min-height: 4rem;
		}
		.markdown-text {
			color: #333;
			line-height: 1.5;
		}
	}	
</style>