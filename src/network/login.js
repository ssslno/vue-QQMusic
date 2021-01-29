import {request} from './request'
export function getLogin(obj){
    return request({
        url:'/login/cellphone',
        params:{
           ...obj
        }
    })
}
export function getUserDetail(uid,cookie){
   return  request({
        url:'/user/detail',
        params:{
                uid,
                cookie
        }
    
    })
}