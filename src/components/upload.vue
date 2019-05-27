<template>
  <div>
    <p>Element Ui 上传组件</p>
    <p>图片上传：</p>
    <el-upload
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <p>图片的裁剪</p>
    <p>vue-cropper地址: <a href="https://github.com/Agontuk/vue-cropperjs" target="_blank">vue-cropper</a></p>
    <!-- <vue-cropper
      ref="cropper"
      :src="imgSrc"
      alt="Source Image"
      :cropmove="cropImage">
    </vue-cropper> -->
    <div class="crop-img">
      <img :src="cropImg" alt="" class="pre-img">
      <div class="btn">
        选择图片
        <input type="file" name="image" accept="image/*" @change="setImage" class="crop-input"/>
      </div>
    </div>
    <el-dialog title="裁剪图片"
      :visible.sync="dialogVisible"
      width="30%">
    <vue-cropper
      ref="cropper"
      :src="imgSrc"
      alt="Source Image"
      style="width: 100%; height: 300px;"
      :ready="cropImage"
      :zoom="cropImage"
      :cropmove="cropImage">
    </vue-cropper>
    <span slot="footer">
      <el-button @click="cancelCrop">取消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确定</el-button>
    </span>
    </el-dialog>
  </div>
</template>
<script>
// Local
import VueCropper from 'vue-cropperjs';
import 'cropperjs/dist/cropper.css';

export default {
  data() {
    return {
      defaultUrl: require('../assets/logo.png'),
      imageUrl: '',
      dialogVisible: false,
      cropImg: '',
      imgSrc: '',
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    }, 
    setImage(e) {
        const file = e.target.files[0];
        if (!file.type.includes('image/')) {
          alert('error');
          return;
        }
        const reader = new FileReader();
        reader.onload = (event) => {
          this.dialogVisible = true;
          this.imgSrc = event.target.result;
          this.$refs.cropper && this.$refs.cropper.replace(event.target.result);
        }
        reader.readAsDataURL(file);
    },
    cropImage() {
      this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
    },
    cancelCrop() {
      this.dialogVisible = false;
      this.cropImg = this.defaultUrl;
    },

  },
  components: {
    VueCropper
  },
  created() {
    this.cropImg = this.defaultUrl;
  },
}
</script>
<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .crop-img {
    display: flex;
    align-items: flex-end;
  }
  .pre-img {
    width: 100px;
    height: 100px;
    background: #f8f8f8;
    border: 1px solid #eee;
    border-radius: 5px;
  }
  .crop-img .btn {
    position: relative;
    width: 100px;
    height: 40px;
    line-height: 40px;
    padding: 0 20px;
    margin-left: 30px;
    background-color: #409eff;
    color: #fff;
    font-size: 14px;
    border-radius: 4px;
    box-sizing: border-box;
  }
  .crop-input {
    position: absolute;
    width: 100px;
    height: 40px;
    left: 0;
    top: 0;
    opacity: 0;
    cursor: pointer;
  }
</style>
