# vue-menu-cascader

> Vue 跑马灯组件，支持自定义内容



## Live Demo

[Live Demo](http://wuyungen.top "点击查看Live Demo")

## preview 效果预览

[![vue-marquee-bar](https://z3.ax1x.com/2021/05/08/gGseSO.gif)](https://imgtu.com/i/gGseSO)

## install 安装

```shell
npm i vue-marquee-bar --save
```


## use 使用

全局使用：在main.js中写入下面的代码

```javascript
import VueMarqueeBar from "vue-marquee-bar";
Vue.use(VueMarqueeBar);
```

文件中使用：

```javascript
<scrpit>
    import VueMarqueeBar from "vue-marquee-bar";

    export default{
        components:{VueMarqueeBar}
    }
</script>



接下来，你就可以在页面中使用vue-marquee-bar了

```html
<template>
    <vue-marquee-bar
        :content="emoji"
        :speed="1000"
        background="transparent"
        color="#000000"
      >
        <template v-slot:content="scope">
          <div style="display: flex; align-items: baseline">
            <div style="color: #03c08d">{{ scope.data }}</div>
          </div>
        </template>
      </vue-marquee-bar>
</template>
<script>
    export default {
        data () {
            return {
                emoji: [
                    "😀",
                    "😃",
                    "😄",
                    "😁",
                    "😆",
                    "😅",
                    "😂",
                    "🤣"
                ]
        }
    }
</script>
```

:::

### Cascader Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| content | 轮播内容 | Array | — | — |
| speed | 轮播速度 | Number | — | 1500 |
| hoverPause | 是否开启鼠标悬浮暂停轮播 | Boolean | true/false | true |
| background | 轮播条背景颜色，支持transparent | String | — | '#f8f9fa' |
| color | 轮播是文字时，字体颜色 | string | — | '#212529' |
| boxShadow | 轮播条阴影效果 | string | — | 'none' |

## 更新日志

**版本：1.0.0**

Contributor: [@sharpFD](<https://github.com/sharpFD>)

时间：2021年5月13日

内容：

- feature： 初始化提交

--------

​
