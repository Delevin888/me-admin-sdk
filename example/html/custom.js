var Layout = { template: '<v-layout/>' }

MeAdminSdk.registerApi('mission', function (request) {
  return {
    getMissionList(params) {
      return request({
        url: '/mission/mission/list',
        method: 'get',
        params: params,
        data: {}
      })
    },
    getMissionStatistics(params) {
      return request({
        url: '/mission/mission/statistics',
        method: 'get',
        params: params
      })
    }
  }
})
MeAdminSdk.registerCodes(null, function () {
  return {
    index_path: '/',
    login_path: '/login',
    default_date_format: 'yyyy-MM-dd'
  }
})

window.sdkOptions = {
  //绑定节点
  el: '#app',
  //window键值
  currentAppKey: '__currentApp',
  // vuex store
  store: {
    state: {},
    getters: {
      githubUrl: state => 'https://github.com/yimogit/me-admin-sdk'
    },
    mutations: {},
    actions: {
      uploadAction({ commit }, d) {
        console.log('开始上传', d)
        return new Promise((resolve, reject) => {
          var reader = new FileReader()
          reader.onload = function () {
            resolve({
              status: 1,
              data: this.result
            })
          }
          reader.readAsDataURL(d.file)
          // if (d.category) {
          //   d.fromData.append('category', d.category)
          // }
        })
        // return __currentApp.$ui.fetch.post(null, null, {
        //     url: 'common/upload',
        //     method: "POST",
        //     headers: {
        //         'Content-Type': 'multipart/form-data'
        //     },
        //     transformRequest: function (data) { return data },
        //     data: d.fromData
        // })
      }
    }
  },
  // 系统信息
  sysInfo: {
    authName: '管理员',
    sysTitle: 'XXX后台管理系统',
    sysLogo: null,
    sysTheme: 'red',
    sysNavTheme: {
      backgroundColor: '#545c64',
      textColor: '#fff',
      activeTextColor: '#ffd04b',
      uniqueOpened: false,
      collapseTransition: false
    },
    loginPath: '/login',
    logoutPath: '/logout',
    menus: [
      {
        menuId: 'a3361b3ceada4fc8bc1a65969fb652b9',
        menuName: '控制台',
        menuCode: 'home',
        children: null
      },
      {
        menuId: 'common_upload_test',
        menuName: '组件测试',
        menuCode: 'comps_upload_lrz',
        children: [
          {
            menuId: 'comps_upload_lrz',
            menuName: '上传组件',
            menuIcon: 'iconfont icon-dashboard',
            menuCode: 'comps_upload_lrz',
            children: null
          },
        ]
      },
      {
        menuId: '4ae619b2e52d4f2daa80674603a16b2a',
        menuName: '系统管理',
        menuIcon: 'iconfont icon-system',
        menuCode: null,
        children: [
          {
            menuId: '49ca8eb42fbe484ba75957d853fc57aa',
            menuName: '管理员列表',
            menuIcon: null,
            menuCode: 'system_admin_list',
            children: null
          },
          {
            menuId: '59ca8eb42fbe484ba75957d853fc57aa',
            menuName: '管理员创建',
            menuIcon: null,
            menuCode: 'system_admin_create',
            children: null
          },
          {
            menuId: '23ca8eb42fbe484ba75957d853fc57aa',
            menuName: '管理员测试',
            menuIcon: null,
            menuCode: 'system_admin_test',
            children: null
          }
        ]
      }
    ],
    modules: ['*']
  },
  router: {
    beforeEach(to, from, next) {
      console.log('new_beforeEach' + to.path)
      next()
    },
    routes: [
      {
        path: '/',
        component: Layout,
        children: [
          {
            path: '',
            name: 'home',
            component: {
              template:
                '<div title="Welcome Star">仓库地址：<el-button @click="$ui.pages.link($store.getters.githubUrl)">{{$store.getters.githubUrl}}</el-button><div>首页路径：{{$codes.index_path}}</div></div>'
            },
            meta: { skipauth: true, title: '首页' }
          },
          {
            name: 'welcome',
            path: 'welcome',
            component: {
              template: '<div>welcome</div>'
            },
            meta: {
              cache: true,
              title: '欢迎页',
              skipauth: true
            }
          }
        ]
      },
      {
        path: '/comps',
        component: Layout,
        children: [{
          path: 'comps/upload',
          name: 'comps_upload_lrz',
          component: {
            name: 'comps_upload_lrz',
            template: '<div>上传图片压缩jpg/png <v-upload-s :lrzInitOptions="{dev:true,width:300}" :compressTypes="[\'image/jpeg\', \'image/png\']"/></div>'
          },
          meta: {
            title: '上传组件',
          }
        }]
      },
      {
        path: '/system',
        component: Layout,
        children: [
          {
            path: 'admin/list',
            name: 'system_admin_list',
            component: {
              name: 'system_admin_list',
              template:
                '<div>管理员列表11<v-form-input/></div>',
              data() {
                return {
                  test: ''
                }
              },
              methods: {
                loadAction() {
                  console.log('load')
                  return new Promise(resolve => {
                    resolve({
                      status: 1,
                      msg: 'ok',
                      data: {
                        totalCount: 0,
                        totalPages: 0,
                        items: [],
                        hasNextPage: false
                      }
                    })
                  })
                }
              }
            },
            meta: {
              cache: true,
              title: '管理员列表'
            }
          },
          {
            path: 'admin/create',
            name: 'system_admin_create',
            component: {
              name: 'system_admin_create',
              template: '<div>管理员创建<v-form-input/><v-upload-s :lrzInitOptions="{dev:true,width:300}"/></div>'
            },
            meta: {
              cache: true,
              title: '管理员创建',
              pname: 'system_admin_list'
            }
          },
          {
            path: 'admin/test',
            name: 'system_admin_test',
            component: {
              name: 'system_admin_test',
              template:
                '<div>测试<v-form-input/></div>',
              data() {
                return {
                  test: ''
                }
              },
              methods: {
                loadAction() {
                  console.log('load2')
                  return new Promise(resolve => {
                    resolve({
                      status: 1,
                      msg: 'ok',
                      data: {
                        totalCount: 0,
                        totalPages: 0,
                        items: [],
                        hasNextPage: false
                      }
                    })
                  })
                }
              }
            },
            meta: {
              cache: true,
              title: '管理员列表'
            }
          }
        ]
      },
      {
        name: 'login',
        path: '/login',
        component: { template: '<div>登录页</div>' }
      },
      {
        name: 'logout',
        path: '/logout',
        component: { template: '<div>退出</div>' }
      },
      {
        name: '404',
        path: '/404',
        component: { template: '<div>404 NotFound</div>' },
        meta: {
          nolayout: true
        }
      },
      {
        path: '*',
        redirect: '/404',
        meta: {
          auth: false
        }
      }
    ]
  }
}
MeAdminSdk.register(sdkOptions)
