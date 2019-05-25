<template>
  <div class="side-bar">
    <el-menu class="sidebar-elmenu" background-color="#324157" text-color="#bfcbd9" active-text-color="#20a0ff" :collapse="collapse" unique-opened router>
			<!-- 使用template无语义化的标签 -->
        <template v-for="item in items">
            <template v-if="item.subs">
                <el-submenu :key="item.index" :index="item.index">
                    <template slot="title">
                        <i :class="item.icon"></i>
                        <span slot="title">{{ item.title }}</span>
                    </template>
                    <template v-for="subitem in item.subs">
                            <el-submenu v-if="subitem.subs" :key="subitem.index" :index="subitem.index">
                                <template slot="title">{{ subitem.title }}</template> 
                                <el-menu-item v-for="(three, i) in subitem.subs" :key="i" :index="three.index">
                                    {{ three.title }}
                                </el-menu-item>
                            </el-submenu>
                            <el-menu-item v-else :index="subitem.index" :key="subitem.index">{{ subitem.title }}</el-menu-item>
                    </template>
                </el-submenu>
            </template>
            <template v-else>
                <el-menu-item :index="item.index" :key="item.index">
                    <i :class="item.icon"></i>
                    <span slot="title">{{ item.title }}</span>
                </el-menu-item>
            </template>
        </template> 
    </el-menu>
  </div>
</template>
<script>
import Bus from './Bus';
export default {
  data() {
    return {
      collapse: false,
      items: [
          {
              icon: 'el-icon-message',
              index: 'dashboard',
              title: '系统首页'
          },
          {
              icon: 'el-icon-tickets',
              index: 'table',
              title: '基础表格'
          },
          {
              icon: 'el-icon-more',
              index: 'tabs',
              title: 'tab选项卡'
          },
          {
              icon: 'el-icon-view',
              index: '3',
              title: '表单相关',
              subs: [
                  {
                      index: 'form',
                      title: '基本表单'
                  },
                  {
                      index: '3-2',
                      title: '三级菜单',
                      subs: [
                          {
                              index: 'editor',
                              title: '富文本编辑器'
                          },
                          {
                              index: 'markdown',
                              title: 'markdown编辑器'
                          },
                      ]
                  },
                  {
                      index: 'upload',
                      title: '文件上传'
                  }
              ]
          },
          {
              icon: 'el-icon-plus',
              index: 'icon',
              title: '自定义图标'
          },
          {
              icon: 'el-icon-upload',
              index: 'charts',
              title: 'schart图表'
          },
          {
              icon: 'el-icon-rank',
              index: '6',
              title: '拖拽组件',
              subs: [
                  {
                      index: 'drag',
                      title: '拖拽列表',
                  },
                  {
                      index: 'dialog',
                      title: '拖拽弹框',
                  }
              ]
          },
          {
              icon: 'el-icon-loading',
              index: 'i18n',
              title: '国际化功能'
          },
          {
              icon: 'el-icon-question',
              index: '7',
              title: '错误处理',
              subs: [
                  {
                      index: 'permission',
                      title: '权限测试'
                  },
                  {
                      index: '404',
                      title: '404页面'
                  }
              ]
          }
      ]
    }
  },
  created() {
      Bus.$on('collapse', message => {
          this.collapse = message;
      })
  },
}
</script>
<style scoped>
  .side-bar {
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    overflow-y: auto;
  }
  .side-bar ul {
      height: 100%;
  }
  .sidebar-elmenu:not(.el-menu--collapse) {
      width: 200px;
  }
</style>
