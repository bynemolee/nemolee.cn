<template>
  <div class="weui-article">
    <h1>Wecode Vue 模板说明</h1>
    <h2>
      参照
      <router-link to="/desc" class="desc-link"> Wecode Reat模板 </router-link>
      实现的第三方模板。
    </h2>
    <ul class="advantage">
      <li>基于Vue-cli3.0进行制作。</li>
      <li>遵循Wlk-cli集成规范。</li>
      <li>允许开发者自由定制。</li>
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
.desc-link {
  color: #2b88e6;
}
</style>
