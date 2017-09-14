<template lang="html">
  <main>h5的main标签是什么鬼，赶紧devtool看下属性</main>


  <h3>一.水平居中</h3>

  <h5>1.水平居中单个元素</h5>
  <div class="specified－width-ele text-align-center">
    <span class="inline-ele">
      我是行内元素，我用text-align居中
    </span>
    <div class="block-ele margin-0-auto">
      我是块级元素，我用magin居中
    </div>
  </div>

  <h5>2.水平居中多个block元素之inline-block版</h5>
  <div class="specified－width-ele text-align-center">
    <div class="block-ele display-inline-block">
      块级元素1
    </div>
    <div class="block-ele display-inline-block">
      块级元素2
    </div>
    <div class="block-ele display-inline-block">
      块级元素3
    </div>
    <div>
      父元素设置text-align:center,子元素display:inline-block,块之间的间隔可以用标签之间无空格去掉
    </div>
  </div>

  <h5>3.水平居中多个block元素之flexbox版</h5>
  <div class="specified－width-ele display-flex-13">
    <div class="block-ele">
      块级元素1
    </div>
    <div class="block-ele">
      块级元素2
    </div>
    <div class="block-ele">
      块级元素3
    </div>
  </div>
  <div class="discribe">
    此种方法将所有块级子元素全部居中，虽然display:inline-block的方式需要父子元素都加上css或者多余类，但是可以控制居中的子元素数量，比如一.2中演示图中的文字就是没有居中，详情见下面的演示
  </div>
  <div class="specified－width-ele display-flex-13">
    <div class="block-ele">
      块级元素1
    </div>
    <div class="block-ele">
      块级元素2
    </div>
    <div class="block-ele">
      块级元素3
    </div>
    <div>
      这段文字将和前面的三个盒子一起居中
    </div>
  </div>

  <h3>二.垂直居中</h3>
  <h4>(1)垂直居中inline元素</h4>
  <h5>1.垂直居中单行inline元素</h5>
  <div class="specified－width-ele">
    <span class="inline-ele line-height-2-1-1">
      我是单行内联元素，我用line-heighe垂直居中
    </span>
  </div>
  <div class="discribe">
  </div>

  <h5>2.垂直居中多行inline元素之table-cell</h5>
  <h6>我搞出来的完全不对啊，这是多行居中么？？？这是多行居中么？？？这是多行居中么？？？</h6>
  <div class="specified－width-ele table-2-1-2">
      <span class="inline-ele table-cell-2-1-2">
        我是单行内联元素1测试一下多行文本是不是像传说中的那样狂拽酷炫吊炸天地居中啊
      </span>
      <span class="inline-ele table-cell-2-1-2">
        我是单行内联元素2
      </span>
      <span class="inline-ele table-cell-2-1-2">
        我是单行内联元素2
      </span>
  </div>
  <div class="discribe">
  </div>

  <h5>3.垂直居中多行inline元素之flexbox</h5>
  <div class="specified－width-ele display-flex-2-1-3">
    <span class="inline-ele">
      我是单行内联元素1
    </span>
    <span class="inline-ele">
      我是单行内联元素2
    </span>
    <span class="inline-ele">
      我是单行内联元素3
    </span>
  </div>
  <div class="discribe">
    此方法需要外层元素有固定的高度
  </div>

  <h4>(2)垂直居中block元素</h4>
  <h5>1.绝对定位居中之calc版</h5>
  <div class="specified－width-ele position-relative">
    <div class="block-ele absolute-calc-vertical-align">
      我是块级元素，我用position:absolute和calc垂直居中
    </div>
  </div>
  <div class="discribe">
    显然，这种方法最大的问题是，元素需要一个固定的尺寸，而需要垂直居中元素的尺寸常常是需要由它的内容来决定。如果我们有办法使用百分比来控制元素尺寸，我们的问题就解决了。不幸的是，对于大多数CSS属性（包括margin）百分比的值是相对于其父元素的宽度来决定
  </div>

  <h5>2.绝对定位居中之translate版</h5>
  <div class="specified－width-ele position-relative">
    <div class="block-ele absolute-translate-vertical-align">
      我是块级元素，我用position:absolute和translate垂直居中
    </div>
  </div>
  <div class="discribe">
    和上面的方法对比，以及有图有真相，强迫症患者们是不是觉得爽了许多？
    弊端：
    （1）.绝对定位通常不是一个很好的选择，因为它对整体的布局影响相当的大。
    （2）.如果垂直居中元素的内容比视窗高度更高的话，它的顶部会被裁剪掉，如下图所示。但是这个问题可以解决，只不过需要使用一些Hack手段。
    （3）.在一些浏览器中，可能会导致元素出现略微的模糊，那是因为元素有可能被放置在半个像素位置上。我们可以通过transform-style:preserve-3d来解决，尽管这是一个Hack手段，不能保证它不会过时。
  </div>

  <h5>3.视窗单位居中</h5>
  <div class="specified－width-ele ">
    <div class="block-ele">
      vh，vw作为视窗的百分比单位，可用于视窗居中，本例不作演示
    </div>
  </div>
  <div class="discribe">
  </div>

  <h5>4.flexbox居中</h5>
  <div class="specified－width-ele display-flex">
    <div class="block-ele margin-auto">
      我是块级元素，我用父元素flexbox和自身margin垂直居中
    </div>
  </div>
  <div class="discribe">
    flexbox: "这也称得上挑战吗？"
  </div>
</template>

<style lang="css" scoped>
/*.border {
  border: 1px solid #e3e3e3
}*/
/*本页通用样式*/
.specified－width-ele {  /* 外层定宽块级父元素 */
  width: 800px;
  height: 100px;
  border: 1px solid #e3e3e3
}
.inline-ele {            /* 内部内联子元素 */
  border: 1px solid #e3e3e3
}
.block-ele {             /* 内部块级子元素 */
  width: 200px;
  border: 1px solid #e3e3e3
}
.position-relative {
  position: relative;
}
/* 一、1 */
.text-align-center {
  text-align: center;
}
.margin-0-auto {
  margin: 0 auto;
}
/* 一、2 */
.display-inline-block {
  display: inline-block;
}
/* 一、3 */
.display-flex-13 {
  display: flex;
  justify-content: center;
}
/* 二、（1）、1 */
.line-height-2-1-1 {
  line-height: 100px;
}
/* 二、（1）、2 */
.table-2-1-2 {
  height: 100px;
  width: 800px;
  display: table;
}
.table-cell-2-1-2 {
  display: table-cell;
  vertical-align: middle;
}
/* 二、（1）、3 */
.display-flex-2-1-3 {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
/* 二、（2）、1 */
.absolute-calc-vertical-align {
  height: 20px;          /* 此处加的高度是为了计算top,同时体现了此方法的弊端 */
  position: absolute;
  left: calc(50% - 100px);
  top: calc(50% - 10px);
}
/* 二、（2）、2 */
.absolute-translate-vertical-align {
  position: absolute;   /* 此处没加高度，和文字自适应，是此方法的优点 */
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
/* 二、（2）、3 */
/*.vh {
  margin: 50vh auto;
}*/
/* 二、（2）、4 */
.display-flex {
  display: flex;
}
.margin-auto {
  margin: auto;
}
</style>

<script>
</script>
