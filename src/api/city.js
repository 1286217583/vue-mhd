// 处理 城市 相关的 接口请求

import axios from 'axios'

export default () => {
  return axios({
    url: '/maizuo/gateway?k=4442329',
    methods: 'GET',
    headers: {
      'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16181380573039393736556545"}',
      'X-Host': 'mall.film-ticket.city.list'
    }
  })
}
