import fetchApi from './_fetchApi'
var baseUrl = window('SITE').baseUrl
export function login(params) {
    var url = `${baseUrl}/login/login`
    return fetchApi({
        url: url,
        method: 'post',
        data: params
    })
}


export function getMenuList(params){
    var url = `${baseUrl}/login/getMenuList`
    return fetchApi({
        url: url,
        method: 'post',
        data: params
    })
}
