<template>
  <el-form ref="form" :model="form" label-width="80px" class="add">
    <el-form-item label="商品名称">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
  
    <el-form-item label="商品图片" class="goods-image">
      <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog v-model="dialogVisible" size="tiny">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
    </el-form-item>
  
    <el-form-item label="商品类别">
      <el-select v-model="form.region" placeholder="请选择商品类别">
        <el-option label="钻石" value="shanghai"></el-option>
        <el-option label="金币" value="beijing"></el-option>
      </el-select>
      <el-button type="primary">添加类别</el-button>
    </el-form-item>
  
    <el-form-item label="商品描述">
      <el-input type="textarea" v-model="form.desc"></el-input>
    </el-form-item>

    <el-form-item label="市场价">
      <el-input v-model="form.name" class="pice"></el-input>元
    </el-form-item>
    <el-form-item label="商场价">
      <el-input v-model="form.name" class="pice"></el-input>元
    </el-form-item>

    <el-form-item label="是否发布">
      <el-checkbox-group v-model="form.type">
        <el-checkbox label="发布" name="type" checked="checked"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
  
    <el-form-item>
      <el-button type="primary" @click="onSubmit">添加</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    }
  }
}
</script>

<style lang="scss" scoped>
.add {
  margin-top: 20px;
  width: 60%;
  min-width: 496px;
}
.pice{
  width: 80px;
  margin-right: 12px;
}
</style>

