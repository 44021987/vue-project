<template>
	<div>
		<div id="header">
			<i v-show="showBack" class="go_back el-icon-arrow-left" @click="goBack"></i>
			<h5>{{title}}</h5>
			<i id="menu" class="fa fa-bars" @click="showNav"></i>
		</div>
		<div class="menu_cover" v-show="showCover" @click="hideNav"></div>
		<menu-nav :showCover="showCover" v-on:hideMenu="hideNav"></menu-nav>
	</div>
</template>

<script>
	import Menu from '@/components/menu.vue';
	export default {
		components: {
			menuNav: Menu
		},
		data () {
			return {
				showCover: false,
				title: "",
				showBack: true
			}
		},
		created () {
			const tab = this.$route.path.split("/").pop();
			this.getHeadTitle(tab);
		},
		methods: {
			goBack () {
				this.$router.goBack();
			},
			showNav () {
				this.showCover = !this.showCover;
				document.querySelector(".page").classList.add("fixed", "slide_right");
			},
			hideNav () {
				this.showCover = !this.showCover;
				document.querySelector(".page").classList.remove("slide_right", "fixed");
			},
			// 设置head部分的title
			getHeadTitle (route) {
				this.showBack = true;
				switch (this.$route.name) {
					case "RootPath":
						this.title = this.getPath(route);
						break;
					case "ArticleRouter":
						this.title = "文章";
						break;
					case "UsersRouter":
						this.title = "用户";
						break;
					case undefined:
						this.title = "首页";
						this.showBack = !this.showBack;
						break;
					default:
						this.title = "";
						break;
				}
			},
			getPath (tab) {
				let str = "";
				switch (tab){
					case "all":
						str = "全部";
						break;
					case "good":
						str = "精华";
						break;
					case "ask":
						str = "问答";
						break;
					case "share":
						str = "分享";
						break;
					case "job":
						str = "招聘";
						break;
					case "about":
						str = "关于";
						break;
					default:
						str = "";
						break;
				}
				return str;
			}
		},
		watch: {
			$route (to, from) {
				const tab = to.path.split("/").pop();
				this.getHeadTitle(tab);
			}
		}
	}
</script>

<style lang="less">
	#header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 50px;
		background: rgba(255, 255, 255, .9);
		color: #333;
		line-height: 50px;
		text-align: center;
		box-shadow: 0 0 1rem 0 #ccc;
		h5 {
			font-weight: normal;
			font-size: 18px;
		}
		i.go_back, #menu {
			position: absolute;
			width: 30px;
			top: 50%;
			
			margin-top: -8px;
			font-size: 16px;
			font-weight: normal;
			cursor: pointer;
		}
		i.go_back {
			left: 1rem;
		}
		#menu {
			right: 1rem;
		}
	}
	.menu_cover {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,.2);
		z-index: 1;
	}
</style>