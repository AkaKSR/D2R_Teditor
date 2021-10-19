<template>
  <div id="app">
    <el-row>
      본 페이지는 아직 개발중 입니다.<br />
      결론 = 아직 이용못하니 대충 보다 가시기 바랍니다.
      <div id="logo">
        <img src="./assets/logo.png" />
      </div>
    </el-row>

    <el-row>
      <el-col :span="2">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @select="handleSelect"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>레저렉션</span>
            </template>
            <el-menu-item index="Gems_re">보석</el-menu-item>
            <el-menu-item index="Affixes_re">접두사</el-menu-item>
            <el-menu-item index="ItemName_re">아이템명</el-menu-item>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-setting"></i>
            <span>레거시</span>
          </el-menu-item>
          <el-menu-item index="3">
            <el-button size="mini" @click="download"
              ><i class="el-icon-download" /> 저장</el-button
            >
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="22">
        <router-view />
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    handleSelect(key, keyPath) {
      this.$router.push({
        name: key,
      });
    },
    download() {
      var genFile = require("./util/genFile");
      var data = this.$store.state.strings;

      genFile.setData("item-gems", "strings", data.item_gems);
      genFile.setModData("D2RTeditor", "../");
      genFile.download("D2RTeditor");
    },
  },
};
</script>

<style>
#logo {
  text-align: center;
}
</style>
