import {
    getHotSingerListRequest,
    getSingerListRequest
} from "../../../api/request";


export const getHotSingerList = () => {
    return (dispatch) => {
        getHotSingerListRequest(0).then(res => {
            const data = res.artists;
            dispatch(changeSingerList(data));
            dispatch(changeEnterLoading(false));
            dispatch(changePullDownLoading(false));
            dispatch(changeListOffset(data.length));
        }).catch(() => {
            console.log('热门歌手数据获取失败');
        })
    }
};
