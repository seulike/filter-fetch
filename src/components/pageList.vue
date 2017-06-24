<style>
.infinite-wrapper{
    margin-top: 4rem;
}
.infinite-wrapper li{
  display: block;
  line-height:5rem;
}
</style>
<template>
  <div class="infinite-wrapper">
    <p>list data</p>
    <div
     v-infinite-scroll="loadMore"
     infinite-scroll-disabled="busy"
     infinite-scroll-distance="20">
	<li v-for="item in listData"><span>{{ item }}</span></li>
	 </div>
   </div>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'
//use 'vue-infinite-scroll' to get list data
var infiniteScroll =  require('vue-infinite-scroll')
Vue.use(infiniteScroll)
export default {
  data() {
    return {
      busy: false
    }
  },
  computed: mapGetters({
    listData: 'listData'
  }),
  created() {
    //get list data  
    this.$store.dispatch('getList')
  },
  methods: {
    //when scroll to the buttom to get more data
    loadMore: function () {
      var self = this;
      self.busy = true;
      console.log('loading... ' + new Date());
      this.$store.dispatch('loadMore');
      self.busy = false;
    }
  }
}
</script>
