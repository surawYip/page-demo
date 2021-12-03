var q=Object.defineProperty;var E=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var T=(e,a,u)=>a in e?q(e,a,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[a]=u,A=(e,a)=>{for(var u in a||(a={}))N.call(a,u)&&T(e,u,a[u]);if(E)for(var u of E(a))j.call(a,u)&&T(e,u,a[u]);return e};import{B,d as k,L as G,q as $,_ as S,r as s,o as v,f as w,j as o,i as l,c as U,e as z,F as P,m as p,g as V,P as R,D as I,S as M,s as O,a as F,v as H,x as J,E as C,t as h}from"./index.d60121cb.js";import{a as K,u as Q,T as W}from"./table.a668a2f0.js";function X(e){return B({url:"/system/user/list",method:"post",baseURL:"/mock",data:e})}function Y(e){return B({url:"/system/user/updateStatus",method:"post",baseURL:"/mock",data:e})}function Z(e){return B({url:"/system/user/del",method:"post",baseURL:"/mock",data:e})}const x=k({components:{Layer:G},props:{layer:{type:Object,default:()=>({show:!1,title:"",showButton:!0})}},setup(e,a){return{ruleForm:$({name:""}),rules:{name:[{required:!0,message:"\u8BF7\u8F93\u5165\u59D3\u540D",trigger:"blur"}],sort:[{required:!0,message:"\u8BF7\u8F93\u5165\u6570\u5B57",trigger:"blur"}],select:[{required:!0,message:"\u8BF7\u9009\u62E9",trigger:"blur"}],radio:[{required:!0,message:"\u8BF7\u9009\u62E9",trigger:"blur"}]},options:[{value:1,label:"\u8FD0\u52A8"},{value:2,label:"\u5065\u8EAB"},{value:3,label:"\u8DD1\u9177"},{value:4,label:"\u8857\u821E"}]}},methods:{submit(){this.$refs.form.validate(e=>{if(e){let a=this.ruleForm;this.layer.row?this.updateForm(a):this.addForm(a)}else return!1})},addForm(e){K(e).then(a=>{this.$message({type:"success",message:"\u65B0\u589E\u6210\u529F"}),this.layer.show=!1,this.$emit("getTableData",!0)})},updateForm(e){Q(e).then(a=>{this.$message({type:"success",message:"\u7F16\u8F91\u6210\u529F"}),this.$emit("getTableData",!1)})}}}),ee=p("\u6700\u65B0\u5F00\u64AD"),ae=p("\u6700\u65E9\u5F00\u64AD"),te=p("\u6700\u591A\u89C2\u770B");function le(e,a,u,b,c,D){const d=s("el-input"),r=s("el-form-item"),_=s("el-option"),i=s("el-select"),g=s("el-radio"),y=s("el-radio-group"),n=s("el-form"),m=s("Layer",!0);return v(),w(m,{layer:e.layer,onConfirm:e.submit},{default:o(()=>[l(n,{model:e.ruleForm,rules:e.rules,ref:"form","label-width":"120px",style:{"margin-right":"30px"}},{default:o(()=>[l(r,{label:"\u540D\u79F0\uFF1A",prop:"name"},{default:o(()=>[l(d,{modelValue:e.ruleForm.name,"onUpdate:modelValue":a[0]||(a[0]=t=>e.ruleForm.name=t),placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0"},null,8,["modelValue"])]),_:1}),l(r,{label:"\u6570\u5B57\uFF1A",prop:"sort"},{default:o(()=>[l(d,{modelValue:e.ruleForm.sort,"onUpdate:modelValue":a[1]||(a[1]=t=>e.ruleForm.sort=t),oninput:"value=value.replace(/[^\\d]/g,'')",placeholder:"\u53EA\u80FD\u8F93\u5165\u6B63\u6574\u6570"},null,8,["modelValue"])]),_:1}),l(r,{label:"\u9009\u62E9\u5668\uFF1A",prop:"select"},{default:o(()=>[l(i,{modelValue:e.ruleForm.select,"onUpdate:modelValue":a[2]||(a[2]=t=>e.ruleForm.select=t),placeholder:"\u8BF7\u9009\u62E9",clearable:""},{default:o(()=>[(v(!0),U(P,null,z(e.options,t=>(v(),w(_,{key:t.value,label:t.label,value:t.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(r,{label:"\u5355\u9009\u6846\uFF1A",prop:"radio"},{default:o(()=>[l(y,{modelValue:e.ruleForm.radio,"onUpdate:modelValue":a[3]||(a[3]=t=>e.ruleForm.radio=t)},{default:o(()=>[l(g,{label:0},{default:o(()=>[ee]),_:1}),l(g,{label:1},{default:o(()=>[ae]),_:1}),l(g,{label:2},{default:o(()=>[te]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["layer","onConfirm"])}var oe=S(x,[["render",le]]);const ue=k({components:{Table:W,Layer:oe},setup(){const e=$({input:""}),a=$({show:!1,title:"\u65B0\u589E",showButton:!0}),u=$({index:1,size:20,total:0}),b=V(!0),c=V([]),D=V([]),d=n=>{D.value=n},r=n=>{b.value=!0,n&&(u.index=1);let m=A({page:u.index,pageSize:u.size},e);X(m).then(t=>{let f=t.data.list;f.forEach(L=>{L.loading=!1}),c.value=f,u.total=Number(t.data.pager.total)}).catch(t=>{c.value=[],u.index=1,u.total=0}).finally(()=>{b.value=!1})},_=n=>{let m={ids:n.map(t=>t.id).join(",")};Z(m).then(t=>{C({type:"success",message:"\u5220\u9664\u6210\u529F"}),r(c.value.length===1)})},i=()=>{a.title="\u65B0\u589E\u6570\u636E",a.show=!0,delete a.row},g=n=>{a.title="\u7F16\u8F91\u6570\u636E",a.row=n,a.show=!0},y=n=>{if(!n.id)return;n.loading=!0;let m={id:n.id,status:n.status};Y(m).then(t=>{C({type:"success",message:"\u72B6\u6001\u53D8\u66F4\u6210\u529F"})}).catch(t=>{C({type:"error",message:"\u72B6\u6001\u53D8\u66F4\u5931\u8D25"})}).finally(()=>{n.loading=!1})};return r(!0),{Plus:R,Delete:I,Search:M,query:e,tableData:c,chooseData:D,loading:b,page:u,layer:a,handleSelectionChange:d,getTableData:r,handleDel:_,handleAdd:i,handleEdit:g,handleUpdateStatus:y}}}),ne={class:"layout-container"},se={class:"layout-container-form flex space-between"},re={class:"layout-container-form-handle"},ie={class:"layout-container-form-search"},de={class:"layout-container-table"},me={class:"statusName"},pe={class:"statusName"};function ce(e,a,u,b,c,D){const d=s("el-button"),r=s("el-popconfirm"),_=s("el-input"),i=s("el-table-column"),g=s("el-switch"),y=s("Table"),n=s("Layer"),m=O("loading");return v(),U("div",ne,[F("div",se,[F("div",re,[l(d,{type:"primary",icon:e.Plus,onClick:e.handleAdd},{default:o(()=>[p(h(e.$t("message.common.add")),1)]),_:1},8,["icon","onClick"]),l(r,{title:e.$t("message.common.delTip"),onConfirm:a[0]||(a[0]=t=>e.handleDel(e.chooseData))},{reference:o(()=>[l(d,{type:"danger",icon:e.Delete,disabled:e.chooseData.length===0},{default:o(()=>[p(h(e.$t("message.common.delBat")),1)]),_:1},8,["icon","disabled"])]),_:1},8,["title"])]),F("div",ie,[l(_,{modelValue:e.query.input,"onUpdate:modelValue":a[1]||(a[1]=t=>e.query.input=t),placeholder:e.$t("message.common.searchTip")},null,8,["modelValue","placeholder"]),l(d,{type:"primary",icon:e.Search,class:"search-btn",onClick:a[2]||(a[2]=t=>e.getTableData(!0))},{default:o(()=>[p(h(e.$t("message.common.search")),1)]),_:1},8,["icon"])])]),F("div",de,[H(l(y,{ref:"table",page:e.page,"onUpdate:page":a[3]||(a[3]=t=>e.page=t),showSelection:!0,data:e.tableData,onGetTableData:e.getTableData,onSelectionChange:e.handleSelectionChange},{default:o(()=>[l(i,{prop:"id",label:"Id",align:"center",width:"80"}),l(i,{prop:"name",label:"\u7528\u6237\u540D",align:"center"}),l(i,{prop:"nickName",label:"\u6635\u79F0",align:"center"}),l(i,{prop:"role",label:"\u89D2\u8272",align:"center"}),l(i,{prop:"isAdmin",label:"\u8D85\u7EA7\u7BA1\u7406\u5458",align:"center"},{default:o(t=>[F("span",me,h(t.row.isAdmin===1?"\u662F":"\u5426"),1)]),_:1}),l(i,{prop:"status",label:"\u72B6\u6001",align:"center"},{default:o(t=>[F("span",pe,h(t.row.status===1?"\u542F\u7528":"\u7981\u7528"),1),l(g,{modelValue:t.row.status,"onUpdate:modelValue":f=>t.row.status=f,"active-color":"#13ce66","inactive-color":"#ff4949","active-value":1,"inactive-value":0,loading:t.row.loading,onChange:f=>e.handleUpdateStatus(t.row)},null,8,["modelValue","onUpdate:modelValue","loading","onChange"])]),_:1}),l(i,{label:e.$t("message.common.handle"),align:"center",fixed:"right",width:"200"},{default:o(t=>[l(d,{onClick:f=>e.handleEdit(t.row)},{default:o(()=>[p(h(e.$t("message.common.update")),1)]),_:2},1032,["onClick"]),l(r,{title:e.$t("message.common.delTip"),onConfirm:f=>e.handleDel([t.row])},{reference:o(()=>[l(d,{type:"danger"},{default:o(()=>[p(h(e.$t("message.common.del")),1)]),_:1})]),_:2},1032,["title","onConfirm"])]),_:1},8,["label"])]),_:1},8,["page","data","onGetTableData","onSelectionChange"]),[[m,e.loading]]),e.layer.show?(v(),w(n,{key:0,layer:e.layer,onGetTableData:e.getTableData},null,8,["layer","onGetTableData"])):J("",!0)])])}var be=S(ue,[["render",ce],["__scopeId","data-v-0655e08f"]]);export{be as default};
