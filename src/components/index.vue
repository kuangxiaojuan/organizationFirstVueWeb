<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
</style>
<template>
    <div class="layout">
        <Layout>
            <Header :style="{height: '60px'}">
                <TitleMenu/>
            </Header>
            <Layout :style="{height: 'calc(100vh - 72px)'}">
                <Sider hide-trigger :style="{'background': '#363e4f'}">
                    <SideMenu/>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                   <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                        <ContentMenu/>
                   </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script>
// 头部栏
import TitleMenu from '../components/menu/TitleMenu.vue'
// 侧边栏
import SideMenu from '../components/menu/SideMenu.vue';
//内容栏
import ContentMenu from '../components/menu/ContentMenu.vue'
export default {
  name: 'Index',
  components:{
      'TitleMenu':TitleMenu,
      'SideMenu':SideMenu,
      'ContentMenu':ContentMenu
  }
}
</script>