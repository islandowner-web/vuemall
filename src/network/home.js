import {request} from "./request";

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}


export function getHomePop() {
  return request({
    url: '/home/pop'
  })
}

export function getHomeGoods(type, page) {
  return request({
    url: '/home/data/pop',
    // params: {
    //   type,
    //   page
    // }
  })
}