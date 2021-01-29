import {request} from './request'
// 数字专辑 轮播
export function getTopBanners(){
    return request({
        url:'/banner'
    })
}
// 数字专辑 新碟
export function getNewAlbum(limit){
    return request({
        url:'/top/album',
        params:{
            limit
        }
    })
}
// 歌单推荐
export function getPlayList(limit){
    return request({
       url:"/personalized" ,
       params:{
           limit
       }
    })
}
// 新歌上架
export function getNewSong(limit,area){
    return request({
        url:'/top/album',
        params:{
            limit,
           area,
        }
    })
}
// 排行榜
export function getRanking(idx){
    return request({
        url:'/top/list',
        params:{
            idx
        }
    })
}
// 推荐MV
export function getMV(){
    return request({
        url:'/mv/all'
    })
}
// 获取歌单详情
export function getPlayListDetail(id){
    return request({
        url:'/playlist/detail',
        params:{
            id
        }
    })
}
// 获取全部的歌单歌曲
export function getDetailSong(ids){
    return request({
        url:"/song/detail",
        params:{
            ids
        }
    })
}
// 获取歌单评论 
export function  getPlayListComment(id,limit,offset,before){
    return request({
        url:'/comment/playlist',
        params:{
            id,
            limit,
            offset,
            before
        }
    })
}
// 歌曲url 播放歌曲
export function getSongUrl(id){
    return request({
        url:'/song/url',
        params:{
            id
        }
    })
}
// 获取歌词
export function getLyric(id){
    return request({
        url:'/lyric',
        params:{
            id
        }
    })
}