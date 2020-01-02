<template>
  <div class="error-page">
    <div @click="save">
      保存
    </div>
    <div>
      <div style="margin-top:10px;">
        <el-form :rules="model.rules" :model="model"  ref="form">
          <!-- 表布局 -->
          <el-table
          border
          :data="model.tableData"
          style="width: 100%;"
          :default-sort = "{prop: 'date', order: 'descending'}"
          >
            <el-table-column
              width="100px"
              label="要求批次">
              <template slot-scope="scope">
                <el-form-item :prop="'tableData.' + scope.$index + '.input'" :rules='model.rules.name'>
                    <el-input style="width:80px"  v-model="scope.row.input" ></el-input>
                </el-form-item>
              </template>
            </el-table-column>
            <el-table-column
              width="180px"
              label="要求供应商">
              <template slot-scope="scope">
                <el-form-item :prop="'tableData.' + scope.$index + '.supplier'" :rules='model.rules.supplier'>
                    <el-select style="width:130px" v-model="scope.row.supplier" placeholder="请选择要求供应商"></el-select>
                </el-form-item>
              </template>
            </el-table-column>
            <el-table-column
              width="180px"
              label="要求生产日期">
                <template slot-scope="scope">
                  <el-form-item :prop="'tableData.' + scope.$index + '.producedate.start'" :rules='model.rules["producedate.start"]'>
                      <bingobox-datepicker type="date" :model="scope.row.producedate" ></bingobox-datepicker>
                  </el-form-item>
                </template>
              </el-table-column>
            <el-table-column
              width="180px"
              label="要求有效期至">
                <template slot-scope="scope">
                  <el-form-item :prop="'tableData.' + scope.$index + '.expireddate.start'" :rules='model.rules["expireddate.start"]'>
                      <bingobox-datepicker type="date" :model="scope.row.expireddate" ></bingobox-datepicker>
                  </el-form-item>
                </template>
            </el-table-column>
            <el-table-column
              width="150px"
              label="要求商品形态">
                <template slot-scope="scope">
                  <el-form-item :prop="'tableData.' + scope.$index + '.goodstatus'" :rules='model.rules.goodstatus'>
                      <el-select style="width:130px" v-model="scope.row.goodstatus" placeholder="请选择商品形态"></el-select>
                  </el-form-item>
                </template>
            </el-table-column>
            <el-table-column
              width="100px"
              label="期待出库数量">
                <template slot-scope="scope">
                  <el-form-item :prop="'tableData.' + scope.$index + '.name'" :rules='model.rules.name'>
                      <el-input style="width:80px"  v-model="scope.row.name" ></el-input>
                  </el-form-item>
                </template>
            </el-table-column>
            <el-table-column
                label="操作">
                <template slot-scope="scope">
                    <el-button size="small">删除</el-button>
                    </template>
            </el-table-column>
          </el-table>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      form:{
        supplier2:"",
        type:"",
        desc:"",
        input:""
      },
      model:{
        rules: {
          name:{ type:"string",required:true,message:"必填字段",trigger:"change"},
          input:{ type:"string",required:true,message:"必填字段",trigger:"change"},
          supplier:{ type:"string",required:true,message:"必填字段",trigger:"change"},
          goodstatus:{ type:"string",required:true,message:"必填字段",trigger:"change"},
          "producedate.start":{ type:"string",required:true,message:"必填字段",trigger:"change"},
          "expireddate.start":{ type:"string",required:true,message:"必填字段",trigger:"change"}
        },
        tableData:[{
          input:"",
          name:"",
          supplier:"",
          goodstatus:"",
          producedate:{
              start:""
          },
          expireddate:{
              start:""
          }
        },{
          input:"",
          name:"",
          supplier:"",
          goodstatus:"",
          producedate:{
              start:""
          },
          expireddate:{
              start:""
          }
        }]
      }
    }
  },
  methods: {
    add () {
      console.log(this.form);
    },
    save () {
      this.$refs["form"].validate((valid,model)=>{
        console.log(valid);
        console.log(model);
      })
    }
  }
}
</script>

<style scoped lang="less">
</style>
