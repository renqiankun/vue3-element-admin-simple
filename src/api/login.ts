import fetchApi from './_fetchApi'
var baseUrl = (window as any)['SITE'].baseUrl
export function login(params:any) {
    var url = `${baseUrl}/login/login`
    return fetchApi({
        url: url,
        method: 'post',
        data: params
    })
}


export function getMenuList(params:any){
    var url = `${baseUrl}/login/getMenuList`
    return fetchApi({
        url: url,
        method: 'post',
        data: params
    })
}
