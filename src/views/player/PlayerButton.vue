<!--  -->
<template>
  <div id="button">
      <p class="logo">QQ音乐</p>
      <div class="button">
          <button>
            <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-fabulous"></use></svg>收藏
          </button>
          <button>
            <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-add-circle"></use></svg>添加到
          </button>
          <button>
            <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-direction-down"></use></svg>下载
          </button>
          <button>
            <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-ashbin"></use></svg>删除
          </button>
          <button>
            <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-filter"></use></svg><span>清空列表</span>
          </button>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}

</script>

<style scoped>
.icon {
  font-size: 6px;
  color:#ccc;
  margin-top: 2px;
  margin-right: 2px;

}
#button{
    position:absolute;
    color:#fff
}
#button .logo {
    font-size: 22px;
    font-weight: 700;
    color:#6e6c68;
    margin-left: 20px;
    margin-top: 20px;
}
.button {
    margin-top: -40px;
    margin-left: 120px;
}
.button button{
    width: 120px;
    height: 36px;
    text-align: center;
    border:1px solid #6e6c68;
    line-height: 36px;
    color:#fff;
    font-size: 14px;
    background-color:rgba(0,0,0,0);
    margin-right: 10px;
}
</style>
