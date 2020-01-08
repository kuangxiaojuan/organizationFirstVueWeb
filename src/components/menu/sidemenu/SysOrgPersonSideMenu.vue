<template>
      <Menu theme="dark" active-name="1-1"  width="auto" :accordion="true"  
      @on-select="child1Menu" @on-open-change="parent1Menu">
        <Submenu name="有效架构">
            <template slot="title">
                <Icon type="ios-navigate"></Icon>
                有效架构
            </template>
            <MenuItem name="公司">公司</MenuItem>
            <MenuItem name="部门">部门</MenuItem>
            <MenuItem name="岗位">岗位</MenuItem>
            <MenuItem name="人员">人员</MenuItem>
            <MenuItem name="常用群组">常用群组</MenuItem>
        </Submenu>
        <Submenu name="无效架构">
            <template slot="title">
                <Icon type="ios-navigate"></Icon>
                无效架构
            </template>
            <MenuItem name="公司">公司</MenuItem>
            <MenuItem name="部门">部门</MenuItem>
            <MenuItem name="岗位">岗位</MenuItem>
            <MenuItem name="人员">人员</MenuItem>
            <MenuItem name="常用群组">常用群组{{$store.state.titleMenue.indexsrc}}</MenuItem>
        </Submenu>
    </Menu>
</template>
<script>
export default {
    name : 'SysOrgPersonSideMenu',
    data(){
        return {
           parentName : "",
           childName : ""
        }
    },
    methods : {
        parent1Menu : function(name){
            if(name[0] === undefined){
                this.$set(this.$store.state.titleMenue,'indexparent', '')
                this.$set(this.$store.state.titleMenue,'indexchild', '')
            }else this.$set(this.$store.state.titleMenue,'indexparent', name[0])
            
            
        },
        child1Menu : function(name){
            this.$set(this.$store.state.titleMenue,'indexchild', name)
        }
    }

}
</script>