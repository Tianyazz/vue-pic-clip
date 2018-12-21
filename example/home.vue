<template>
  <div class="vue-clip-example">
    <h3>vue-img-clip</h3>
    <h4>github: <a href="https://github.com/SkinsTY/vue-img-clip">https://github.com/SkinsTY/vue-img-clip</a></h4>
    <div class="content">
      <div class="fl">
        <iframe src="./#/upload" frameborder="0">
        </iframe>
      </div>
      <div class="fr">
        <div v-highlight>
          <pre>
            <code v-text="code0"></code>
          </pre>
          <pre>
            <code v-text="code1"></code>
          </pre>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="fl">
        <iframe src="./#/upload3" frameborder="0">
        </iframe>
      </div>
      <div class="fr">
        <div v-highlight>
          <pre>
            <code v-text="code4"></code>
          </pre>
          <pre>
            <code v-text="code5"></code>
          </pre>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="fl">
        <iframe src="./#/upload2" frameborder="0">
        </iframe>
      </div>
      <div class="fr">
        <div v-highlight>
          <pre>
            <code v-text="code2"></code>
          </pre>
          <pre>
            <code v-text="code3"></code>
          </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import VueClip from 
export default {
  name: 'app',
  data () {
    return {
      code0: '',
      code1: '',
      code2: '',
      code3: '',
      code4: '',
      code5: ''
    }
  },
  created () {
    this.code0 = `
      <vue-clip
        :accept="option.accept" // 可上传的图片类型
        :autoClip="option.autoClip"
        :autoClipWidth="option.autoClipWidth"
        :autoClipHeight="option.autoClipHeight"
        :fixed="option.fixed"
        :outputSize="option.outputSize"
        :theme="option.theme"
        @uploadFinish="uploadFinish"
      >上传头像</vue-clip>`
    this.code1 = `
      data () {
        return {
          option: {
            accept: 'image/png, image/jpeg, image/jpg, image/gif', // 可上传的图片类型
            outputSize: 0.7, // 压缩质量
            autoClip: true, // 是否开启截图框
            autoClipWidth: 300, // 截图框宽度
            autoClipHeight: 300, // 截图框高度
            canMoveBox: true, // 截图框是否可以移动
            fixed: false, // 截图框是否开启固定宽高比
            fixedNumber: [1, 1], // 宽高比 w/h
            theme: 'rect' // 样式风格，默认rect:方形，circle:圆形
          }
        }
      },
      methods: {
        uploadFinish (name, url) { // 完成上传图片，返回图片名称、数据
          console.log('data', url)
          let formData = new FormData()
          formData.append('files', url)
          formData.append('name', name)
        }
      }`
    this.code4 = `
      <vue-clip
        :img="option.img"
        :accept="option.accept"
        :autoClip="option.autoClip"
        :autoClipWidth="option.autoClipWidth"
        :autoClipHeight="option.autoClipHeight"
        :fixed="option.fixed"
        :outputSize="option.outputSize"
        :theme="option.theme"
        @uploadFinish="uploadFinish"
      >上传头像</vue-clip>`
    this.code5 = `
      data () {
        return {
          option: {
            img: require('./img/2.jpg'), // 默认图片
            accept: 'image/png, image/jpeg, image/jpg, image/gif', // 可上传的图片类型
            outputSize: 0.7, // 压缩质量
            autoClip: true, // 是否开启截图框
            autoClipWidth: 300, // 截图框宽度
            autoClipHeight: 300, // 截图框高度
            canMoveBox: true, // 截图框是否可以移动
            fixed: true, // 截图框是否开启固定宽高比
            fixedNumber: [1, 1], // 宽高比 w/h
            theme: 'rect' // 样式风格，默认rect:方形，circle:圆形
          }
        }
      },
      methods: {
        uploadFinish (name, url) { // 完成上传图片，返回图片名称、数据
          console.log('data', url)
          let formData = new FormData()
          formData.append('files', url)
          formData.append('name', name)
        }
      }`
    this.code2 = `
      <vue-clip
        :dataUrlType="option1.dataUrlType"
        :outputSize="option1.outputSize"
        :fixed="option1.fixed"
        :fixedNumber="option1.fixedNumber"
        :theme="option1.theme"
        @uploadFinish="uploadFinish"
      ></vue-clip>`
    this.code3 = `
      data () {
        return {
          option1: {
            img: require('./img/1.jpg'), // 默认图片
            accept: 'image/png, image/jpeg, image/jpg, image/gif', // 可上传的图片类型
            outputSize: 0.8,
            dataUrlType: 'base64', // 数据类型，默认blob
            isOriginalImg:  true, // 是否上传原图，上传原图maxWidth、maxHeight无效
            maxWidth: 600, // 生成图片的最大宽度
            maxHeight: 600, // 生成图片的最大高度
            outputType: 'jpeg', // 生成图片的格式，默认jpg(jpg需要传入jpeg)【jpeg、png、webp】
            theme: 'circle'
          }
        }
      },
      methods: {
        uploadFinish (name, url) {
          console.log('data', url)
        }
      }`
  }
}
</script>

<style lang="css">
/* 基础样式文件 */
html, body {
  font-family: 'PingFangSC', 'PingFang SC Bold', 'Microsoft Yahei', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.5;
  color: #141414;
  background: #fff;
}
html {
  min-height: 100%;
}
body, h1, h2, h3, h4, h5, h6, hr, p, a, span, em, i, b, section, article, sub, sup, strong
blockquote, dl, dt, dd, ul, ol, li, pre,
form, fieldset, legend, button, input, select, textarea, label,
th, td, img, div, header, footer, nav {
  margin: 0;
  padding: 0;
  border: 0;
  font-weight: normal;
  list-style: none;
  font-style: normal;
  font-size: 14px;
  text-decoration: none;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
}
.vue-clip-example {
  width: 1020px;
  margin: 0 auto;
}
.vue-clip-example h3 {
  margin: 30px 0;
  font-size: 36px;
  line-height: 80px;
  color: rgba(50, 135, 255, .7);
  font-weight: bold;
  text-align: center;
}
.vue-clip-example h4,
.vue-clip-example a {
  font-size: 22px;
  margin-bottom: 30px;
}
.vue-clip-example .content {
  overflow: hidden;
  border-bottom: 6px solid #f9f9f9;
  padding-bottom: 30px;
  margin-bottom: 30px;
}
.vue-clip-example .fl {
  position: relative;
  float: left;
  width: 420px;
  height: 700px;
  border: 1px solid #eee;
}
.vue-clip-example .fl header {
  height: 40px;
  color: #fff;
  font-size: 20px;
  line-height: 40px;
  text-align: center;
  background: #030303;
}
.vue-clip-example .fl .main {
  padding: 20px;
}
.vue-clip-example .fr {
  float: right;
  width: 560px;
  height: 700px;
  background: #282a36;
  overflow-y: scroll;
}
iframe {
  width: 100%;
  height: 100%;
}
.avatar {
  width: 60px;
  height: 60px;
}
</style>