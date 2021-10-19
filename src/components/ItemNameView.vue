<template>
  <div>
    <el-table border :data="filterSearch" stripe>
      <el-table-column label="ID" prop="id" width="80">
        <template slot="header">
          ID
          <br />
          <input
            type="text"
            size="mini"
            v-model="filter.id"
            style="width: 85%"
            placeholder="검색"
          />
        </template>
      </el-table-column>

      <el-table-column label="Key" prop="Key" width="200">
        <template slot="header">
          Key<br />
          <input
            type="text"
            size="mini"
            v-model="filter.key"
            style="width: 85%"
            placeholder="검색"
          />
        </template>
      </el-table-column>

      <el-table-column label="한국어" prop="koKR">
        <template slot="header">
          한국어<br />
          <input
            type="text"
            size="mini"
            v-model="filter.koKR"
            style="width: 85%"
            placeholder="검색"
          />
        </template>
        <template slot-scope="scope">
          <el-input
            type="textarea"
            v-model="scope.row.koKR"
            size="mini"
          ></el-input>
        </template>
      </el-table-column>

      <el-table-column label="색상 추가" width="90" align="center">
        <template slot-scope="scope">
          <el-dropdown
            trigger="click"
            @command="setColorValue"
            @visible-change="setValue(scope.row)"
          >
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
import colors from "../resources/colors/index";

export default {
  name: "Gems_re",
  data() {
    return {
      colorsArr: [],
      editValue: null,
      searchID: null,
      filter: {
        id: "",
        key: "",
        koKR: "",
      },
    };
  },
  computed: {
    filterSearch() {
      return this.$store.state.strings.item_names.filter(
        (data) =>
          (!this.filter.id || String(data.id).includes(this.filter.id)) &&
          (!this.filter.key || String(data.Key).includes(this.filter.key)) &&
          (!this.filter.koKR || String(data.koKR).includes(this.filter.koKR))
      );
    },
  },
  async created() {
    const loading = this.$loading({
      lock: true,
      text: "데이터를 불러오는중입니다. 사양에 따라 최대 1~3분정도 소요됩니다.",
      spinner: "el-icon-loading",
      background: "rgba(0, 0, 0, 0.7)",
    });

    await this.$http("/static/data/local/lng/strings/item-names.json")
      .then((response) => {
        this.$store.state.strings.item_names = response.data;
        loading.close();
      })
      .catch((err) => {
        this.$message.error("데이터 불러오기 실패");
        loading.close();
      });

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
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
