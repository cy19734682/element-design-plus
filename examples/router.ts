import { createRouter, createWebHistory } from 'vue-router'
import appMain from './components/appMain.vue'

/**
 * 默认路由
 * 这个地方设置是基本上是不需要权限就能访问的路由
 * 所有角色都可以访问
 */
const constantRoutes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: () => import('./views/index.vue'),
    name: 'index',
  },
  {
    path: '/login',
    component: () => import('./views/login.vue'),
    name: 'login',
    meta: {
      title: '登录'
    }
  },
  {
    path: '/home',
    component: appMain,
    name: 'home',
    children: [
      {
        path: 'uploadExcelEx',
        component: () => import('./views/example/uploadExcelEx.vue'),
        name: 'uploadExcelEx',
        meta: {
          title: 'excel上传解析'
        },
      },
      {
        path: 'emFormEx',
        component: () => import('./views/example/emFormEx.vue'),
        name: 'emFormEx',
        meta: {
          title: 'emForm表单'
        },
      },
      {
        path: 'emStaticForm',
        component: () => import('./views/example/emStaticFormEx.vue'),
        name: 'emStaticForm',
        meta: {
          title: 'emStaticForm表单'
        },
      },
      {
        path: 'emSearchFormEx',
        component: () => import('./views/example/emSearchFormEx.vue'),
        name: 'emSearchFormEx',
        meta: {
          title: 'SearchForm表单'
        },
      },
      {
        path: 'emFormGroupEx',
        component: () => import('./views/example/emFormGroupEx.vue'),
        name: 'emFormGroupEx',
        meta: {
          title: 'formGroup表单'
        },
      },
      {
        path: 'emFormModalEx',
        component: () => import('./views/example/emFormModalEx.vue'),
        name: 'emFormModalEx',
        meta: {
          title: 'formModal表单'
        }
      },
      {
        path: 'emTablePageEx',
        component: () => import('./views/example/emTablePageEx.vue'),
        name: 'emTablePageEx',
        meta: {
          title: 'emTablePageEx列表'
        }
      },
      {
        path: 'emRowPageEx',
        component: () => import('./views/example/emRowPageEx.vue'),
        name: 'emRowPageEx',
        meta: {
          title: 'emRowPageEx列表'
        }
      },
      {
        path: 'emUploadEx',
        component: () => import('./views/example/emUploadEx.vue'),
        name: 'emUploadEx',
        meta: {
          title: 'emUploadEx文件上传'
        }
      },
      {
        path: 'emCascaderAreaEx',
        component: () => import('./views/example/emCascaderAreaEx.vue'),
        name: 'emCascaderAreaEx',
        meta: {
          title: 'emCascaderAreaEx省市区选择'
        }
      },
      {
        path: 'emCascaderEx',
        component: () => import('./views/example/emCascaderEx.vue'),
        name: 'emCascaderEx',
        meta: {
          title: 'emCascaderEx自定义级联'
        }
      },
      {
        path: 'emMapEx',
        component: () => import('./views/example/emMapEx.vue'),
        name: 'emMapEx',
        meta: {
          title: 'emMapEx地图组件'
        }
      },
      {
        path: 'emChartsEx',
        component: () => import('./views/example/emChartsEx.vue'),
        name: 'emChartsEx',
        meta: {
          title: 'emChartsEx图表组件'
        }
      },
      {
        path: 'emIconEx',
        component: () => import('./views/example/emIconEx.vue'),
        name: 'emIconEx',
        meta: {
          title: 'emIconEx图标组件'
        }
      },
      {
        path: 'emIconSelectEx',
        component: () => import('./views/example/emIconSelectEx.vue'),
        name: 'emIconSelectEx',
        meta: {
          title: 'emIconEx图标选择组件'
        }
      },
      {
        path: 'emTableSelectEx',
        component: () => import('./views/example/emTableSelectEx.vue'),
        name: 'emTableSelectEx',
        meta: {
          title: 'emTableSelectEx表格选择组件'
        }
      },
      {
        path: 'emSelectInputEx',
        component: () => import('./views/example/emSelectInputEx.vue'),
        name: 'emSelectInputEx',
        meta: {
          title: 'emSelectInputEx下拉选择输入组件'
        }
      }
    ]
  },
]

const bl = import.meta.env.BASE_URL
const router = createRouter({
  history: createWebHistory(bl),
  linkActiveClass: 'active',
  routes: constantRoutes
})

router.beforeEach((to, from, next) => {
  next()
})

export default router

