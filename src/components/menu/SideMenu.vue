<template>
    <organizaiton-side-menu v-if="tabletabIndex == 1"></organizaiton-side-menu>
    <sys-org-person-side-menu v-else-if="tabletabIndex == 2"></sys-org-person-side-menu>
    <report-manager-side-menu v-else-if="tabletabIndex == 3"></report-manager-side-menu>
    <background-business-side-menu v-else-if="tabletabIndex == 4"></background-business-side-menu>
</template>
<script>

import OrganizaitonSideMenu from './sidemenu/OrganizaitonSideMenu.vue';
import SysOrgPersonSideMenu from './sidemenu/SysOrgPersonSideMenu.vue';
import ReportManagerSideMenu from './sidemenu/ReportManagerSideMenu.vue';
import BackgroundBusinessSideMenu from './sidemenu/BackgroundBusinessSideMenu.vue';
export default {
    name : 'SideMenu',
    components : {
        'organizaiton-side-menu' : OrganizaitonSideMenu,
        'sys-org-person-side-menu' : SysOrgPersonSideMenu,
        'report-manager-side-menu' : ReportManagerSideMenu,
        'BackgroundBusinessSideMenu' : BackgroundBusinessSideMenu
    },
    data(){
        return {
            tabletabIndex : 1
        }
        
    },
    watch : {
         '$store.state.titleMenue.titleMenuIndex' : {
              handler(newValue, oldValue) {
                  this.tabletabIndex = newValue
              }
         }   
    }
    
}
</script>