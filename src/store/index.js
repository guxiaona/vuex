import { createStore } from 'vuex'
import { INCREMENT } from "./mutations.types";
import mutations from './mutations';
import getters from './getters'
import actions from './actions'
import moduleA from './modules/moduleA';

// 1.安装插件
// Vue.use(Vuex)

// 2.创建对象
const state = {
    counter: 1000,
    students: [
        { id: 1, name: 'why1', age: 13 },
        { id: 2, name: 'why2', age: 23 },
        { id: 3, name: 'why3', age: 33 },
        { id: 4, name: 'why4', age: 18 },
    ],
    info: {
        name: 'kobe',
        age: 43,
        height: 198
    }
}

export default createStore({
    state,
    mutations,
    actions,
    getters,
    modules: {
        // 按照模块划分
        a: moduleA
    }
})


// 对象解构
const obj = {
    name: '111',
    age: 18,
    height: 1.88
}
const { name, age, height } = obj
console.log(name);
console.log(age);
console.log(height);