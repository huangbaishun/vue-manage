<template>
  <div class="edit">
    <h1>Vue-Quill-Editer访问地址：<a href="https://github.com/surmon-china/vue-quill-editor" target="_blank">Vue-Quill-Editer</a></h1>
    <quill-editor v-model="content" :options="editorOption" style="height: 100%"></quill-editor>  
  </div>
</template>
<script>
// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'

export default {
  data() {
    return {
      content: '',
      editorOption: {
        // some quill options
        placeholder: "hellow word"
      }
    }
  },
  components: {
    quillEditor
  }
}
</script>
<style scoped>
  .edit {
    height: 50%;
  }
</style>

