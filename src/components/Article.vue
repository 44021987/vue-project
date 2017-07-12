<template>
	<div class="page_wrapper">
		<div class="content_main">
			<div class="page_info">
				<span>发布于：{{dataList.create_at}}</span>
				<span>浏览量：{{dataList.visit_count}}</span>
				<span>作者：{{dataList.author.loginname}}</span>
			</div>
			<div class="page_title">
				<h2>{{dataList.title}}</h2>
			</div>
			<div class="page_main" v-html="dataList.content"></div>
		</div>
		<side-sec :dataList="dataList"></side-sec>
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
				dataList: null
			}
		},
		beforeCreate () {
			this.$http({
                url: `https://cnodejs.org/api/v1${this.$route.path}`,
                method: 'get',
            }).then((res) => {
                if (res.body.success === true) {
//              	console.log(JSON.stringify(res.data))
                    this.dataList = res.body.data;
                } else {
                    this.dataList = 'Sorry, Something wrong happened when getting the remote data';
                }
            }).catch((res) => {
                console.log('ArticleCom.vue: ', res);
            });
		}
	}
</script>

<style>
	body {
		background: #F3F6FA;
	}
	.page_wrapper {
		display: flex;
		justify-content: center;
	}
	.content_main {
		padding: 2rem 0;
		width: 55%;
		margin-right: 4%;
		border: 1px solid #ddd;
	}
	.page_info, .page_title {
		text-align: center;
	}
	.page_main {
		width: 90%;
		margin: auto;
	}
	.page_main img {
		width: 80%;
	}
	.page_main li, .page_main p {
		line-height: 1.8;
	}
		
</style>