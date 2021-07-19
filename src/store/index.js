import { createStore } from 'vuex'
import { INCREMENT } from "./mutations.types";

// 1.安装插件

// 2.创建对象
const moduleA = {
    state: {
        name: '张三'
    },
    mutations: {
        // updateName(state) {
        //     state.name = 'lisi'
        // }
        updateName(state, payload) {
            state.name = payload
        }
    },
    getters: {
        fullname(state) {
            return state.name + '111'
        },
        fullname2(state, getters) {
            return getters.fullname + '222'
        },
        fullname3(state, getters, rootstate) {
            return getters.fullname2 + rootstate.counter
        }
    },
    actions: {
        aUpdateName(context) {
            // 只会调用当前模块中的
            console.log(context);
            setTimeout(() => {
                context.commit('updateName', 'wangwu')
            }, 1000)
        }
    },

}

export default createStore({
    state: {
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
    },
    mutations: {
        // 方法


        ['INCREMENT'](state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        incrementCount(state, count) {
            state.counter += count
        },
        addStudent(state, stu) {
            state.students.push(stu)
        },
        updateInfo(state) {
            state.info.name = '111'

            // 错误的代码：不能在这里进行异步操作
            // setTimeout(() => {
            //         state.info.name = '111'
            //     }, 1000)


            // state.info['address'] = '洛杉矶'
            // Vue.set(state.info, 'address', 'Luoshanji')

            // delete state.info.age
            // Vue.delete(state.info, 'age')
        }
    },
    actions: {
        // context 上下文 即 store
        // 方法一
        // aUpdateInfo(context, payload) {
        //     setTimeout(() => {
        //         context.commit('updateInfo')
        //         console.log(payload.message);
        //         payload.success()
        //     }, 1000)
        // }

        // 方法二
        aUpdateInfo(context, payload) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    context.commit('updateInfo')
                    console.log(payload);
                    resolve('111')
                }, 1000)
            })
        }
    },
    getters: {
        powerCounter(state) {
            return state.counter * state.counter
        },
        more20stu(state) {
            return state.students.filter(s => s.age > 20)
        },
        more20stuLength(state, getters) {
            return getters.more20stu.length
        },
        moreAgeStu(state) {
            // return function(age) {
            //     return state.students.filter(s => s.age > age)
            // }
            return age => {
                return state.students.filter(s => s.age > age)
            }
        }
    },
    modules: {
        // 按照模块划分
        a: moduleA
    }
})