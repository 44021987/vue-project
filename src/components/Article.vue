<template>
  <div class="page_wrapper" v-loading="loading">
    <h1 class="article_title">{{dataList.title}}</h1>
    <side-sec v-if="!loading" :dataList="dataList"></side-sec>
    <div class="page_main" v-html="dataList.content"></div>
    <div class="replay" v-if="replies.length">
      <h3>评论</h3>
      <div class="replay_wrapper" v-for="(item, index) in replies" :key="index">
        <div class="replay_head">
          <div>
            <router-link :to="{name: 'UsersRouter', params: {id: item.author.loginname}}">
              <img :src="item.author.avatar_url" class="replay_img" />
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
import sideSec from "@/components/indexSide";
import $http from "@/utils/request";
export default {
  components: {
    sideSec
  },
  data() {
    return {
      dataList: [],
      replies: [],
      loading: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.getReplies();
    }, 20);
  },
  methods: {
    getReplies() {
      $http({
        url: this.$route.path,
        method: "get"
      })
        .then(res => {
          if (res.success) {
            this.dataList = res.data;
            this.replies = this.dataList.replies.reverse();
          } else {
            this.dataList = "获取数据失败";
          }
        })
        .catch(res => {
          console.log("ArticleCom.vue: ", res);
        });
    },
    resetStyle() {
      const oTag = [...document.querySelectorAll("replay .markdown-text")]
      oTag.forEach((v, i) => {
        const oP = v.querySelectorAll("p");
        if (oP.length === 1) oP[0].style.textAlign = "center";
      });
    }
  },
  updated() {
    this.resetStyle()
  },
  watch: {
    dataList(val) {
      if (val) this.loading = false;
    }
  }
};
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
.replay {
  background-color: #f3f3f3;
}
.replay h3 {
  line-height: 3;
  padding-left: 5%;
}
.replay_wrapper {
  padding: 1rem;
  background: #fff;
  margin-bottom: 0.8rem;
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