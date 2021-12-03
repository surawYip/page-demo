var z=Object.defineProperty;var A=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var L=(e,a,t)=>a in e?z(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,q=(e,a)=>{for(var t in a||(a={}))O.call(a,t)&&L(e,t,a[t]);if(A)for(var t of A(a))J.call(a,t)&&L(e,t,a[t]);return e};import{c as H,a as K,u as M,T as Q,g as R,d as W}from"./table.a668a2f0.js";import{d as w,g as _,C as I,_ as T,H as X,r,o as g,c as C,a as h,i as l,p as Y,k as Z,L as x,f as E,j as s,e as j,F as U,m as y,t as $,q as V,w as ee,P as ae,S as te,D as le,E as oe,s as ne,v as se,x as re,G as ue}from"./index.d60121cb.js";const de=w({setup(){let e=_([]);const a=_(null),t={children:"children",label:"label"},i=I("active"),c=()=>{H({}).then(d=>{e.value=d.data,i.value=d.data[0],X(()=>{a.value&&a.value.setCurrentKey(i.value.id)})})},m=n=>{i.value=n};return c(),{data:e,tree:a,defaultProps:t,handleNodeClick:m}}}),ie=e=>(Y("data-v-4732aea1"),e=e(),Z(),e),ce={class:"category"},me=ie(()=>h("div",{class:"header-box"},[h("h2",null,"\u7EC4\u7EC7\u7BA1\u7406")],-1)),pe={class:"list system-scrollbar"};function fe(e,a,t,i,c,m){const n=r("el-tree");return g(),C("div",ce,[me,h("div",pe,[l(n,{ref:"tree",class:"my-tree",data:e.data,props:e.defaultProps,"expand-on-click-node":!1,"node-key":"id","highlight-current":"","default-expand-all":"",onNodeClick:e.handleNodeClick},null,8,["data","props","onNodeClick"])])])}var _e=T(de,[["render",fe],["__scopeId","data-v-4732aea1"]]);const G=[{value:1,label:"\u8FD0\u52A8"},{value:2,label:"\u5065\u8EAB"},{value:3,label:"\u8DD1\u9177"},{value:4,label:"\u8857\u821E"}],P=[{value:1,label:"\u4ECA\u5929"},{value:2,label:"\u660E\u5929"},{value:3,label:"\u540E\u5929"}],ge=w({components:{Layer:x},props:{layer:{type:Object,default:()=>({show:!1,title:"",showButton:!0})}},setup(e,a){const t=_(null),i=_(null);let c=_({name:""});const m={name:[{required:!0,message:"\u8BF7\u8F93\u5165\u59D3\u540D",trigger:"blur"}],number:[{required:!0,message:"\u8BF7\u8F93\u5165\u6570\u5B57",trigger:"blur"}],choose:[{required:!0,message:"\u8BF7\u9009\u62E9",trigger:"blur"}],radio:[{required:!0,message:"\u8BF7\u9009\u62E9",trigger:"blur"}]};n();function n(){e.layer.row&&(c.value=JSON.parse(JSON.stringify(e.layer.row)))}return{form:c,rules:m,layerDom:i,ruleForm:t,selectData:G,radioData:P}},methods:{submit(){this.ruleForm&&this.ruleForm.validate(e=>{if(e){let a=this.form;this.layer.row?this.updateForm(a):this.addForm(a)}else return!1})},addForm(e){K(e).then(a=>{this.$message({type:"success",message:"\u65B0\u589E\u6210\u529F"}),this.$emit("getTableData",!0),this.layerDom&&this.layerDom.close()})},updateForm(e){M(e).then(a=>{this.$message({type:"success",message:"\u7F16\u8F91\u6210\u529F"}),this.$emit("getTableData",!1),this.layerDom&&this.layerDom.close()})}}});function he(e,a,t,i,c,m){const n=r("el-input"),d=r("el-form-item"),v=r("el-option"),f=r("el-select"),D=r("el-radio"),F=r("el-radio-group"),p=r("el-form"),u=r("Layer",!0);return g(),E(u,{layer:e.layer,onConfirm:e.submit,ref:"layerDom"},{default:s(()=>[l(p,{model:e.form,rules:e.rules,ref:"ruleForm","label-width":"120px",style:{"margin-right":"30px"}},{default:s(()=>[l(d,{label:"\u540D\u79F0\uFF1A",prop:"name"},{default:s(()=>[l(n,{modelValue:e.form.name,"onUpdate:modelValue":a[0]||(a[0]=o=>e.form.name=o),placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0"},null,8,["modelValue"])]),_:1}),l(d,{label:"\u6570\u5B57\uFF1A",prop:"number"},{default:s(()=>[l(n,{modelValue:e.form.number,"onUpdate:modelValue":a[1]||(a[1]=o=>e.form.number=o),oninput:"value=value.replace(/[^\\d]/g,'')",placeholder:"\u53EA\u80FD\u8F93\u5165\u6B63\u6574\u6570"},null,8,["modelValue"])]),_:1}),l(d,{label:"\u9009\u62E9\u5668\uFF1A",prop:"select"},{default:s(()=>[l(f,{modelValue:e.form.choose,"onUpdate:modelValue":a[2]||(a[2]=o=>e.form.choose=o),placeholder:"\u8BF7\u9009\u62E9",clearable:""},{default:s(()=>[(g(!0),C(U,null,j(e.selectData,o=>(g(),E(v,{key:o.value,label:o.label,value:o.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(d,{label:"\u5355\u9009\u6846\uFF1A",prop:"radio"},{default:s(()=>[l(F,{modelValue:e.form.radio,"onUpdate:modelValue":a[3]||(a[3]=o=>e.form.radio=o)},{default:s(()=>[(g(!0),C(U,null,j(e.radioData,o=>(g(),E(D,{key:o.value,label:o.value},{default:s(()=>[y($(o.label),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["layer","onConfirm"])}var ve=T(ge,[["render",he]]);const be=w({components:{Table:Q,Layer:ve},setup(){const e=V({input:""}),a=V({show:!1,title:"\u65B0\u589E",showButton:!0}),t=V({index:1,size:20,total:0}),i=I("active"),c=_(!0),m=_([]),n=_([]),d=p=>{n.value=p},v=p=>{c.value=!0,p&&(t.index=1);let u=q({category:i.value.id,page:t.index,pageSize:t.size},e);R(u).then(o=>{let k=o.data.list;Array.isArray(k)&&k.forEach(b=>{const N=G.find(B=>B.value===b.choose);N?b.chooseName=N.label:b.chooseName=b.choose;const S=P.find(B=>B.value===b.radio);S?b.radioName=S.label:b.radio}),m.value=o.data.list,t.total=Number(o.data.pager.total)}).catch(o=>{m.value=[],t.index=1,t.total=0}).finally(()=>{c.value=!1})},f=p=>{let u={ids:p.map(o=>o.id).join(",")};W(u).then(o=>{oe({type:"success",message:"\u5220\u9664\u6210\u529F"}),v(m.value.length===1)})},D=()=>{a.title="\u65B0\u589E\u6570\u636E",a.show=!0,delete a.row},F=p=>{a.title="\u7F16\u8F91\u6570\u636E",a.row=p,a.show=!0};return ee(i,p=>{v(!0)}),{Plus:ae,Search:te,Delete:le,query:e,tableData:m,chooseData:n,loading:c,page:t,layer:a,handleSelectionChange:d,handleAdd:D,handleEdit:F,handleDel:f,getTableData:v}}}),ye={class:"layout-container"},$e={class:"layout-container-form flex space-between"},De={class:"layout-container-form-handle"},Fe={class:"layout-container-form-search"},Ce={class:"layout-container-table"};function we(e,a,t,i,c,m){const n=r("el-button"),d=r("el-popconfirm"),v=r("el-input"),f=r("el-table-column"),D=r("Table"),F=r("Layer"),p=ne("loading");return g(),C("div",ye,[h("div",$e,[h("div",De,[l(n,{type:"primary",icon:e.Plus,onClick:e.handleAdd},{default:s(()=>[y($(e.$t("message.common.add")),1)]),_:1},8,["icon","onClick"]),l(d,{title:e.$t("message.common.delTip"),onConfirm:a[0]||(a[0]=u=>e.handleDel(e.chooseData))},{reference:s(()=>[l(n,{type:"danger",icon:e.Delete,disabled:e.chooseData.length===0},{default:s(()=>[y($(e.$t("message.common.delBat")),1)]),_:1},8,["icon","disabled"])]),_:1},8,["title"])]),h("div",Fe,[l(v,{modelValue:e.query.input,"onUpdate:modelValue":a[1]||(a[1]=u=>e.query.input=u),placeholder:e.$t("message.common.searchTip"),onChange:a[2]||(a[2]=u=>e.getTableData(!0))},null,8,["modelValue","placeholder"]),l(n,{type:"primary",icon:e.Search,class:"search-btn",onClick:a[3]||(a[3]=u=>e.getTableData(!0))},{default:s(()=>[y($(e.$t("message.common.search")),1)]),_:1},8,["icon"])])]),h("div",Ce,[se(l(D,{ref:"table",page:e.page,"onUpdate:page":a[4]||(a[4]=u=>e.page=u),showIndex:!0,showSelection:!0,data:e.tableData,onGetTableData:e.getTableData,onSelectionChange:e.handleSelectionChange},{default:s(()=>[l(f,{prop:"name",label:"\u540D\u79F0",align:"center"}),l(f,{prop:"number",label:"\u6570\u5B57",align:"center"}),l(f,{prop:"chooseName",label:"\u9009\u62E9\u5668",align:"center"}),l(f,{prop:"radioName",label:"\u5355\u9009\u6846",align:"center"}),l(f,{label:e.$t("message.common.handle"),align:"center",fixed:"right",width:"200"},{default:s(u=>[l(n,{onClick:o=>e.handleEdit(u.row)},{default:s(()=>[y($(e.$t("message.common.update")),1)]),_:2},1032,["onClick"]),l(d,{title:e.$t("message.common.delTip"),onConfirm:o=>e.handleDel([u.row])},{reference:s(()=>[l(n,{type:"danger"},{default:s(()=>[y($(e.$t("message.common.del")),1)]),_:1})]),_:2},1032,["title","onConfirm"])]),_:1},8,["label"])]),_:1},8,["page","data","onGetTableData","onSelectionChange"]),[[p,e.loading]]),e.layer.show?(g(),E(F,{key:0,layer:e.layer,onGetTableData:e.getTableData},null,8,["layer","onGetTableData"])):re("",!0)])])}var Te=T(be,[["render",we],["__scopeId","data-v-4a0eeccf"]]);const Ee=w({name:"treeTable",components:{Category:_e,myTable:Te},setup(){let e=_({});ue("active",e)}}),Be={class:"full"},Ve={class:"left"},ke={class:"content"};function Ne(e,a,t,i,c,m){const n=r("category"),d=r("my-table");return g(),C("div",Be,[h("div",Ve,[l(n)]),h("div",ke,[l(d)])])}var qe=T(Ee,[["render",Ne],["__scopeId","data-v-50dd3ccb"]]);export{qe as default};
