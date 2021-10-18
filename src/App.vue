<template>
  <div id="app">
    본 페이지는 아직 개발중 입니다.<br>
    결론 = 아직 이용못하니 대충 보다 가시기 바랍니다.
    <div id="logo">
      <img src="./assets/logo.png" />
    </div>
    <div id="contents">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#logo {
  text-align: center;
}
</style>
