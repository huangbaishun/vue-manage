<template>
  <div class="wrapper">
    <v-header></v-header>
    <side-bar></side-bar>
    <div class="wrapper-view" :class="{'collapse-change': collapse}">
      <transition name="move" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>
<script>
import vHeader from './Header.vue';
import SideBar from './SideBar.vue';
import Bus from './Bus';
export default {
  data(){
    return {
      collapse: false
    }
  },
  components: {
    vHeader,
    SideBar,
  },
  created() {
    Bus.$on('collapse', message => {
      this.collapse = message;
    })
  },
}
</script>
<style scoped>
  .wrapper {
      height: 100%;
      padding-top: 70px;
  }
  .wrapper-view {
    position: absolute;
    top: 70px;
    left: 200px;
    bottom: 0;
    right: 0;
    transition: left 0.3s ease-in-out;
    background-color: #f0f0f0;
  }
  .collapse-change {
    left: 65px;
  }
  .move-enter-active,
  .move-leave-active {
    transition: opacity 0.5s;
  }
  .move-enter,
  .move-leave {
    opacity: 0;
  }
</style>