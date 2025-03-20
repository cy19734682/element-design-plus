import{d as L,u as F,c as l,e as b,o as q,f as S,g as o,w as n,h as u,i as t,v as $,l as v,D as P,y as V,G as B,H as U,I as p,K as O,$ as y,L as G,M as K,_ as N}from"./index-0f83177b.js";import{s as H}from"./sourceCodeView-3a98e334.js";const z=`
<script lang="ts" setup>

let activeRow = ref<Record<string, any>>({})
let searchData = ref<Record<string, any>>({})
let selectIds = ref<any[]>([])
let searchFormData = ref<any[]>([
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
    label: 'ID',
    render: (params: any) => {
      return h(ElImage, {
        style: {
          width: '100%',
          height: '200px'
        },
        src: window?._global?.serverImg + params.row.imgPath
      })
    }
  },
  {
    key: 'name',
    label: '名称'
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
const searchFormRef = ref<any>()
const formModalRef = ref<any>()
const tableRef = ref<any>()

/**
 * 搜索
 */
const search = (data: Record<string, any>) => {
  searchData.value = cloneDeep(data)
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
const delData = (id?: string | number) => {
  let ids: any = ''
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
  $request[method](store.serverUrl + '/bt-table', data, { isShowLoading: true })
    .then(() => {
      ElMessage.success(method === 'post' ? '新增成功' : '编辑成功')
      tableRef.value.getTableData()
      formModalRef.value.changeLoading(false)
      formModalRef.value.close()
      onClose()
    })
    .catch((e) => {
      formModalRef.value.changeLoading(false)
    })
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
  <em-table-page
    id="tablePage"
    ref="tableRef"
    selection
    :url="store.serverUrl + '/bt-table-page'"
    :isTable="false"
    :row-gutter="15"
    :columns="columns"
    :searchData="searchData"
    orderKey=""
    @row-selection-change="selectionChange"
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
`,A={class:"container"},J={class:"table-container"},Q={class:"app-search-table"},W=L({name:"emRowPageEx",__name:"emRowPageEx",setup(X){const d=F();let i=l({}),g=l({}),r=l([]),R=l([{type:"input",key:"name",placeholder:"名称"},{type:"input",placeholder:"类型",key:"mimeType"},{type:"select",placeholder:"后缀",key:"extension",options:[{label:"jpg",val:".jpg"},{label:"html",val:".html"},{label:"png",val:".png"},{label:"jpeg",val:".jpeg"}]}]);const _=l([{key:"id",label:"ID",render:a=>{var e;return G(K,{style:{width:"100%",height:"200px"},src:((e=window==null?void 0:window._global)==null?void 0:e.serverImg)+a.row.imgPath})}},{key:"name",label:"名称"}]),D=l([{type:"input",label:"名称",key:"name"},{type:"input",label:"类型",key:"mimeType"},{type:"select",label:"后缀",key:"extension",options:[{label:"jpg",val:".jpg"},{label:"html",val:".html"},{label:"png",val:".png"},{label:"jpeg",val:".jpeg"}]}]),w=l({name:{required:!0},mimeType:{required:!0},extension:{required:!0}}),f=l(),s=l(),m=l(),k=a=>{g.value=B(a)},x=a=>{console.log(a),r.value=a.map(e=>e.id)},C=()=>{f.value.changeLoading(!1)},j=()=>{s.value.open()},M=a=>{let e="";if(U(a))e=a;else{if(r.value.length<=0){p.warning("请选择数据");return}e=r.value.join()}O.confirm("是否确认删除","提示").then(()=>{y.delete(d.serverUrl+"/bt-table",{ids:e}).then(()=>{p.success("删除成功"),m.value.getTableData()}).catch()}).catch(c=>{console.log(c)})},h=()=>{setTimeout(()=>{s.value.resetForm(),i.value={}},200)},I=a=>{let e="post";i.value.id&&(e="put",a.id=i.value.id),y[e](d.serverUrl+"/bt-table",a,{isShowLoading:!0}).then(()=>{p.success(e==="post"?"新增成功":"编辑成功"),m.value.getTableData(),s.value.changeLoading(!1),s.value.close(),h()}).catch(c=>{s.value.changeLoading(!1)})};return(a,e)=>{const c=b("el-button"),T=b("el-card");return q(),S("div",A,[o(T,null,{header:n(()=>e[2]||(e[2]=[u("div",null,"栅栏表格",-1)])),footer:n(()=>[o(H,{code:t(z)},null,8,["code"])]),default:n(()=>[u("div",J,[u("div",Q,[o(t($),{ref_key:"searchFormRef",ref:f,"form-data":t(R),btnLoading:"",onOnSearch:k},{beginBtnGroup:n(()=>[o(c,{type:"success",onClick:e[0]||(e[0]=E=>j())},{default:n(()=>e[3]||(e[3]=[v(" 新增")])),_:1}),o(c,{type:"danger",disabled:!(t(r)&&t(r).length>0),onClick:e[1]||(e[1]=E=>M())},{default:n(()=>e[4]||(e[4]=[v(" 删除 ")])),_:1},8,["disabled"])]),_:1},8,["form-data"]),o(t(P),{id:"tablePage",ref_key:"tableRef",ref:m,selection:"",url:t(d).serverUrl+"/bt-table-page",isTable:!1,"row-gutter":15,columns:t(_),searchData:t(g),orderKey:"",onRowSelectionChange:x,onOnDataChange:C},null,8,["url","columns","searchData"])])])]),_:1}),o(t(V),{ref_key:"formModalRef",ref:s,title:t(i).id?"编辑":"新增","form-data":t(D),"form-rules":t(w),btnLoading:"",onOnSubmit:I,onOnClose:h},null,8,["title","form-data","form-rules"])])}}});const ee=N(W,[["__scopeId","data-v-4572b46a"]]);export{ee as default};
