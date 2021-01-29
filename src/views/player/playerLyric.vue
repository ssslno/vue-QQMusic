<!--  -->
<template>
 <div class="lyric">
    <div class="lyriclist">
      <!-- :style="{ transform: transformNum}" 滚动歌词这里想不到了 -->
      <div v-if="lyricList.length" ref="scroll">
        <p :class="currentItem==index?'currentItem':''" v-for="(item,index) in lyricList" :key="index">{{item}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props:{
      lyric:{
           type:String,
           default(){
               return ''
           }
       } 
    },
   data () {
    return {
      lyricList: [],
      timerList: [],
      currentItem: 0,
    }
  },
  methods: {
    initLyric () {
      let str = '\n'
      let lyricList1 = this.lyric.split('[').slice(1)
      for (let i of lyricList1) {
        let tr = i.split(']')
        if (tr[1] == '') continue
        tr[0] = tr[0].split('.')[0];
        let timer1 = parseInt(tr[0].split(':')[0] * 60)
        let timer2 = parseInt(tr[0].split(':')[1])
        tr[0] = new Date(parseFloat(Number(timer1 + timer2)) * 1000)
        this.lyricList.push(tr[1])
        this.timerList.push(tr[0])
      }

    }
  },
  mounted () {
    this.initLyric()
  },
  computed: {
    currentTime () {
      return this.$store.state.currentTime
    },
  },
  watch: {
    lyric (val) {
      this.lyricList = []
      this.timerList = []
      this.initLyric()
    },
    currentTime (val) {
      this.timerList.forEach((value, index) => {
        //  后一项大于当前时间并且当前项小于当前时间 
        if (this.timerList[index + 1] >= val && val >= value) {
          this.currentItem = index
           this.$refs.scroll.style.transform = `translateY(${this.currentItem*(-30)}px)`

        }
      });
    }
  }
}

</script>

<style lang="scss" scoped>

.lyriclist {
  position: absolute;
  overflow: auto;
  height: 300px;
  width: 300px;
  left:500px;
  top:150px
  }
::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
 .lyriclist div{
  transition: 0.5s all;
  transform: translateY(0px);
  }
p {
  height: 30px;
  line-height: 30px;
  color: #ccc;
  font-size: 14px;
  width: 200px;
  text-align: center;
}    
.currentItem {
  font-size: 16px;
  font-weight: 600;
  color: #66c27c;
}

</style>
