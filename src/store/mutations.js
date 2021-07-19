import { INCREMENT } from "./mutations.types";
export default {
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
}