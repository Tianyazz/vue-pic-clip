## vue-img-clip
### 一个简单的移动端裁剪图片上传插件

[预览demo](https://skinsty.github.io/vue-img-clip/docs/#/).

```markdown

### 安装 Install
npm install vue-img-clip -D

// 组件内使用
import { VueClip }  from 'vue-img-clip'
components: {
  VueClip,
},

// main.js里面使用
import VueClip from 'vue-img-clip'

Vue.use(VueClip)

```
```markdown
<vue-clip
  :img=""
  :autoClip="option.autoClip"
  :outputSize="option.outputSize"
  @finish="finish"
>上传头像</vue-clip>

```

*****
### 配置参数

名称|功能|默认值|可选值
---|:--:|:--:|---:
img|默认图片地址|空|url地址||base64||blob
accept|上传图片类型|'image/png, image/jpeg, image/jpg, image/gif'|jpeg||png||gif等
autoClip|是否生成截图框|false|ture||false
autoClipWidth|截图框的宽度|容器宽度80%|0~容器宽度
autoClipHeight|截图框的高度|与宽度相等|0~容器宽度
canMove|图片能否拖动|true|true||fasle
canMoveBox|截图框能否拖动|ture|ture||false
dataUrlType|输出图片数据类型|blob|base64||blob
fixed|截图框是否开启固定宽高比|false|true||false(若设置的宽高比例与宽高比不匹配，则按照宽高比计算高度)
fixedNumber|截图框宽高比|[1,1]|[宽度，高度]
fixedBox|固定截图框大小|false|true||false
isOriginalImg|是否上传原图|false|true||false（启用裁剪时无效）
maxWidth|生成图片的最大宽度|600|0~max(启用裁剪或上传原图时最大宽度无效)
maxHeight|生成图片的最大高度|600|0~max(同上)
outputSize|输出图片压缩比|1|0.1-1
outputType|生成图片的格式|jpeg|jpeg||png||webp
theme|样式风格|rect|rect||circle
finish|完成操作事件||回调函数
****

主要研究[vue-cropper](https://github.com/xyxiao001/vue-cropper)的源码开发学习。一直使用这个插件做项目，最近比较闲，就撸了一个更简单的适合我自己用的插件。没有大量真机测试过，有什么问题，欢迎大家提Issues给我。

### Thanks to
- [JS中图片压缩的方法小结](https://www.jb51.net/article/128189.htm)
- [vue-cropper](https://github.com/xyxiao001/vue-cropper)
- [js获取图片EXIF, 解决图片旋转](https://www.cnblogs.com/suyuanli/p/8168407.html)
