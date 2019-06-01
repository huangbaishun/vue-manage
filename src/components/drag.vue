<template>
  <div class="drag">
    <div class="des">拖拽元素和组件</div>
    <div class="container">
      <div class="box">
        <h3>todo</h3>
        <draggable v-model="todo" @remove="removeChange" :options="dragOptions">
          <transition-group tag="div" id="todo" class="item-ul">
            <div v-for="item in todo" :key="item.id" class="drag-item">{{ item.content }}</div>
          </transition-group>
        </draggable> 
      </div>
      <div class="box">
        <h3>doing</h3>
        <draggable v-model="doing" @remove="removeChange" :options="dragOptions">
          <transition-group tag="div" id="todo" class="item-ul">
            <div v-for="item in doing" :key="item.id" class="drag-item">{{ item.content }}</div>
          </transition-group>                    
        </draggable> 
      </div>
      <div class="box">
        <h3>done</h3>
        <draggable v-model="done" @remove="removeChange" :options="dragOptions">
          <transition-group tag="div" id="todo" class="item-ul">
            <div v-for="item in done" :key="item.id" class="drag-item">{{ item.content }}</div>
          </transition-group>          
        </draggable>
      </div>
    </div>
  </div>
</template>
<script>
import draggable from 'vuedraggable';
export default {
  name: 'drag',
  data() {
    return {
      dragOptions: {
        animation: 120,
        scroll: true,
        group: 'sortList',
        ghostClass: 'ghost-style'
      },
      todo: [{
        id: 1,
        content: 'qqqqq'
      }, {
        id: 2,
        content: 'wwww'
      }, {
        id: 3,
        content: 'eeee'
      }],
      doing: [{
        id: 1,
        content: 'aaaa'
      }, {
        id: 2,
        content: 'sssss'
      }],
      done: [{
        id: 1,
        content: 'zzzz',
      }, {
        id: 2,
        content: 'xxxx'
      }]
    }
  },
  components: {
    draggable
  },
  methods: {
    removeChange(event) {
      this.$message.success(`从 ${event.from.id} 移动到 ${event.to.id} `);
    }
  },
}
</script>
<style scoped>
  .drag {
    padding: 20px;
    width: 100%;
    height: 100%;
    background-color: #eee;
  }
  .drag .des {
    margin-bottom: 100px;
  }
  .container {
    display: flex;
  }
  .container .box {
    flex: 1;
    max-width: 330px;
    min-width: 300px;
    background-color: #eff1f5;
    margin-right: 15px;
    border-radius: 6px;
    border: 1px #e1e4e8 solid; 
  }
  .box h3 {
    padding: 8px 8px 12px;
  }
  .drag-item {
    padding: 10px;
    border: 1px #e1e4e8 solid;
    margin: 5px 0 10px;
    background-color: #fff;
    border-radius: 6px;
    cursor: pointer;
    transition: border 0.3 ease-in;
  }
  .drag-list:hover {
    border: 1px solid #20a0ff;
  }
  .item-ul{
    padding: 0 8px 8px;
    height: 500px;
    overflow-y: scroll;
  }
  .item-ul::-webkit-scrollbar{
    width: 0;
  }
  .ghost-style{
    display: block;
    color: transparent;
    border-style: dashed
  }
</style>

