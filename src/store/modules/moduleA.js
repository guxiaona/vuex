export default {
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