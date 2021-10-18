<template>
  <div>
    <el-button size="mini" type="primary" >저장</el-button>
    <el-button
      size="mini"
      type="primary"
      style="margin-bottom: 10px"
      >다운로드</el-button
    >
    <el-tabs type="border-card">
      <el-tab-pane label="보석">item-gems</el-tab-pane>
      <el-tab-pane label="접두사">
        <affixes-view />
      </el-tab-pane>
      <el-tab-pane label="아이템 설명">item-modifieres</el-tab-pane>
      <el-tab-pane label="아이템명">item-names</el-tab-pane>
      <el-tab-pane label="룬">item-runes</el-tab-pane>
      <el-tab-pane label="맵">levels</el-tab-pane>
      <el-tab-pane label="용병">mercenaries</el-tab-pane>
      <el-tab-pane label="몬스터">monsters</el-tab-pane>
      <el-tab-pane label="NPC">npcs</el-tab-pane>
      <el-tab-pane label="물체">objects</el-tab-pane>
      <el-tab-pane label="액트">presence-states</el-tab-pane>
      <el-tab-pane label="퀘스트">quests</el-tab-pane>
      <el-tab-pane label="신단">shrines</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import AffixesView from './AffixesView.vue';

export default {
  name: "Main",
  components: {
    AffixesView
  },
  data() {
    return {
      fileList: [],
    };
  },
  created() {
    console.log(this.$store.state);
  },
  mounted() {},
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`Cancel the transfert of ${file.name} ?`);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
