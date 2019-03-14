import Axios from "axios";
import { Toast } from "antd-mobile";

const service = Axios.create({
  timeout: 15000,
  baseURL: "/",
  headers: { ajax: "ajax" }
});

/**
 * 添加请求拦截器(在发送请求之前或之后做什么)
 */
service.interceptors.request.use(
  config => {
    // Toast.loading("加载中", 0.5);
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

/**
 * 添加响应拦截器
 */
service.interceptors.response.use(
  response => {
    // if (response.data && response.data.code === 401) {
    //     window.location.href = response.data.data;
    // }
    // if (response.status === 401) {
    //     Modal.confirm({ content: "登录信息已过期！请重新登录" });
    //     createHashHistory().push("/login");
    // }
    return response;
  },
  error => {
    if (error.response) {
      if (error.response.status === 500) {
        // if (error.response.data.message) {
        //     Toast.info("遇到其它错误，无法获取数据");
        // } else {
        Toast.info("服务器错误");
        //     console.log(error.response.data);
        // }
      }
      if (error.response.status === 504 || error.response.status === 404) {
        Toast.info("找不到服务器");
      }
      // if (error.response.status === 401) {
      //     const historyApp = createHashHistory();
      //     historyApp.push("/login");
      // }
      return Promise.reject(error);
    } else {
      return Promise.reject(error);
    }
  }
);
export default service;
