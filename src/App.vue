<template>
  <div id="app">
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
