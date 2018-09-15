//引入vuex
import Vue from "vue"
//引入Vuex,解构Store
import Vuex,{Store} from "vuex"
//引入axios
import axios from "axios"
//安装axios,在Vue基类的原型上拓展
Vue.prototype.$http = axios


//安装vuex
Vue.use(Vuex)
//创建store,并暴露
export default new Store({
    state:{
        //定义搜索词
        word:"",
    },
    //处理同步消息
    mutations:{
        //更新搜索词
        updateWord:function(state,word){
            state.word = word;


        }
    }

})