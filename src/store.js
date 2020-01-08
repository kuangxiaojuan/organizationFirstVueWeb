import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const titleMenueModule = {
  //状态值
  state:{
    //切换标识 
    /**
     * 1.组织架构
     * 2.员工管理
     * 3.报表管理
     * 4.后台业务
     */
    titleMenuIndex : 1
  },
  getters:{
  },
  //处理数据（状态）变化
  mutations:{
  },
  //处理异步请求，判断，流程控制
  actions:{
  }
}

//导出store对象
export default new Vuex.Store({
  modules:{
      titleMenue : titleMenueModule
  }
 
});