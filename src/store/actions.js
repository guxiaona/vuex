export default {
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
}