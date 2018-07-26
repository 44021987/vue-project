import axios from 'axios'

const request = axios.create({
  baseURL: 'https://cnodejs.org/api/v1',
  timeout: 60000
})

// 取消重复请求
const pending = [];
const cancelToken = axios.CancelToken;
const removePending = (config) => {
  for (let p in pending) {
    if (pending[p].u === config.url + '&' + config.method) {
      pending[p].cancel(); //执行取消操作
      pending.splice(p, 1); //把这条记录从数组中移除
    }
  }
}

request.interceptors.request.use(config => {
  removePending(config);
  config.cancelToken = new cancelToken((c) => {
    pending.push({
      u: config.url + '&' + config.method,
      cancel: c
    });
  });
  return config
}, error => {
  Promise.reject(error)
})

request.interceptors.response.use(response => {
  // 可在此集中处理错误码和权限问题
  removePending(response.config);
  return response.data;
}, error => {
  return Promise.reject(error)
})

export default request
