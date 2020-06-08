// 模块化， 排行榜的所有接口， 一个文件干一件事情
import jsonp from './jsonp'; // 走真正的请求 QQ 跨域请求解决方案 
import { URL, PARAM, OPTION } from './config';
// 获取排行榜列表的数据
export function getRankingList() {
  const data = Object.assign({}, PARAM, {
    g_tk: 5381,
    uin: 0,
    platform: "h5",
    needNewCode: 1,
    _: new Date().getTime()
  });
  // console.log(data);
  return jsonp(URL.rankingList, data, OPTION);
}

export function getRankingInfo() {

}

