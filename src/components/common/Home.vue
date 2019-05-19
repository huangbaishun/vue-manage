<template>
  <div class="wrapper">
    <v-header></v-header>
    <side-bar></side-bar>
    <div class="wrapper-view">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import vHeader from './Header.vue';
import SideBar from './SideBar.vue';
export default {
  data(){
    return {

    }
  },
  components: {
    vHeader,
    SideBar,
  }
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
    left: 100px;
    bottom: 0;
  }
</style>