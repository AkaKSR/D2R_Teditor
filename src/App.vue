<template>
  <div id="app">
    <el-row>
      <div id="logo">
        <img src="./assets/logo.png" />
      </div>
    </el-row>

    <el-row>
      <el-col :span="3">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @select="handleSelect"
        >
          <el-menu-item index="D2RMain">
            <i class="el-icon-s-home" />
            <span>메인</span>
          </el-menu-item>

          <el-submenu index="2">
            <template slot="title">
              <img src="./assets/d2r.png" height="24" width="24" />
              <span>레저렉션</span>
            </template>
            <el-menu-item index="Gems_re">보석</el-menu-item>
            <el-menu-item index="Affixes_re">접두사</el-menu-item>
            <el-menu-item index="ItemName_re">아이템명</el-menu-item>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <img src="./assets/d2o.png" height="24" width="24" />
              <span>레거시</span>
            </template>
            <el-menu-item index="Gems_le">보석</el-menu-item>
            <el-menu-item index="Affixes_le">접두사</el-menu-item>
            <el-menu-item index="ItemName_le">아이템명</el-menu-item>
          </el-submenu>
        </el-menu>

        <el-button
          size="mini"
          @click="download"
          style="margin-left: 10px; margin-top: 10px"
          ><i class="el-icon-download" /> 저장</el-button
        >
      </el-col>
      <el-col :span="21">
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
      var data = this.$store.state;

      var legacy = data.strings_legacy;
      var res = data.strings;

      console.log("data = ", data);

      var res_key = Object.getOwnPropertyNames(res);
      res_key.splice(res_key.length - 1, res_key.length);

      var legacy_key = Object.getOwnPropertyNames(legacy);
      legacy_key.splice(legacy_key.length - 1, legacy_key.length);

      // 레저렉션 데이터 투입
      for (var i = 0; i < res_key.length; i++) {
        if (res[res_key[i]].length != 0) {
          genFile.setData(res_key[i].replace("_", "-"), "strings", res[res_key[i]]);
        }
      }

      // 레거시 데이터 투입
      for (var i = 0; i < legacy_key.length; i++) {
        if (legacy[legacy_key[i]].length != 0) {
          genFile.setData(legacy_key[i].replace("_", "-"), "strings-legacy", legacy[legacy_key[i]]);
        }
      }

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
