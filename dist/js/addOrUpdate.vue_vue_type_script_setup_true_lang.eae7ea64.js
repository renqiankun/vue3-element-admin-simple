import{M as m,r as f,a9 as r,h as v,T as V,U as o,k as e,$ as c,Z as a}from"./base-module.ee10d16b.js";const g=e("div",null,[a(" 1 "),e("br"),a("1 "),e("br"),a("1 "),e("br"),a("1 "),e("br"),a("1 "),e("br"),a("1 "),e("br"),a("1 "),e("br"),a("1 "),e("br"),a("1 "),e("br"),a("1 "),e("br"),a("1 "),e("br"),a("1 "),e("br"),a("1 "),e("br"),a("1 "),e("br")],-1),k=a("\u5173\u95ED"),C=a("\u63D0\u4EA4"),D=m({__name:"addOrUpdate",emits:["success","cancel"],setup(h,{expose:u,emit:l}){const t=f(!1),d=()=>{t.value=!0},i=()=>{t.value=!1,l("cancel")},_=()=>{t.value=!1,l("success")};return u({init:d}),(x,s)=>{const n=r("el-button"),b=r("el-dialog");return v(),V(b,{"align-center":"",draggable:"",modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=p=>t.value=p),title:"\u63D0\u793A"},{footer:o(()=>[e("div",null,[c(n,{onClick:i},{default:o(()=>[k]),_:1}),c(n,{type:"primary",onClick:_},{default:o(()=>[C]),_:1})])]),default:o(()=>[g]),_:1},8,["modelValue"])}}});export{D as _};