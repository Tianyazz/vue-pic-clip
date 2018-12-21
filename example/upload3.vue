<template>
  <div class="upload">
    <header>上传图片</header>
    <div class="main">
      <div class="avatar">
        <vue-clip
          :img="option.img"
          :accept="option.accept"
          :autoClip="option.autoClip"
          :autoClipWidth="option.autoClipWidth"
          :autoClipHeight="option.autoClipHeight"
          :fixed="option.fixed"
          :fixedNumber="option.fixedNumber"
          :outputSize="option.outputSize"
          :theme="option.theme"
          @finish="finish"
        ></vue-clip>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'upload3',
  data () {
    return {
      option: {
        img: require('./img/2.jpg'),
        accept: 'image/png, image/jpeg, image/jpg, image/gif',
        outputSize: 0.7,
        autoClip: true,
        autoClipWidth: 300,
        autoClipHeight: 300,
        canMoveBox: true,
        fixed: true,
        fixedNumber: [1, 1],
        theme: 'circle'
      }
    }
  },
  methods: {
    finish (name, url) {
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
.upload header {
  height: 40px;
  color: #fff;
  font-size: 20px;
  line-height: 40px;
  text-align: center;
  background: #030303;
}
.upload .main {
  padding: 20px;
}
.avatar {
  width: 60px;
  height: 60px;
}
</style>
