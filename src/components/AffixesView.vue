<template>
  <div>
    <el-button
      size="mini"
      type="primary"
      @click="callJsZip()"
      style="margin-bottom: 10px"
      >다운로드</el-button
    >
    <el-table border :data="listData" stripe>
      <el-table-column label="ID" prop="id" width="80"></el-table-column>
      <el-table-column label="Key" prop="Key" width="200"></el-table-column>
      <el-table-column label="한국어" prop="koKR">
        <template slot-scope="scope">
          <el-input v-model="scope.row.koKR" size="mini"></el-input>
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
              <!-- @click="setColor(scope.row, item.value)" -->
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import JSZip from "jszip";
import affixes from "../resources/data/local/lng/strings/item-gems.json";
import colors from "../resources/colors/index";

export default {
  name: "Main",
  data() {
    return {
      listData: affixes,
      colorsArr: [],
      editValue: null,
    };
  },
  created() {
    this.colorsArr = colors;
  },
  mounted() {},
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
      var data = JSON.stringify(affixes, null, "\t");
      var zip = new JSZip();

      var strings = zip
        .folder("data")
        .folder("local")
        .folder("lng")
        .folder("strings");
      strings.file("item-nameaffixes.json", data);
      zip.generateAsync({ type: "blob" }).then(async function (content) {
        console.log("content = ", content);

        const url = window.URL.createObjectURL(new Blob([content]));
        const anchor = document.createElement("a");

        anchor.href = url;
        anchor.setAttribute("download", "D2RTeditor.mpq.zip");
        document.body.appendChild(anchor);
        anchor.click();
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
