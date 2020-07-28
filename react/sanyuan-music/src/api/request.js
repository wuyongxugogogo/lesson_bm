import { axiosInstance } from './config'

export const getRecommendListRequest = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data: [{
                    id: 1,
                    title: 'aaa'
                }]
            })
        }, 1000)
    })
}

// 项目所有请求API的列表文件
// 每个请求一个函数
// 每个函数都是返回一个promise

// api与actions的分离点
// axiosInstance.get 返回是Promise

// 首页广告
export const getBannersRequest = () => {
    return axiosInstance.get("/banner");
}

// 推荐列表 
export const getRecommendListRequest = () => {
    return axiosInstance.get("/personalized");
};

// 歌手列表，支持分页 0-50-100
// reducer init = {singerList:[],offset:0}
// useEffect dispatch getHotSingerList
// -> getHotSingerListRequest API 请求
// then 
//     changeSingerList [] [...data]
//     changeOffset 0 data.length

// 前后端合作的要素有哪些？
//   1. 接口地址
//     url /top/artists 请求 RESTFUL 资源的暴露
//   2. 传参
//   3. 接口文档的东西

export const getHotSingerListRequest = count => {
    return axiosInstance.get(`/top/artists?offset=${count}`);
};

export const getSingerListRequest = (category, alpha, count) => {
    return axiosInstance.get(
        `/artist/list?cat=${category}&initial=${alpha.toLowerCase()}&offset=${count}`
    );
};

export const getRankListRequest = () => {
    return axiosInstance.get(`/toplist/detail`);
};

// history.push()
export const getSingerInfoRequest = id => {
    return axiosInstance.get(`/artists?id=${id}`);
};
