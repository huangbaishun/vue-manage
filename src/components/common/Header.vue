<template>
  <div class="common-header">
    <div class="collapse-btn">
      <i class="el-icon-menu"></i>
    </div>
    <div class="title">后台管理系统</div>
    <div class="meaasge">
      <div class="message">
        <!-- 全屏显示 -->
        <div class="full-screen">
          <el-tooltip placement="bottom" effect="dark" content="全屏">
            <i class="el-icon-rank"></i>
          </el-tooltip>
        </div>
        <!-- 消息中心 -->
        <div class="bell">
          <el-tooltip placement="bottom" effect="dark" content="消息">
            <i class="el-icon-bell"></i>
          </el-tooltip>
          <span class="btn-bell-badge"></span>
        </div>
        <!-- 用户头像 -->
        <div class="user-avator">
          <img src="../../assets/img/user-logo.png" alt="">
        </div>
        <!-- 用户名下拉菜单 -->
        <div class="user-menu">
          123
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  .common-header {
    position: fixed;
    top: 0;
    left: 0;
    height: 70px;
    background-color: #242f42;
    font-size: 22px;
    color: #fff;
    width: 100%;
  }
  .collapse-btn {
    float: left;
    padding: 0 21px;
    cursor: pointer;
    line-height: 70px;
  }
  .common-header .title {
    float: left;
    width:250px;
    line-height: 70px;
  }
  .meaasge {
    float: right;
    padding-right: 50px;
    line-height: 70px;
  }
  .message {
    display: flex;
    height: 70px;
  }
  .message .full-screen {
    transform: rotate(45deg);
    margin-right: 5px;
  }
  .message .bell {

  }
  .message .user-avator img{
    display: inline-block;
    height: 60%;
    vertical-align: middle;
  }
  .message .user-menu {

  }
</style>