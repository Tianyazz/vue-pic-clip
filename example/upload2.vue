<template>
  <div class="upload">
    <header>上传图片</header>
    <div class="main">
      <div class="avatar">
        <vue-clip
          :img="option.img"
          :dataUrlType="option.dataUrlType"
          :outputSize="option.outputSize"
          :isOriginalImg="option.isOriginalImg"
          :maxWidth="option.maxWidth"
          :maxHeight="option.maxHeight"
          :outputType="option.outputType"
          :theme="option.theme"
          @uploadFinish="uploadFinish"
        ></vue-clip>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'upload2',
  data () {
    return {
      option: {
        img: require('./img/1.jpg'),
        outputSize: 0.8,
        dataUrlType: 'base64', // 数据类型，默认blob
        isOriginalImg:  false, // 是否上传原图，上传原图maxWidth、maxHeight无效
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
      let formData = new FormData()
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