import{d as S,u as F,c as l,e as v,o as q,f as $,g as o,w as n,i as t,h as g,v as P,l as y,H as V,A as B,I as U,K as O,L as p,M as N,$ as _,y as K,z as G,N as z,O as A,_ as H}from"./index-df5299c9.js";import{s as J}from"./sourceCodeView-84d5d6fc.js";const Q=`
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
`,W=i=>(K("data-v-4572b46a"),i=i(),G(),i),X={class:"container"},Y=W(()=>g("div",null,"栅栏表格",-1)),Z={class:"table-container"},ee={class:"app-search-table"},ae=S({name:"emRowPageEx",__name:"emRowPageEx",setup(i){const m=F();let d=l({}),f=l({}),r=l([]),R=l([{type:"input",key:"name",placeholder:"名称"},{type:"input",placeholder:"类型",key:"mimeType"},{type:"select",placeholder:"后缀",key:"extension",options:[{label:"jpg",val:".jpg"},{label:"html",val:".html"},{label:"png",val:".png"},{label:"jpeg",val:".jpeg"}]}]);const D=l([{key:"id",label:"ID",render:a=>{var e;return z(A,{style:{width:"100%",height:"200px"},src:((e=window==null?void 0:window._global)==null?void 0:e.serverImg)+a.row.imgPath})}},{key:"name",label:"名称"}]),w=l([{type:"input",label:"名称",key:"name"},{type:"input",label:"类型",key:"mimeType"},{type:"select",label:"后缀",key:"extension",options:[{label:"jpg",val:".jpg"},{label:"html",val:".html"},{label:"png",val:".png"},{label:"jpeg",val:".jpeg"}]}]),k=l({name:{required:!0},mimeType:{required:!0},extension:{required:!0}}),h=l(),s=l(),u=l(),x=a=>{f.value=U(a)},C=a=>{console.log(a),r.value=a.map(e=>e.id)},j=()=>{h.value.changeLoading(!1)},I=()=>{s.value.open()},M=a=>{let e="";if(O(a))e=a;else{if(r.value.length<=0){p.warning("请选择数据");return}e=r.value.join()}N.confirm("是否确认删除","提示").then(()=>{_.delete(m.serverUrl+"/bt-table",{ids:e}).then(()=>{p.success("删除成功"),u.value.getTableData()}).catch()}).catch(c=>{console.log(c)})},b=()=>{setTimeout(()=>{s.value.resetForm(),d.value={}},200)},T=a=>{let e="post";d.value.id&&(e="put",a.id=d.value.id),_[e](m.serverUrl+"/bt-table",a,{isShowLoading:!0}).then(()=>{p.success(e==="post"?"新增成功":"编辑成功"),u.value.getTableData(),s.value.changeLoading(!1),s.value.close(),b()}).catch(c=>{s.value.changeLoading(!1)})};return(a,e)=>{const c=v("el-button"),E=v("el-card");return q(),$("div",X,[o(E,null,{header:n(()=>[Y]),footer:n(()=>[o(J,{code:t(Q)},null,8,["code"])]),default:n(()=>[g("div",Z,[g("div",ee,[o(t(P),{ref_key:"searchFormRef",ref:h,"form-data":t(R),btnLoading:"",onOnSearch:x},{beginBtnGroup:n(()=>[o(c,{type:"success",onClick:e[0]||(e[0]=L=>I())},{default:n(()=>[y(" 新增")]),_:1}),o(c,{type:"danger",disabled:!(t(r)&&t(r).length>0),onClick:e[1]||(e[1]=L=>M())},{default:n(()=>[y(" 删除 ")]),_:1},8,["disabled"])]),_:1},8,["form-data"]),o(t(V),{id:"tablePage",ref_key:"tableRef",ref:u,selection:"",url:t(m).serverUrl+"/bt-table-page",isTable:!1,"row-gutter":15,columns:t(D),searchData:t(f),orderKey:"",onRowSelectionChange:C,onOnDataChange:j},null,8,["url","columns","searchData"])])])]),_:1}),o(t(B),{ref_key:"formModalRef",ref:s,title:t(d).id?"编辑":"新增","form-data":t(w),"form-rules":t(k),btnLoading:"",onOnSubmit:T,onOnClose:b},null,8,["title","form-data","form-rules"])])}}});const oe=H(ae,[["__scopeId","data-v-4572b46a"]]);export{oe as default};
