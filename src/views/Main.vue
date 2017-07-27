<template>
  <el-row class="wrapper">
    <el-col :span="24">
      <header class="header-wrapper">
  
      </header>
    </el-col>
    <el-col :span="24">
      <main class="container">
        <!-- 侧边栏 start -->
        <aside class="sidebar-wrapper">
          <el-menu default-active="table" class="el-menu-vertical-demo" :router="true">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-message"></i>导航一
              </template>
              <el-menu-item index="table">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
              <el-menu-item index="1-3">选项3</el-menu-item>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
          </el-menu>
        </aside>
        <!-- 侧边栏 end -->
        <!-- 内容 start -->
        <section class="page-wrapper">
          <div class="page-container">
            <div class="breadcrumb-wrapper">
              <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                <el-breadcrumb-item>活动详情</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
            <transition name="el-fade-in-linear">
              <router-view></router-view>
            </transition>
          </div>
        </section>
        <!-- 内容 end -->
      </main>
    </el-col>
    <el-col :span="24">
      <footer></footer>
    </el-col>
  </el-row>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  .header-wrapper {
    height: 80px;
    background: #324057;
    border-bottom: 1px solid #475669;
  }
  .container {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    margin-top: 81px;
    .sidebar-wrapper {
      float: left;
      width: 235px;
      min-width: 235px;
      height: 100%;
      background: #324057;
    }
    .page-wrapper {
      float: left;
      margin-left: -235px;
      width: 100%;
      height: 100%;
      overflow-y: auto;
      .page-container {
        margin-left: 235px;
        padding: 25px 20px 10px;
        .breadcrumb-wrapper{
          position: relative;
          margin: -25px -20px 0;
          padding: 11px 20px;
          border-bottom: 1px solid #D3DCE6;
        }
      }
    }
  }
}
</style>

