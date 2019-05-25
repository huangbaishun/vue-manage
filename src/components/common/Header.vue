<template>
  <div class="common-header">
    <div class="collapse-btn" @click="collapseChange">
      <i class="el-icon-menu"></i>
    </div>
    <div class="title">后台管理系统</div>
    <div class="meaasge">
      <div class="message">
        <!-- 全屏显示 -->
        <div class="full-screen" @click="fullScreen">
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
        <div class="user-menu" @click="loginout">
          <span>loginout</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Bus from './Bus';
export default {
  data () {
    return {
      collapse: false,
      fullscreen: false
    }
  },
  methods: {
    collapseChange() {
      this.collapse = !this.collapse;
      Bus.$emit('collapse', this.collapse);
    },
    //全屏处理
    fullScreen() {
      let el = document.documentElement;
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        if (el.requestFullscreen) {
          el.requestFullscreen();
        } else if (el.webkitRequestFullScreen) {
          el.webkitRequestFullScreen();
        } else if (el.mozRequestFullScreen) {
          el.mozRequestFullScreen();
        } else if(el.msRequestFullscreen) {
          el.msRequestFullscreen();
        }
      }
      this.fullscreen = !this.fullscreen;
    },
    loginout() {
      let username = localStorage.removeItem('username');
      this.$router.push('/login');
    }
  }
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
  .message > div {
    margin: 0 10px;
  }
  .message .full-screen {
    transform: rotate(45deg);
    margin-right: 5px;
  }
  .message .user-avator {
    /* 兼容MAC */
    width: 100%;
  }
  .message .user-avator img{
    display: inline-block;
    height: 60%;
    vertical-align: middle;
  }
  .message .user-menu {
    cursor: pointer;
  }
</style>