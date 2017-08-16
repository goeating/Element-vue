<template>
  <el-row class="wrapper">
    <el-col :span="24">
      <header class="header-wrapper">
        <h1 class="title">老司机后台管理系统</h1>
        <el-dropdown class="userinfo">
          <span class="el-dropdown-link userinfo-inner">
            Admin<img :src="imgUrl" width="50" height="50"> 
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item divided>登出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </header>
    </el-col>
    <el-col :span="24">
      <main class="container">
        <!-- 侧边栏 start -->
        <aside class="sidebar-wrapper">
          <el-menu :default-active="$route.path" :router="true">
            <template v-for="(items, index) in $router.options.routes">
              <!-- 没下拉列的导航 -->
              <el-menu-item :index="items.children[0].path" v-if="!items.isHidden && items.isOnlyNode" :key="index">
                <i class="el-icon-menu"></i>{{items.children[0].name}}
              </el-menu-item>
              <!-- 没下拉列的导航 -->
              <!-- 有下拉列的导航 -->
              <el-submenu :index="'nav'+index" v-if="!items.isHidden && !items.isOnlyNode" :key="index">
                <template slot="title">
                  <i class="el-icon-plus"></i>{{items.name}}
                </template>
                <el-menu-item :index="child.path" v-for="(child, index) in items.children" :key="index">{{child.name}}</el-menu-item>
              </el-submenu>
              <!-- 有下拉列的导航 -->
            </template>
          </el-menu>
        </aside>
        <!-- 侧边栏 end -->
        <!-- 内容 start -->
        <section class="page-wrapper">
          <div class="page-container">
            <div class="breadcrumb-wrapper">
              <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: items.path }" v-for="(items, index) in $route.matched" :key="index">{{items.name}}</el-breadcrumb-item>
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
  data() {
    return {
      imgUrl: '../static/img/2.jpg'
    }
  },
  mounted() {
    // console.log(this.$route)
  }
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
    .title {
      float: left;
      margin: 0;
      width: 235px;
      height: 80px;
      line-height: 80px;
      text-align: center;
      font-size: 24px;
      font-weight: normal;
      color: #fff;
    }
    .userinfo {
      float: right;
      margin-right: 20px;
      height: 80px;
      .userinfo-inner{
        display: block;
        height: 80px;
        line-height: 80px;
        color: #fff;
        img{
          margin-left: 10px;
          border-radius: 50%;
          vertical-align: middle;
        }
      }
    }
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
        height: 100%;
        box-sizing: border-box;
        overflow-x: auto;
        .breadcrumb-wrapper {
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

