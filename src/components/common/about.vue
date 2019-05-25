<template>
  <div class="container">
    <div class="filter-btn">
      <el-button type="primary" icon="delete" class="mr" @click="deleteAll">批量删除
      </el-button>
      <el-select placeholder="筛选省份" class="mr wid" v-model="select_city">
        <el-option key="1" label="湖南省" value="湖南省"></el-option>
        <el-option key="2" label="xxx" value="xxx"></el-option>
      </el-select>
      <el-input placeholder="筛选关键字" v-model="keywords" class="keyword mr"></el-input>
      <el-button type="primary" icon="search" @click="searchKeyword">搜索</el-button>
    </div>
    <el-table
      :data="tableDatas"
      style="width: 100%;"
      ref="multipleTabel"
      @selection-change="selectionChange">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column
        label="操作"
        width="180">
        <template slot-scope="scope">
          <el-button
            type="text"
            icon="el-icon-edit" @click="Edit(scope.$index, scope.row)">编辑
          </el-button>
          <el-button type="text" style="color: red"
            icon="el-icon-delete" @click="Delete(scope.$index, scope.row)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination background layout="prev, pager, next" @current-change="currentChange" :total="sum">
      </el-pagination>
    </div>

    <el-dialog title="编辑" :visible.sync="editDialog" width="30%">
      <el-form label-width="60px" :model="form">
        <el-form-item label="姓名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="日期">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 100%;"></el-date-picker>
      </el-form-item>
      <el-form-item label="地址">
          <el-input v-model="form.address"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer">
        <el-button @click="editDialog = false">取消</el-button>
        <el-button @click="editSure">确定</el-button>
      </span>
    </el-dialog>

    <el-dialog
      title="提示"
      :visible.sync="deleteDialog"
      width="300px" center>
      <div style="text-align: center">删除不可恢复，是否确定删除?</div>
      <span slot="footer">
        <el-button @click="deleteDialog = false">取消</el-button>
        <el-button type="primary" @click="deleteSure">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [],
      curPage: 1,
      cur_idx: -1,
      select_city: '',
      sum: 100,
      deleteDialog: false,
      editDialog: false,
      keywords: "",
      is_del: false,
      selectRow: [],
      form: {
        name: '',
        date: '',
        address: ''
      }
    }
  },
  computed: {
    tableDatas() {
      if (this.keywords) {
        return this.tableData.filter((item) => {
          return (item.name.indexOf(this.keywords) > -1 && item) || (item.date.indexOf(this.keywords) > -1 && item) || (item.address.indexOf(this.keywords) > -1 && item);
        })
      } else {
        return this.tableData;
      }
    }
  },
  methods: {
    getData() {
      this.$axios.post('https://www.easy-mock.com/mock/592501a391470c0ac1fab128/ms/table/list',{
        page: this.curPage
      }).then((res) => {
        this.$nextTick(() => {
          this.tableData = res.data.list;
        })
      })
    },
    searchKeyword() {
      //
    },
    currentChange(val) {
      this.curPage = val;
      this.getData();
    },
    Edit(index, row) {
      this.cur_idx = index;
      let cur_item = this.tableData[index];
      this.form = {
        name: cur_item.name,
        date: cur_item.date,
        address: cur_item.address
      }
      this.editDialog = true;
    },
    editSure() {
      //官网推荐写法 Object.assign()不刷新页面;
      this.tableData[this.cur_idx] = Object.assign(this.tableData[this.cur_idx], this.form)
      // this.$set(this.tableData, this.cur_idx, this.form);
      this.editDialog = false;
      this.$message.success('修改成功');

    },
    Delete(index, row) {
      this.cur_idx = index;
      this.deleteDialog = true;
    },
    deleteSure() {
      this.tableData.splice(this.cur_idx, 1);
      this.$message.success('删除成功');
      this.deleteDialog = false;
    },
    selectionChange(val) {
      this.selectRow = val;
    },
    deleteAll() {
      this.is_del = true;
      let name = '';
      this.selectRow.forEach((item) => {
        name += item.name + ',';
      });
      for (let index = this.tableData.length - 1; index >= 0; index--) {
        for (let i = 0; i < this.selectRow.length; i++) {
          if (this.tableData[index].id === this.selectRow[i].id) {
            this.tableData.splice(index, 1);
          }
        }
      };
      this.$message.error( `${name}删除成功!`);
      this.selectRow = [];
    }
  },
  created() {
    this.getData();
  },
}
</script>
<style scoped>
  .container {
    overflow-y: auto;
    height: 100%;
    width: auto;
    padding: 10px;
  }
  .mr {
    margin-right: 10px;
  }
  .wid {
    width: 120px;
  }
  .filter-btn {

  }
  .keyword {
    width: 300px;
    display: inline-block;
  }
</style>

