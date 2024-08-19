import{D as L,F as V,E as S,S as Z,J as G,G as K,d as W,u as H,e as g,f as Q,o as X,g as Y,h as b,w as y,i,n as D,x as ee,H as T,l as R,I as te,B as ae,K as le,L as oe,M as j,N as ne,$ as A,z as se,A as re,O as $,C as ce,_ as ie}from"./index-a3559510.js";import{s as pe}from"./sourceCodeView-f6a010a7.js";function ue(n,r,a,e="excel-list",l="xlsx"){const o=me(n,r,a),p="SheetJS",c=S.book_new(),u=F(o);c.SheetNames.push(p),c.Sheets[p]=u;const f=L(c,{bookType:l,bookSST:!1,type:"binary"});V.saveAs(new Blob([I(f)],{type:"application/octet-stream"}),`${e}.${l}`)}function de({multiHeader:n=[],header:r={},data:a=[],filename:e="excel-list",merges:l=[],autoWidth:o=!0,bookType:p="xlsx"}){a=[...a],a.unshift(r);for(let m=n.length-1;m>-1;m--)a.unshift(n[m]);const c="SheetJS",u=S.book_new(),f=F(a);if(l.length>0&&(f["!merges"]||(f["!merges"]=[]),l.forEach(m=>{f["!merges"].push(S.decode_range(m))})),o){const m=a.map(v=>v.map(h=>h==null?{wch:10}:h.toString().charCodeAt(0)>255?{wch:h.toString().length*2}:{wch:h.toString().length}));let x=m[0];for(let v=1;v<m.length;v++)for(let h=0;h<m[v].length;h++)x[h].wch<m[v][h].wch&&(x[h].wch=m[v][h].wch);f["!cols"]=x}u.SheetNames.push(c),u.Sheets[c]=f;const _=L(u,{bookType:p,bookSST:!1,type:"binary"});V.saveAs(new Blob([I(_)],{type:"application/octet-stream"}),`${e}.${p}`)}function me(n,r=0,a){const e=[],l=n.querySelectorAll("tr");for(let o=0;o<l.length;++o){const p=[],c=l[o];let u=c.querySelectorAll("td");u&&u.length>0||(u=c.querySelectorAll("th"));let f=a&&a+1||u.length;for(let _=r;_<f;++_){let x=u[_].innerText;p.push(x!==""?x:null)}e.push(p)}return e}function fe(n){return(Date.parse(n.toUTCString())-new Date(Date.UTC(1899,11,30)).getTime())/(24*60*60*1e3)}function F(n){const r={},a={s:{c:1e7,r:1e7},e:{c:0,r:0}};for(let e=0;e!=n.length;++e)for(let l=0;l!=n[e].length;++l){a.s.r>e&&(a.s.r=e),a.s.c>l&&(a.s.c=l),a.e.r<e&&(a.e.r=e),a.e.c<l&&(a.e.c=l);const o={v:n[e][l]};if(o.v==null)continue;const p=S.encode_cell({c:l,r:e});typeof o.v=="number"?o.t="n":typeof o.v=="boolean"?o.t="b":o.v instanceof Date?(o.t="n",o.z=Z._table[14],o.v=fe(o.v)):o.t="s",r[p]=o}return a.s.c<1e7&&(r["!ref"]=S.encode_range(a)),r}function I(n){const r=new ArrayBuffer(n.length),a=new Uint8Array(r);for(let e=0;e!=n.length;++e)a[e]=n.charCodeAt(e)&255;return r}function he(n,r,a){const e=new G,l=a||"file",o=r;let p=`${n}\r
`;o.forEach(c=>{let u="";u=c.toString(),p+=`${u}\r
`}),e.file("data.txt",p),e.generateAsync({type:"blob"}).then(c=>{K.saveAs(c,`${l}.zip`)},()=>{alert("导出失败")})}const ge=`
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
`,be=n=>(se("data-v-0b721715"),n=n(),re(),n),ve={class:"container"},ye=be(()=>D("div",null,"分页表格",-1)),xe={class:"table-container"},we={class:"app-search-table"},_e={style:{margin:"10px 0"}},ke=W({name:"emTablePageEx",__name:"emTablePageEx",setup(n){const r=H(),a=g(),e=g(),l=g();let o=g({}),p=g({}),c=g([]);const u=g([{type:"input",key:"name",placeholder:"名称"},{type:"input",placeholder:"类型",key:"mimeType"},{type:"select",placeholder:"后缀",key:"extension",options:[{label:"jpg",val:".jpg"},{label:"html",val:".html"},{label:"png",val:".png"},{label:"jpeg",val:".jpeg"}]}]),f=g([{key:"id",label:"ID"},{key:"name",label:"名称"},{key:"mimeType",label:"类型"},{key:"extension",label:"后缀"},{label:"操作",width:250,render:s=>$("div",[$(T,{type:"warning",onClick:t=>{t.stopPropagation(),o.value=s.row,l.value.open(),ce(()=>{l.value.updateDataGroup(s.row)})}},()=>"编辑"),$(T,{type:"danger",onClick:t=>{t.stopPropagation(),M(s.row.id)}},()=>"删除")])}]),_=g([{type:"input",label:"名称",key:"name"},{type:"input",label:"类型",key:"mimeType"},{type:"select",label:"后缀",key:"extension",options:[{label:"jpg",val:".jpg"},{label:"html",val:".html"},{label:"png",val:".png"},{label:"jpeg",val:".jpeg"}]}]),m=g({name:{required:!0},mimeType:{required:!0},extension:{required:!0}}),x=s=>{p.value=le(s)},v=s=>{console.log(s)},h=s=>{console.log(s),c.value=s.map(t=>t.id)},J=()=>{a.value.changeLoading(!1)},q=()=>{l.value.open()},M=s=>{let t="";if(oe(s))t=s;else{if(c.value.length<=0){j.warning("请选择数据");return}t=c.value.join()}ne.confirm("是否确认删除","提示").then(()=>{A.delete(r.serverUrl+"/bt-table",{ids:t}).then(()=>{j.success("删除成功"),e.value.getTableData()}).catch()}).catch(k=>{console.log(k)})},B=()=>{setTimeout(()=>{l.value.resetForm(),o.value={}},200)},z=s=>{let t="post";o.value.id&&(t="put",s.id=o.value.id),A[t](r.serverUrl+"/bt-table",s,{isShowLoading:!0}).then(()=>{j.success(t==="post"?"新增成功":"编辑成功"),e.value.getTableData(),l.value.changeLoading(!1),l.value.close(),B()}).catch(()=>{l.value.changeLoading(!1)})},N=()=>{const s=e.value.dataT||[];let t=f.value.filter(d=>d.key),k=t.map(d=>d.label),w=t.map(d=>d.key),E=s.map(d=>w.map(C=>d[C]));de({header:k,data:E,filename:"表格数据"})},P=()=>{const s=e.value.dataT||[];let t=f.value.filter(d=>d.key),k=t.map(d=>d.label),w=t.map(d=>d.key),E=s.map(d=>w.map(C=>d[C]));he(k,E,"表格数据")},O=()=>{ue(e.value.$el.parentElement,1,4,"表格数据")};return(s,t)=>{const k=Q("el-card");return X(),Y("div",ve,[b(k,null,{header:y(()=>[ye]),footer:y(()=>[b(pe,{code:i(ge)},null,8,["code"])]),default:y(()=>[D("div",xe,[D("div",we,[b(i(ee),{ref_key:"searchFormRef",ref:a,"form-data":i(u),btnLoading:"",onOnSearch:x},{beginBtnGroup:y(()=>[b(i(T),{type:"success",onClick:t[0]||(t[0]=w=>q())},{default:y(()=>[R(" 新增")]),_:1}),b(i(T),{type:"danger",disabled:!(i(c)&&i(c).length>0),onClick:t[1]||(t[1]=w=>M())},{default:y(()=>[R(" 删除 ")]),_:1},8,["disabled"])]),_:1},8,["form-data"]),D("div",_e,[b(i(T),{type:"primary",onClick:t[2]||(t[2]=w=>O())},{default:y(()=>[R(" TABLE导出Excel")]),_:1}),b(i(T),{type:"warning",onClick:t[3]||(t[3]=w=>N())},{default:y(()=>[R(" JSON导出Excel")]),_:1}),b(i(T),{type:"warning",onClick:t[4]||(t[4]=w=>P())},{default:y(()=>[R(" zip导出")]),_:1})]),b(i(te),{ref_key:"tableRef",ref:e,selection:"",url:i(r).serverUrl+"/bt-table-page",columns:i(f),searchData:i(p),orderKey:"",onRowClick:v,onSelectionChange:h,onOnDataChange:J},null,8,["url","columns","searchData"])])])]),_:1}),b(i(ae),{ref_key:"formModalRef",ref:l,title:i(o).id?"编辑":"新增","form-data":i(_),"form-rules":i(m),btnLoading:"",onOnSubmit:z,onOnClose:B},null,8,["title","form-data","form-rules"])])}}});const Se=ie(ke,[["__scopeId","data-v-0b721715"]]);export{Se as default};
