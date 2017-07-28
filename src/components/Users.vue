<template>
	<div class="user_wrapper" v-loading="loading">
		<div class="user_author">
			<div>
				<img :src="userInfo.avatar_url" alt="userInfo.loginname" />
			</div>
			<div>
				<h4>{{userInfo.loginname}}</h4>
				<h5><i class="fa fa-thumbs-up"></i>&nbsp; {{userInfo.score}}</h5>
				<h5>
					<i class="fa fa-github"></i>&nbsp; <a :href="'https://github.com/'+userInfo.githubUsername">https://github.com/{{userInfo.githubUsername}}</a>
				</h5>
				<h5><i class="fa fa-calendar"></i>&nbsp; {{String(userInfo.create_at).match(/.{10}/)[0]}}</h5>
			</div>
		</div>
		<div class="user_active"  v-show="userInfo.recent_replies.length>0">
			<h2>最近参与的话题</h2>
			<ul>
				<li v-for="item of userInfo.recent_replies">
					<div>
						<router-link :to="{name: 'UsersRouter', params: {id: item.author.loginname}}">
							<img :src="item.author.avatar_url" alt="item.author.loginname" />
						</router-link>
					</div>
					<div>
						<h5 class="title">
							<router-link :to="{name: 'ArticleRouter', params: {id: item.id}}"> {{item.title}} </router-link>
						</h5>
						<h6>最近更新时间：{{String(item.last_reply_at).match(/.{10}/)[0]}}</h6>
					</div>
				</li>
			</ul>
		</div>
		<div class="user_create" v-show="userInfo.recent_topics.length>0">
			<h2>最近创建的话题</h2>
			<ul>
				<li v-for="item of userInfo.recent_topics">
					<div>
						<router-link :to="{name: 'UsersRouter', params: {id: item.author.loginname}}">
							<img :src="item.author.avatar_url" alt="item.author.loginname" />
						</router-link>
					</div>
					<div>
						<h5 class="title">
							<router-link :to="{name: 'ArticleRouter', params: {id: item.id}}"> {{item.title}} </router-link>
						</h5>
						<h6>最近更新时间：{{String(item.last_reply_at).match(/.{10}/)[0]}}</h6>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				userInfo: {},
				loading: true
			}
		},
		created() {
            this.$http({
                url: `https://cnodejs.org/api/v1${this.$route.path}`,
                method: 'get',
            }).then((res) => {
                this.userInfo = res.data.data;
            }).catch((res) => {
                console.log('UserCom.vue: ', res);
            });
        },
        beforeRouteUpdate (to, from, next) {
        	this.$http({
                url: `https://cnodejs.org/api/v1${to.path}`,
                method: 'get',
            }).then((res) => {
                this.userInfo = res.data.data;
            }).catch((res) => {
                console.log('UserCom.vue: ', res);
            });
            next();
        },
        watch: {
			userInfo (val) {
				if (val) this.loading = false;
			}
		}
	}
</script>

<style lang="less">
	li {
		list-style: none;
	}
	.user_wrapper {
		text-align: left;
	}
	.padding_space {
		padding: 1rem;
	}
	.user_author {
		.padding_space ;
		border-bottom: 1px solid #ccc;
		display: flex;
		align-items: center;
		img {
			width: 4.5rem;
			height: 4.5rem;
			padding-right: 1rem;
		}
		h4 {
			color: #24292e;
			padding-bottom: .5rem;
		}
		h5 {
			font-weight: normal;
			line-height: 1.5;
		}
	}
	.user_active, .user_create {
		.padding_space;
		h2 {
			font-size: 16px;
			color: #24292e;
			line-height: 2;
		}
		ul>li {
			padding: 1rem 0;
			display: flex;
			align-items: center;
			img {
				width: 4rem;
				height: 4rem;
				margin-right: 1rem;
			}
			h5 {
				padding-bottom: 1rem;
				a {
					font-size: 16px;
				}
			}
			h6 {
				font-size: 12px;
				color: #C2C2C2
			}
		}
	}
</style>