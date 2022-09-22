export const tokenKey = 'carbon-token'

export function getToken(){
    return sessionStorage.getItem(tokenKey)||""
}