import{A as L,F as V,B as D,S as Z,J as G,C as K,d as W,u as H,c as h,e as Q,o as X,f as Y,g as b,w as v,h as S,i,v as ee,E as R,l as _,D as te,y as ae,G as le,H as oe,I as j,K as ne,$ as A,L as $,z as se,_ as re}from"./index-0f83177b.js";import{s as ce}from"./sourceCodeView-3a98e334.js";function ie(s,r,a,t="excel-list",l="xlsx"){const o=ue(s,r,a),p="SheetJS",c=D.book_new(),u=F(o);c.SheetNames.push(p),c.Sheets[p]=u;const f=L(c,{bookType:l,bookSST:!1,type:"binary"});V.saveAs(new Blob([J(f)],{type:"application/octet-stream"}),`${t}.${l}`)}function pe({multiHeader:s=[],header:r={},data:a=[],filename:t="excel-list",merges:l=[],autoWidth:o=!0,bookType:p="xlsx"}){a=[...a],a.unshift(r);for(let m=s.length-1;m>-1;m--)a.unshift(s[m]);const c="SheetJS",u=D.book_new(),f=F(a);if(l.length>0&&(f["!merges"]||(f["!merges"]=[]),l.forEach(m=>{f["!merges"].push(D.decode_range(m))})),o){const m=a.map(y=>y.map(g=>g==null?{wch:10}:g.toString().charCodeAt(0)>255?{wch:g.toString().length*2}:{wch:g.toString().length}));let x=m[0];for(let y=1;y<m.length;y++)for(let g=0;g<m[y].length;g++)x[g].wch<m[y][g].wch&&(x[g].wch=m[y][g].wch);f["!cols"]=x}u.SheetNames.push(c),u.Sheets[c]=f;const k=L(u,{bookType:p,bookSST:!1,type:"binary"});V.saveAs(new Blob([J(k)],{type:"application/octet-stream"}),`${t}.${p}`)}function ue(s,r=0,a){const t=[],l=s.querySelectorAll("tr");for(let o=0;o<l.length;++o){const p=[],c=l[o];let u=c.querySelectorAll("td");u&&u.length>0||(u=c.querySelectorAll("th"));let f=a&&a+1||u.length;for(let k=r;k<f;++k){let x=u[k].innerText;p.push(x!==""?x:null)}t.push(p)}return t}function de(s){return(Date.parse(s.toUTCString())-new Date(Date.UTC(1899,11,30)).getTime())/(24*60*60*1e3)}function F(s){const r={},a={s:{c:1e7,r:1e7},e:{c:0,r:0}};for(let t=0;t!=s.length;++t)for(let l=0;l!=s[t].length;++l){a.s.r>t&&(a.s.r=t),a.s.c>l&&(a.s.c=l),a.e.r<t&&(a.e.r=t),a.e.c<l&&(a.e.c=l);const o={v:s[t][l]};if(o.v==null)continue;const p=D.encode_cell({c:l,r:t});typeof o.v=="number"?o.t="n":typeof o.v=="boolean"?o.t="b":o.v instanceof Date?(o.t="n",o.z=Z._table[14],o.v=de(o.v)):o.t="s",r[p]=o}return a.s.c<1e7&&(r["!ref"]=D.encode_range(a)),r}function J(s){const r=new ArrayBuffer(s.length),a=new Uint8Array(r);for(let t=0;t!=s.length;++t)a[t]=s.charCodeAt(t)&255;return r}function me(s,r,a){const t=new G,l=a||"file",o=r;let p=`${s}\r
`;o.forEach(c=>{let u="";u=c.toString(),p+=`${u}\r
`}),t.file("data.txt",p),t.generateAsync({type:"blob"}).then(c=>{K.saveAs(c,`${l}.zip`)},()=>{alert("导出失败")})}const fe=`
<script lang="ts" setup>
const searchFormRef = ref<any>()
const tableRef = ref<any>()
const formModalRef = ref<any>()

let activeRow = ref<Record<string, any>>({})
let searchData = ref<Record<string, any>>({})
let selectIds = ref<string[]>([])
const searchFormData = ref<any[]>([
  {
    type: 'input',
    key: 'name',
    placeholder: '名称'
  },
  {
    type: 'input',
    placeholder: '类型',
    key: 'mimeType'
  },
  {
    type: 'select',
    placeholder: '后缀',
    key: 'extension',
    options: [
      {
        label: 'jpg',
        val: '.jpg'
      },
      {
        label: 'html',
        val: '.html'
      },
      {
        label: 'png',
        val: '.png'
      },
      {
        label: 'jpeg',
        val: '.jpeg'
      }
    ]
  }
])
const columns = ref<any[]>([
  {
    key: 'id',
    label: 'ID'
  },
  {
    key: 'name',
    label: '名称'
  },
  {
    key: 'mimeType',
    label: '类型'
  },
  {
    key: 'extension',
    label: '后缀'
  },
  {
    label: '操作',
    width: 250,
    render: (params: any) => {
      return h('div', [
        h(
          ElButton,
          {
            type: 'warning',
            onClick: (e: any) => {
              e.stopPropagation()
              activeRow.value = params.row
              formModalRef.value.open()
              nextTick(() => {
                formModalRef.value.updateDataGroup(params.row)
              })
            }
          },
          () => '编辑'
        ),
        h(
          ElButton,
          {
            type: 'danger',
            onClick: (e: any) => {
              e.stopPropagation()
              delData(params.row.id)
            }
          },
          () => '删除'
        )
      ])
    }
  }
])

const formData = ref<any[]>([
  {
    type: 'input',
    label: '名称',
    key: 'name'
  },
  {
    type: 'input',
    label: '类型',
    key: 'mimeType'
  },
  {
    type: 'select',
    label: '后缀',
    key: 'extension',
    options: [
      {
        label: 'jpg',
        val: '.jpg'
      },
      {
        label: 'html',
        val: '.html'
      },
      {
        label: 'png',
        val: '.png'
      },
      {
        label: 'jpeg',
        val: '.jpeg'
      }
    ]
  }
])
const formRules = ref<Record<string, any>>({
  name: {
    required: true
  },
  mimeType: {
    required: true
  },
  extension: {
    required: true
  }
})

/**
 * 搜索
 */
const search = (data: object) => {
  searchData.value = cloneDeep(data)
}
const rowClick = (row: object) => {
  console.log(row)
}
/**
 * 复选框选择回调
 * @param selection
 */
const selectionChange = (selection: any[]) => {
  console.log(selection)
  selectIds.value = selection.map((item) => item.id)
}
/**
 * 列表加载完成回调
 */
const onDataChange = () => {
  searchFormRef.value.changeLoading(false)
}
const addData = () => {
  formModalRef.value.open()
}
/**
 * 删除数据
 */
const delData = (id?: any) => {
  let ids = ''
  if (isValidVal(id)) {
    ids = id
  } else {
    if (selectIds.value.length <= 0) {
      ElMessage.warning('请选择数据')
      return
    }
    ids = selectIds.value.join()
  }
  ElMessageBox.confirm('是否确认删除', '提示')
    .then(() => {
      $request
        .delete(store.serverUrl + '/bt-table', { ids })
        .then(() => {
          ElMessage.success('删除成功')
          tableRef.value.getTableData()
        })
        .catch()
    })
    .catch((e) => {
      console.log(e)
    })
}
/**
 * 关闭弹框
 */
const onClose = () => {
  setTimeout(() => {
    formModalRef.value.resetForm()
    activeRow.value = {}
  }, 200)
}
/**
 * 新增 or 编辑
 */
const onSubmit = (data: Record<string, any>) => {
  let method: 'post' | 'put' = 'post'
  if (activeRow.value.id) {
    method = 'put'
    data['id'] = activeRow.value.id
  }
  $request[method]('/bt-table', data, { isShowLoading: true })
    .then(() => {
      ElMessage.success(method === 'post' ? '新增成功' : '编辑成功')
      tableRef.value.getTableData()
      formModalRef.value.changeLoading(false)
      formModalRef.value.close()
      onClose()
    })
    .catch(() => {
      formModalRef.value.changeLoading(false)
    })
}
/**
 * 导出Excel
 */
const exportJsonExcel = () => {
  const dataT = tableRef.value.dataT || []
  let column = columns.value.filter((e: any) => e.key)
  let header = column.map((e) => e.label)
  let headValue = column.map((e) => e.key)
  let data = dataT.map((v: any) => headValue.map((j) => v[j]))
  let filename = '表格数据'
  exportJsonToExcel({
    header,
    data,
    filename
  })
}
/**
 * 导出zip
 */
const exportJsonZip = () => {
  const dataT = tableRef.value.dataT || []
  let column = columns.value.filter((e: any) => e.key)
  let header = column.map((e) => e.label)
  let headValue = column.map((e) => e.key)
  let data = dataT.map((v: any) => headValue.map((j) => v[j]))
  let filename = '表格数据'
  exportTxtToZip(header, data, filename)
}
/**
 * 导出Excel
 */
const exportTableExcel = () => {
  exportTableToExcel(tableRef.value.$el.parentElement, 1, 4, '表格数据')
}
<\/script>

<template>
<div class="app-search-table">
  <em-search-form ref="searchFormRef" :form-data="searchFormData" btnLoading @on-search="search">
    <template #beginBtnGroup>
      <el-button type="success" @click="addData()"> 新增</el-button>
      <el-button type="danger" :disabled="!(selectIds && selectIds.length > 0)" @click="delData()">
        删除
      </el-button>
    </template>
  </em-search-form>
  <div style="margin: 10px 0">
    <el-button type="primary" @click="exportTableExcel()"> TABLE导出Excel</el-button>
    <el-button type="warning" @click="exportJsonExcel()"> JSON导出Excel</el-button>
    <el-button type="warning" @click="exportJsonZip()"> zip导出</el-button>
  </div>
  <em-table-page
    ref="tableRef"
    selection
    url='/bt-table-page"
    :columns="columns"
    :searchData="searchData"
    orderKey=""
    @row-click="rowClick"
    @selection-change="selectionChange"
    @on-data-change="onDataChange"
  />
</div>
  <em-form-modal
    ref="formModalRef"
    :title="activeRow.id ? '编辑' : '新增'"
    :form-data="formData"
    :form-rules="formRules"
    btnLoading
    @on-submit="onSubmit"
    @on-close="onClose"
  />
</div>
</template>
`,ge={class:"container"},he={class:"table-container"},be={class:"app-search-table"},ye={style:{margin:"10px 0"}},ve=W({name:"emTablePageEx",__name:"emTablePageEx",setup(s){const r=H(),a=h(),t=h(),l=h();let o=h({}),p=h({}),c=h([]);const u=h([{type:"input",key:"name",placeholder:"名称"},{type:"input",placeholder:"类型",key:"mimeType"},{type:"select",placeholder:"后缀",key:"extension",options:[{label:"jpg",val:".jpg"},{label:"html",val:".html"},{label:"png",val:".png"},{label:"jpeg",val:".jpeg"}]}]),f=h([{key:"id",label:"ID"},{key:"name",label:"名称"},{key:"mimeType",label:"类型"},{key:"extension",label:"后缀"},{label:"操作",width:250,render:n=>$("div",[$(R,{type:"warning",onClick:e=>{e.stopPropagation(),o.value=n.row,l.value.open(),se(()=>{l.value.updateDataGroup(n.row)})}},()=>"编辑"),$(R,{type:"danger",onClick:e=>{e.stopPropagation(),M(n.row.id)}},()=>"删除")])}]),k=h([{type:"input",label:"名称",key:"name"},{type:"input",label:"类型",key:"mimeType"},{type:"select",label:"后缀",key:"extension",options:[{label:"jpg",val:".jpg"},{label:"html",val:".html"},{label:"png",val:".png"},{label:"jpeg",val:".jpeg"}]}]),m=h({name:{required:!0},mimeType:{required:!0},extension:{required:!0}}),x=n=>{p.value=le(n)},y=n=>{console.log(n)},g=n=>{console.log(n),c.value=n.map(e=>e.id)},q=()=>{a.value.changeLoading(!1)},I=()=>{l.value.open()},M=n=>{let e="";if(oe(n))e=n;else{if(c.value.length<=0){j.warning("请选择数据");return}e=c.value.join()}ne.confirm("是否确认删除","提示").then(()=>{A.delete(r.serverUrl+"/bt-table",{ids:e}).then(()=>{j.success("删除成功"),t.value.getTableData()}).catch()}).catch(T=>{console.log(T)})},B=()=>{setTimeout(()=>{l.value.resetForm(),o.value={}},200)},z=n=>{let e="post";o.value.id&&(e="put",n.id=o.value.id),A[e](r.serverUrl+"/bt-table",n,{isShowLoading:!0}).then(()=>{j.success(e==="post"?"新增成功":"编辑成功"),t.value.getTableData(),l.value.changeLoading(!1),l.value.close(),B()}).catch(()=>{l.value.changeLoading(!1)})},P=()=>{const n=t.value.dataT||[];let e=f.value.filter(d=>d.key),T=e.map(d=>d.label),w=e.map(d=>d.key),E=n.map(d=>w.map(C=>d[C]));pe({header:T,data:E,filename:"表格数据"})},N=()=>{const n=t.value.dataT||[];let e=f.value.filter(d=>d.key),T=e.map(d=>d.label),w=e.map(d=>d.key),E=n.map(d=>w.map(C=>d[C]));me(T,E,"表格数据")},U=()=>{ie(t.value.$el.parentElement,1,4,"表格数据")};return(n,e)=>{const T=Q("el-card");return X(),Y("div",ge,[b(T,null,{header:v(()=>e[5]||(e[5]=[S("div",null,"分页表格",-1)])),footer:v(()=>[b(ce,{code:i(fe)},null,8,["code"])]),default:v(()=>[S("div",he,[S("div",be,[b(i(ee),{ref_key:"searchFormRef",ref:a,"form-data":i(u),btnLoading:"",onOnSearch:x},{beginBtnGroup:v(()=>[b(i(R),{type:"success",onClick:e[0]||(e[0]=w=>I())},{default:v(()=>e[6]||(e[6]=[_(" 新增")])),_:1}),b(i(R),{type:"danger",disabled:!(i(c)&&i(c).length>0),onClick:e[1]||(e[1]=w=>M())},{default:v(()=>e[7]||(e[7]=[_(" 删除 ")])),_:1},8,["disabled"])]),_:1},8,["form-data"]),S("div",ye,[b(i(R),{type:"primary",onClick:e[2]||(e[2]=w=>U())},{default:v(()=>e[8]||(e[8]=[_(" TABLE导出Excel")])),_:1}),b(i(R),{type:"warning",onClick:e[3]||(e[3]=w=>P())},{default:v(()=>e[9]||(e[9]=[_(" JSON导出Excel")])),_:1}),b(i(R),{type:"warning",onClick:e[4]||(e[4]=w=>N())},{default:v(()=>e[10]||(e[10]=[_(" zip导出")])),_:1})]),b(i(te),{ref_key:"tableRef",ref:t,selection:"",url:i(r).serverUrl+"/bt-table-page",columns:i(f),searchData:i(p),orderKey:"",onRowClick:y,onSelectionChange:g,onOnDataChange:q},null,8,["url","columns","searchData"])])])]),_:1}),b(i(ae),{ref_key:"formModalRef",ref:l,title:i(o).id?"编辑":"新增","form-data":i(k),"form-rules":i(m),btnLoading:"",onOnSubmit:z,onOnClose:B},null,8,["title","form-data","form-rules"])])}}});const ke=re(ve,[["__scopeId","data-v-0b721715"]]);export{ke as default};
