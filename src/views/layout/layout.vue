<template>
    <div class="layout container">
      <router-view></router-view>
      <!--router开启路由模式-->
      <van-tabbar class="layout-tabbar" router>
        <van-tabbar-item>
          <i slot="icon" class="toutiao toutiao-shouye"></i>
          <span class="text">首页</span>
        </van-tabbar-item>
        <van-tabbar-item to="/qa">
          <i slot="icon" class="toutiao toutiao-wenda"></i>
          <span class="text">问答</span>
        </van-tabbar-item>
        <van-tabbar-item to="/video">
          <i slot="icon" class="toutiao toutiao-shipin"></i>
          <span class="text">视频</span>
        </van-tabbar-item>
        <van-tabbar-item to="/my">
          <i slot="icon" class="toutiao toutiao-wode"></i>
          <span class="text">{{$store.state.user ? '我的' : '未登录'}}</span>
        </van-tabbar-item>
      </van-tabbar>
    </div>
</template>

<script>
  export default {
    name: 'layout',
    data() {
      return {
      }
    }
  }
</script>

<style lang="less" scoped>
  .layout-tabbar {
    i.toutiao {
      font-size: 40px;
    }
    span.text {
      font-size: 20px;
    }
  }
</style>
