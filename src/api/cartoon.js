// 专门处理漫画相关的 接口请求

// 引入 封装好的 axios
import request from '../utils/request'

import { format } from '@/utils/apiHeader'

// 一个接口就暴露一个函数
// 获取轮播图
export const getBanner = () => {
  // return 的是 接口调用之后，axios 返回的 Promise 对象
  return request({
    url: '/api/comic_v2/getproad',
    method: 'GET',
    // 需要请求体，就提供 data
    // 需要查询字符串参数，就提供 params
    params: {
      apptype: 8,
      appversion: 1.0,
      channel: 'web-app',
      adgroupid: 123
    }
  })
}

// 获取首页推荐数据
export const getIndexRecommend = () => {
  return request({
    url: '/api/comic_v2/customerview',
    method: 'GET',
    params: {
      apptype: 8,
      appversion: 1.0,
      channel: 'web-app',
      viewtype: 1
    }
  })
}

/**
 * 获取分类类型
 */
export const getTyps = () => {
  return request({
    url: '/api/comic_v2/getproad?apptype=8&appversion=1.0&channel=web-app&adgroupid=125',
    method: 'GET'
  })
}

/**
 * 获取分类类型
 * @param {String} suBject 分类ID
 * @param {Number} pageno 当前页码
 * @param {Number} pagesize 每页显示条数
 */
export const getTypeList = (suBject, pageno = 1, pagesize = 20) => {
  return request({
    url: '/api/comic_v2/comicsfilterlist_v2?apptype=8&appversion=1.0&channel=web-app',
    method: 'POST',
    data: format({
      suBject,
      pageno,
      pagesize
    })
  })
}
