(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-423a9ddc"],{"31ea":function(t,e,i){"use strict";i("7647")},7647:function(t,e,i){},eb35:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"tableParent",staticClass:"set-role-auth"},["{}"!==JSON.stringify(this.pageButtons)&&t.pageButtons.tab.length?i("el-tabs",{attrs:{type:"card"},model:{value:t.tabActive,callback:function(e){t.tabActive=e},expression:"tabActive"}},t._l(t.pageButtons.tab,(function(t,e){return i("el-tab-pane",{key:e,attrs:{label:t.name,name:t.prop}})})),1):t._e(),i("pageSearch",{attrs:{list:t.searchConfig,btnList:t.searchBtnList},on:{submit:t.submit,reset:t.reset,buttonClick:t.searchButtonClick}}),"{}"!==JSON.stringify(this.pageButtons)&&t.pageButtons.head.length?i("div",{staticClass:"search-after-btn"},t._l(t.pageButtons.head,(function(e,a){return i("span",{key:a,staticClass:"search-after-btn-item"},[e.tab!==t.tabActive&&e.tab?t._e():i("el-button",{attrs:{type:"export"===e.key?"success":"primary"},on:{click:function(i){return t.headBtnClick(e)}}},[e.icon?i("i",{class:e.icon}):t._e(),t._v(" "+t._s(e.name)+" ")])],1)})),0):t._e(),i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loadingTable,expression:"loadingTable"}],ref:"tableWrap",staticClass:"table-wrap",style:{height:t.tableHeight+"px"}},[i("pageTable",{attrs:{data:t.tableList,options:t.tableOptions,height:t.tableHeight},scopedSlots:t._u([{key:"handle",fn:function(e){return t._l(t.pageButtons.tableList,(function(a,s){return i("span",{key:s},[a.tab&&a.tab!==t.tabActive?t._e():i("span",{staticClass:"btn",class:{"btn-edit":"revise"===a.prop,"btn-delete":"delete"===a.prop},on:{click:function(i){return t.tableRowHandle(e.row,a.prop)}}},[t._v(" "+t._s(a.name)+" ")])])}))}}])})],1),i("pagination",{attrs:{total:t.total,pageSize:t.size,current:t.current},on:{currentChange:t.currentChange,sizeChange:t.sizeChange}}),i("el-dialog",{staticClass:"edit-role-dialog",attrs:{title:"编辑角色",visible:t.dialogVisible,width:"600px"},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("div",{staticClass:"base-info"},[i("pageCell",{attrs:{title:"角色昵称","title-width":"100"}},[i("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.editRole.key,callback:function(e){t.$set(t.editRole,"key",e)},expression:"editRole.key"}})],1),i("pageCell",{attrs:{title:"角色备注","title-width":"100"}},[i("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.editRole.remark,callback:function(e){t.$set(t.editRole,"remark",e)},expression:"editRole.remark"}})],1),i("pageCell",{attrs:{title:"权限菜单","title-width":"100"}},[t.dialogVisible?i("el-tree",{ref:"tree",staticClass:"tree-wrap",attrs:{data:t.menuBaseList,"show-checkbox":"","default-checked-keys":t.editRole.menuList,"node-key":"id","highlight-current":"",props:{children:"children",label:"name"}}}):t._e()],1)],1),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:t.dialogSubmit}},[t._v("确 定")])],1)])],1)},s=[],n=(i("b0c0"),i("ac1f"),i("841c"),i("9523")),l=i("502e"),o={name:"setRoleAuth",mixins:[l["a"]],data:function(){return{tabActive:"",dialogVisible:!1,tableHeight:1e3,loadingTable:!1,editRole:{key:"",remark:"",menuList:[]},searchBtnList:[],menuBaseList:n["a"],current:1,size:10,total:300,searchConfig:[{type:"input",value:"",placeholder:"请输入角色名",title:"",key:"roleNmae",inputType:"text"}],tableList:n["b"],tableOptions:[]}},computed:{pageButtons:function(){return this.$store.state.VX_PAGE_MENUS_ACTIVE_BUTTONS}},watch:{pageButtons:function(){this.buttonInit()},tabActive:function(){this.$cancelAxios(),this.buttonInit()}},created:function(){this.buttonInit()},methods:{buttonInit:function(){if("{}"!==JSON.stringify(this.pageButtons)){this.tableOptions=[],this.searchBtnList=[],this.tableList=[],this.pageButtons.tab.length&&!this.tabActive&&(this.tabActive=this.pageButtons.tab[0].prop);for(var t=0;t<this.pageButtons.tableHead.length;t+=1){var e=this.pageButtons.tableHead[t];if(e.tab){if(this.tabActive&&this.tabActive===e.tab){var i={prop:e.prop,label:e.name};this.tableOptions.push(i)}}else{var a={prop:e.prop,label:e.name};this.tableOptions.push(a)}}this.pageButtons.tableList.length&&this.tableOptions.push({fixed:"right",prop:"",label:"操作",width:"150",slotName:"handle"});for(var s=0;s<this.pageButtons.search.length;s+=1){var n=this.pageButtons.search[s];if(n.tab){if(this.tabActive&&this.tabActive===n.tab){var l={type:"success",name:n.name,key:n.prop,icon:n.icon,loading:!1};this.searchBtnList.push(l)}}else{var o={type:"success",name:n.name,key:n.prop,icon:n.icon,loading:!1};this.searchBtnList.push(o)}}this.getdata()}},getdata:function(){var t=this;this.loadingTable=!0,setTimeout((function(){t.loadingTable=!1,t.tableList=n["b"]}),1e3)},searchButtonClick:function(t){console.log(t)},submit:function(t){console.log(t)},reset:function(t){console.log(t)},tableRowHandle:function(t,e){"revise"===e?this.reviseRow(t):"delete"===e&&this.deleteRow(t)},reviseRow:function(t){console.log(t),this.dialogVisible=!0,this.editRole=t},deleteRow:function(t){var e=this;console.log(t),this.$msgbox({title:"提示",message:"确定删除？",showCancelButton:!0}).then((function(){e.$message.closeAll(),e.$message("已删除")})).catch((function(){e.$message.closeAll(),e.$message("已取消")}))},headBtnClick:function(t){console.log(t),"add"===t.prop&&this.addRole()},addRole:function(){this.editRole=null,this.dialogVisible=!0,this.editRole={key:"",remark:"",menuList:[]}},dialogSubmit:function(){this.dialogVisible=!1,this.editRole.menuList=this.$refs.tree.getCheckedKeys()},currentChange:function(t){this.current=t},sizeChange:function(t){this.size=t}}},r=o,c=(i("31ea"),i("2877")),u=Object(c["a"])(r,a,s,!1,null,"193ad32c",null);e["default"]=u.exports}}]);