# Color 色彩

为了避免视觉传达差异，使用一套特定的调色板来规定颜色，为你所搭建的产品提供一致的外观视觉感受。

### 主色

产品主色调、按钮、选中背景、选中

<div class="main-color color-block">
  Brand Color<br/>
  #2f60e2
</div>

### 辅助色

除了主色外的场景色，需要在不同的场景中使用（例如危险色表示危险的操作）。

<section>
  <div class="sub-color__success color-block">
    Success<br/>
    #00c998
  </div>
  <div class="sub-color__warning color-block">
    Warning<br/>
    #ffaa01
  </div>
  <div class="sub-color__danger color-block">
    Danger<br/>
    #e74c3c
  </div>
</section>

### 中性色

中性色用于文字、控件、背景和边框颜色。通过运用不同的中性色，来表现层次结构。

<section>
  <div class="neutral-color__main color-block">
    正文颜色<br/>
    #0a083b
  </div>
  <div class="neutral-color__sub color-block">
    二级文字<br/>
    #545454
  </div>
  <div class="neutral-color__tip color-block">
    提示信息文字<br/>
    #808080
  </div>
  <div class="neutral-color__border color-block font__black">
    边框分割线<br/>
    #dcdfe6
  </div>
  <div class="neutral-color__disable color-block font__black">
    禁用、不可点击<br/>
    #f8f8f8
  </div>
  <div class="neutral-color__background color-block font__black">
    背景色<br/>
    #f8f9f9
  </div>
</section>

<style>
.color-block {
  width:200px;
  height:100px;
  line-height: 24px;
  font-size: 14px;
  padding: 20px;
  box-sizing: border-box;
  border-radius:8px;
  color: #fff;
  margin-right: 20px;
  margin-bottom: 10px;
  display: inline-block;
}
.font__black {
  color: #545454;
}
.main-color {
  background: #2f60e2;
}
.sub-color__success {
  background: #00c998;
}
.sub-color__warning {
  background: #ffaa01;
}
.sub-color__danger {
  background: #e74c3c;
}
.neutral-color__main {
  background: #0a083b;
}
.neutral-color__sub {
  background: #545454;
}
.neutral-color__tip {
  background: #808080;
}
.neutral-color__border {
  background: #dcdfe6;
}
.neutral-color__disable {
  background: #f8f8f8;
}
.neutral-color__background {
  background: #f8f9f9;
}
</style>


