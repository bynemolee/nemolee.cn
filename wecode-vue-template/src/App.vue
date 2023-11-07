<template>
  <div id="app">
    <!-- 通过@/router查看子路由对应的组件 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {};
  },
  created() {
    console.log(1111);
    window.HWH5.addEventListener({
      type: 'back',
      func: () => {
        // 监听页面返回事件，return true直接返回，return false，拒绝返回。只支持安卓
        const flag = true;
        return flag;
      }
    }).catch(error => {
      console.log('监听事件发生异常', error);
    });
  }
};
</script>
