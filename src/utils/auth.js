import Cookie from 'js-cookie';

export function getToken(){
    return Cookie.get('Token')
}
export function setToken(token){
    return Cookie.set('Token',token)
}