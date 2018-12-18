<template>
  <div id="app">
    <div class="avatar">
      <vue-scropper
        :accept="accept"
        :autoClip="option.autoClip"
        :autoClipWidth="option.autoClipWidth"
        :autoClipHeight="option.autoClipHeight"
        :fixed="option.fixed"
        :outputSize="option.outputSize"
        :theme="option.theme"
        @uploadFinish="uploadFinish"
      >上传头像</vue-scropper>
    </div>
    <div class="avatar">
      <vue-scropper
        :dataUrlType="option1.dataUrlType"
        :outputSize="option1.outputSize"
        :fixed="option1.fixed"
        :fixedNumber="option1.fixedNumber"
        :theme="option1.theme"
        @uploadFinish="uploadFinish"
      ></vue-scropper>
    </div>
  </div>
</template>

<script>
// import VueScropper from 
export default {
  name: 'Scropper',
  data () {
    return {
      option: {
        outputSize: 0.7,
        autoClip: true,
        autoClipWidth: 300,
        autoClipHeight: 100,
        fixed: true,
        fixedNumber: [1, 2],
        theme: 'rect'
      },
      option1: {
        outputSize: 0.8,
        dataUrlType: 'base64',
        fixed: true,
        fixedNumber: [1, 2],
        theme: 'circle'
      },
      accept: 'image/png, image/jpeg, image/gif'
    }
  },
  methods: {
    uploadFinish (name, url) {
      console.log('data', url)
      let formData = new FormData()
      formData.append('files', url)
      formData.append('name', name)
    }
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
.avatar {
  width: 60px;
  height: 60px;
}
</style>