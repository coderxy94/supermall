import Axios from "axios";

export function request(config) {
    const instance = Axios.create({
        baseURL: "http://123.207.32.32:8000",
        timeout: 5000
    })
    // 拦截请求
    // instance.interceptors.request.use(config => {
    //     // console.log(config)
    //     return config
    // }, error => {
    //     console.log(error)
    // })
    // //拦截相应
    // instance.interceptors.response.use(res => {
    //     // console.log(res)
    //     return res
    // }, error => {
    //     console.log(error)
    // })

    return instance(config)
}