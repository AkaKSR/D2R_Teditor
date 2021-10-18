<template>
  <div>
    <el-button size="mini" type="primary">저장</el-button>
    <el-button
      size="mini"
      type="primary"
      @click="callJsZip()"
      style="margin-bottom: 10px"
      >다운로드</el-button
    >
    <!-- <el-table border :data="listData" stripe> -->
    <el-table border :data="this.$store.state.strings.item_nameaffixes" stripe>
      <el-table-column label="ID" prop="id" width="80"></el-table-column>
      <el-table-column label="Key" prop="Key" width="200"></el-table-column>
      <el-table-column label="한국어" prop="koKR">
        <template slot-scope="scope">
          <el-input type="textarea" v-model="scope.row.koKR" size="mini"></el-input>
        </template>
      </el-table-column>
      <el-table-column label="색상 추가" width="90" align="center">
        <template slot-scope="scope">
          <el-dropdown trigger="click" @command="setColorValue" @visible-change="setValue(scope.row)">
            <el-button type="primary">
              <i class="el-icon-s-open" />
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                v-for="(item, i) in colorsArr"
                :key="item.key + i"
                :command="item.value"
                >{{ item.name }}</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import JSZip from "jszip";
import colors from "../resources/colors/index";

export default {
  name: "Main",
  data() {
    return {
      colorsArr: [],
      editValue: null,
    };
  },
  created() {
    this.colorsArr = colors;
    console.log("before store = ", this.$store.state.strings);
  },
  mounted() {
  },
  methods: {
    setValue(val) {
      this.editValue = val;
    },
    setColorValue(command) {
      this.setColor(command);
    },
    setColor(color) {
      var text = this.editValue.koKR;

      text += color;
      this.editValue.koKR = text;
    },
    callJsZip() {
      var genFile = require('../util/genFile');
      var data = this.$store.state.strings.item_nameaffixes;

      genFile.setData(data);
      genFile.setStringData('strings', 'item-nameaffixes.json');
      genFile.setModData();
      genFile.download("D2RTeditor");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
