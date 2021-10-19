<template>
  <div>
    <!-- <el-button size="mini" type="primary">저장</el-button>
    <el-button
      size="mini"
      type="primary"
      style="margin-bottom: 10px"
      @click="download"
      >다운로드</el-button
    > -->

    <el-row>
      <el-col :span="2">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span>Navigator Two</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-setting"></i>
            <span>Navigator Four</span>
          </el-menu-item>
          <el-menu-item index="3">
            <el-button size="mini" @click="download"
              ><i class="el-icon-download" /> 저장</el-button
            >
          </el-menu-item>
        </el-menu>
      </el-col>

      <el-col :span="22">
        <el-tabs type="border-card">
          <el-tab-pane label="보석">
            <gems-view />
          </el-tab-pane>

          <el-tab-pane label="접두사">
            <affixes-view />
          </el-tab-pane>

          <el-tab-pane label="아이템 설명">item-modifieres</el-tab-pane>

          <el-tab-pane label="아이템명">item-names</el-tab-pane>

          <el-tab-pane label="룬">item-runes</el-tab-pane>

          <!-- <el-tab-pane label="맵">levels</el-tab-pane> -->

          <!-- <el-tab-pane label="용병">mercenaries</el-tab-pane> -->

          <!-- <el-tab-pane label="몬스터">monsters</el-tab-pane> -->

          <!-- <el-tab-pane label="NPC">npcs</el-tab-pane> -->

          <!-- <el-tab-pane label="물체">objects</el-tab-pane> -->

          <!-- <el-tab-pane label="액트">presence-states</el-tab-pane> -->

          <!-- <el-tab-pane label="퀘스트">quests</el-tab-pane> -->

          <!-- <el-tab-pane label="신단">shrines</el-tab-pane> -->
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import AffixesView from "./AffixesView.vue";
import GemsView from "./GemsView.vue";

export default {
  name: "Main",
  components: {
    AffixesView,
    GemsView,
  },
  data() {
    return {
      fileList: [],
    };
  },
  created() {},
  mounted() {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    download() {
      var genFile = require("../util/genFile");
      var data = this.$store.state.strings.item_gems;

      genFile.setData(data);
      genFile.setStringData("strings", "item-gems.json");
      genFile.setModData();
      genFile.download("D2RTeditor");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
