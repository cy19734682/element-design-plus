import{d as O,u as I,e as n,o as M,g as N,q as G,h as r,w as p,i as t,E as i,l as m,z as U,D as z,B as Z,F as A,G as H,H as _,I as K,$ as w,J as k,C as Q,_ as W}from"./index-0b6b4772.js";import{e as X,a as Y,b as ee}from"./export2Zip-4c5398fc.js";const ae={class:"app-container"},te={class:"app-search-table"},le=O({name:"emTablePageEx",__name:"emTablePageEx",setup(oe){const f=I(),x=n(),c=n(),s=n();let u=n({}),T=n({}),d=n([]);const E=n([{type:"input",key:"name",placeholder:"名称"},{type:"input",placeholder:"类型",key:"mimeType"},{type:"select",placeholder:"后缀",key:"extension",options:[{label:"jpg",val:".jpg"},{label:"html",val:".html"},{label:"png",val:".png"},{label:"jpeg",val:".jpeg"}]}]),g=n([{key:"id",label:"ID"},{key:"name",label:"名称"},{key:"mimeType",label:"类型"},{key:"extension",label:"后缀"},{label:"操作",width:250,render:a=>k("div",[k(i,{type:"warning",onClick:e=>{e.stopPropagation(),u.value=a.row,s.value.open(),Q(()=>{s.value.updateDataGroup(a.row)})}},()=>"编辑"),k(i,{type:"danger",onClick:e=>{e.stopPropagation(),C(a.row.id)}},()=>"删除")])}]),$=n([{type:"input",label:"名称",key:"name"},{type:"input",label:"类型",key:"mimeType"},{type:"select",label:"后缀",key:"extension",options:[{label:"jpg",val:".jpg"},{label:"html",val:".html"},{label:"png",val:".png"},{label:"jpeg",val:".jpeg"}]}]),j=n({name:{required:!0},mimeType:{required:!0},extension:{required:!0}}),R=a=>{T.value=A(a)},B=a=>{console.log(a)},P=a=>{console.log(a),d.value=a.map(e=>e.id)},L=()=>{x.value.changeLoading(!1)},S=()=>{s.value.open()},C=a=>{let e="";if(H(a))e=a;else{if(d.value.length<=0){_.warning("请选择数据");return}e=d.value.join()}K.confirm("是否确认删除","提示").then(()=>{w.delete(f.serverUrl+"/bt-table",{ids:e}).then(()=>{_.success("删除成功"),c.value.getTableData()}).catch()}).catch(o=>{console.log(o)})},D=()=>{setTimeout(()=>{s.value.resetForm(),u.value={}},200)},V=a=>{let e="post";u.value.id&&(e="put",a.id=u.value.id),w[e](f.serverUrl+"/bt-table",a,{isShowLoading:!0}).then(()=>{_.success(e==="post"?"新增成功":"编辑成功"),c.value.getTableData(),s.value.changeLoading(!1),s.value.close(),D()}).catch(()=>{s.value.changeLoading(!1)})},q=()=>{const a=c.value.dataT||[];let e=g.value.filter(l=>l.key),o=e.map(l=>l.label),b=e.map(l=>l.key),v=a.map(l=>b.map(h=>l[h]));X({header:o,data:v,filename:"表格数据"})},F=()=>{const a=c.value.dataT||[];let e=g.value.filter(l=>l.key),o=e.map(l=>l.label),b=e.map(l=>l.key),v=a.map(l=>b.map(h=>l[h])),y="表格数据";Y(o,v,y,y)},J=()=>{ee("tablePage",1,4,"表格数据")};return(a,e)=>(M(),N("div",ae,[G("div",te,[r(t(U),{ref_key:"searchFormRef",ref:x,"form-data":t(E),btnLoading:"",onOnSearch:R},{beginBtnGroup:p(()=>[r(t(i),{type:"success",onClick:e[0]||(e[0]=o=>S())},{default:p(()=>[m(" 新增")]),_:1}),r(t(i),{type:"danger",disabled:!(t(d)&&t(d).length>0),onClick:e[1]||(e[1]=o=>C())},{default:p(()=>[m(" 删除 ")]),_:1},8,["disabled"]),r(t(i),{type:"primary",onClick:e[2]||(e[2]=o=>J())},{default:p(()=>[m(" TABLE导出")]),_:1}),r(t(i),{type:"warning",onClick:e[3]||(e[3]=o=>q())},{default:p(()=>[m(" JSON导出")]),_:1}),r(t(i),{type:"warning",onClick:e[4]||(e[4]=o=>F())},{default:p(()=>[m(" zip导出")]),_:1})]),_:1},8,["form-data"]),r(t(z),{id:"tablePage",ref_key:"tableRef",ref:c,selection:"",url:t(f).serverUrl+"/bt-table-page",columns:t(g),searchData:t(T),orderKey:"",onRowClick:B,onSelectionChange:P,onOnDataChange:L},null,8,["url","columns","searchData"])]),r(t(Z),{ref_key:"formModalRef",ref:s,title:t(u).id?"编辑":"新增","form-data":t($),"form-rules":t(j),btnLoading:"",onOnSubmit:V,onOnClose:D},null,8,["title","form-data","form-rules"])]))}});const re=W(le,[["__scopeId","data-v-d85f9a62"]]);export{re as default};
