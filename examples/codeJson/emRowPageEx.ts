export const code1: string = `
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
</script>

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
`
