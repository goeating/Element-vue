<template>
  <div>
    <h1>Sale</h1>
    <el-table :data="table" style="width: 100%" :row-class-name="tableRowClassName" stripe @selection-change="handleSelectionChange" :default-sort="{prop: 'ReleaseTime', order: 'ascending'}">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="Name" label="商品名称"></el-table-column>
      <el-table-column prop="Type" label="商品类别"></el-table-column>
      <el-table-column prop="Oprice" label="市场价"></el-table-column>
      <el-table-column prop="Pprice" label="商场价"></el-table-column>
      <el-table-column prop="Release" label="是否发布">
        <template scope="scope">
          <el-tag type="success" v-if="scope.row.Release===true">已发布</el-tag>
          <el-tag type="danger" v-if="scope.row.Release===false">未发布</el-tag>
        </template>
  
      </el-table-column>
      <el-table-column prop="ReleaseTime" label="发布时间" sortable></el-table-column>
      <el-table-column prop="CreationTime" label="创建时间"></el-table-column>
      <el-table-column prop="Id" label="操作">
        <template scope="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">详情</el-button>
          <el-button size="small" type="warning" @click="handleEdit(scope.$index, scope.row)">下架</el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
const ERR_OK = 0
export default {
  data() {
    return {
      table: [],
      multipleSelection: []
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      this.$http.get('/api/sale').then(response => {
        // get body data
        response = response.body
        if (response.errno === ERR_OK) {
          this.table = response.data
          console.log(response.data)
        }
      })
    },
    tableRowClassName(row, index) {
      if (index === 1) {
        return 'info-row'
      } else if (index === 3) {
        return 'positive-row'
      }
      return ''
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
      console.log(this.multipleSelection)
    },
    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      console.log(index, row)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-table .info-row {
  background: #c9e5f5;
}

.el-table .positive-row {
  background: #e2f0e4;
}
</style>

