<template>
  <div class="weui-article">
    <h1>Wecode React 模板说明</h1>
    <h2>一套 weui 设计语言和 React 实现：</h2>
    <ul class="advantage">
      <li>符合官方交互语言和视觉风格。</li>
      <li>开箱即用的高质量 React 组件。</li>
      <li>本地开发自动检测JSAPI新版本并集成到开发环境。</li>
      <!-- 通过@/router查看子路由对应的组件 -->
      <router-view></router-view>
      <router-link to="/desc/subpage1">subpage1</router-link>
      <br />
      <router-link to="/desc/subpage2">subpage2</router-link>
    </ul>
  </div>
</template>
<style lang="less" scoped>
.advantage {
  list-style: circle;
  padding-left: 20px;

  li {
    margin-bottom: 10px;
  }
}
</style>
