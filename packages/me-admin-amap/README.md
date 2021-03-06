# me-admin-amap

高德地图选择地址的弹窗封装，依赖于 Element-UI，如果有默认数据，需要先填充数据再初始化

`npm install --save me-admin-amap`

## 效果图

![demo](https://github.com/yimogit/me-admin-sdk/raw/master/packages/me-admin-amap/example/images/demo.jpg)

## 使用示例

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>me-admin-amap的使用</title>
    <!-- <script type="text/javascript" src="https://cdn.staticfile.org/vue/2.6.10/vue.js"></script> -->
    <script type="text/javascript" src="../../dist/libs/vue/index.js"></script>
    <link rel="stylesheet" href="../../dist/libs/element-ui/index.css" />
  </head>

  <body>
    <div id="app">
      <v-me-admin-amap
        key="a1"
        v-if="isLoadEnd"
        :lat="form.addressLatitude"
        :lng="form.addressLongitude"
        :address="form.address"
        :addressDetail="form.addressDetail"
        @select="selectAmap"
      ></v-me-admin-amap>
      <pre>
      {{form}}
    </pre
      >
      <v-me-admin-amap2
        key="a2"
        v-if="isLoadEnd"
        :lat="form.addressLatitude"
        :lng="form.addressLongitude"
        :address="form.address"
        :addressDetail="form.addressDetail"
        @select="selectAmap"
      />
    </div>
    <script
      type="text/javascript"
      src="../../dist/libs/element-ui/index.js"
    ></script>
    <script type="text/javascript" src="../../dist/me-admin-amap.js"></script>
    <script type="text/javascript">
      // Vue.use(window.ELEMENT)
      window.Vue.use(MeAdminAmap, {
        name: 'v-me-admin-amap',
        mapKey: 'da86b9bd9ed7cd346e0a028d004fbb76'
      })
      new Vue({
        name: 'app',
        el: '#app',
        components: {
          'v-me-admin-amap2': MeAdminAmap.instance
        },
        data: {
          isLoadEnd: false,
          form: {
            addressLatitude: 0,
            addressLongitude: 0,
            address: null,
            addressDetail: null
          }
        },
        mounted() {
          setTimeout(() => {
            this.isLoadEnd = true
          }, 1000)
        },
        methods: {
          selectAmap(e) {
            if (e == null) {
              alert('请选择地址')
              return
            }
            this.form.addressLatitude = e.lat
            this.form.addressLongitude = e.lng
            this.form.address = e.address
            this.form.addressDetail = e.addressDetail
          }
        }
      })
    </script>
  </body>
</html>
```
