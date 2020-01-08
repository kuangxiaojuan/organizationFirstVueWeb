<style scoped>
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

</style>
<template>
     <Menu mode="horizontal" theme="dark" active-name="1">
        <div class="layout-logo"></div>
        <div class="layout-nav">
            <MenuItem name="1" @click.native="jumpManagerment(1)">
            <span></span>
                <Icon type="ios-navigate"></Icon>
                组织架构
            </MenuItem>
            <MenuItem name="2" @click.native="jumpManagerment(2)">
                <Icon type="ios-keypad"></Icon>
                员工管理
            </MenuItem>
            <MenuItem name="3" @click.native="jumpManagerment(3)">
                <Icon type="ios-analytics"></Icon>
                报表管理
            </MenuItem>
            <MenuItem name="4"  @click.native="jumpManagerment(4)">
                <Icon type="ios-paper"></Icon>
                后台业务
            </MenuItem>
        </div>
    </Menu>
</template>
<script>
export default {
    name : 'TitleMenu',
    methods:{
        jumpManagerment : function(index){
            this.$set(this.$store.state.titleMenue, 'titleMenuIndex', index)
        }
    } 
}
</script>
