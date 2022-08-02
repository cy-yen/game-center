import Axios from 'axios'
import md5 from 'md5'
import moment from 'moment'
import QueryString from 'qs'

const checkStatus = (status) => {
  switch (status) {
    case 400:
      return '错误请求'
    case 401:
      return '未授权，请重新登录'
    case 403:
      return '拒绝访问'
    case 404:
      return '请求错误,未找到该资源'
    case 405:
      return '请求方法未允许'
    case 408:
      return '请求超时'
    case 500:
      return '服务器端出错'
    case 501:
      return '网络未实现'
    case 502:
      return '网络错误'
    case 503:
      return '服务不可用'
    case 504:
      return '网络超时'
    case 505:
      return 'http版本不支持该请求'
    default:
      return `连接错误`
  }
}

const service = Axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 5000,
  withCredentials: false,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

service.interceptors.request.use(
  (config) => {
    const storage = JSON.parse(sessionStorage.getItem('auth-key'))
    if (storage) config.headers['Authorization'] = `Bearer ${storage.token}` //携带权限参数
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

service.interceptors.response.use(
  function (response) {
    if (response.code == 10008 || response.code == 10007) {
      router.push('/login')
      return ''
    }

    return response.data
  },
  function (error) {
    if (error && error.response) error.message = checkStatus(error.response.status)
    return Promise.reject(error)
  }
)

export const get = (url, params) => {
  const timestamp = moment().unix()
  return service({
    url: url,
    method: 'get',
    loading: true,
    params: {
      ...params,
      lang: 'cn',
      platform: 'H5',
      timestamp,
      sign: md5(`lang=${'cn'}&platform=H5&timestamp=${timestamp}&key=1fd950fab9f845b04a73740b148637fa`)
    }
  })
}

export const post = (url, data, params) => {
  const info = JSON.parse(sessionStorage.getItem('store'))

  const timestamp = moment().unix()
  data = QueryString.stringify({
    ...data,
    token: info ? info.userInfo?.token : null
  })
  return service({
    url: url,
    method: 'post',
    loading: true,
    data,
    params: {
      ...params,
      lang: 'cn',
      platform: 'H5',
      timestamp,
      sign: md5(`lang=${'cn'}&platform=H5&timestamp=${timestamp}&key=1fd950fab9f845b04a73740b148637fa`)
    }
  })
}
