<template>
	<div>
		<div id="header">
			<i v-show="routerRoot" class="go_back el-icon-arrow-left" @click="goBack"></i>
			<h5 v-show="!routerRoot">首页</h5>
			<i id="menu" class="fa fa-bars" @click="showNav"></i>
		</div>
		<div class="menu_cover" v-show="showCover" @click="hideNav"></div>
		<menu-nav :showCover="showCover"></menu-nav>
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
			}
		},
		computed: {
			routerRoot () {
				if (this.$route.name === "RootPath") return false;
				return true;
			}
		},
		methods: {
			goBack () {
				this.$router.goBack();
			},
			showNav () {
				this.showCover = !this.showCover;
				document.body.style.overflow = "hidden";
			},
			hideNav () {
				this.showCover = !this.showCover;
				document.body.style.overflow = "auto";
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
		bottom: 0;
		right: 0;
		background: rgba(0,0,0,.4);
		z-index: 1;
	}
</style>