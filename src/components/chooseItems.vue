<style>
.filter-info {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1rem 0rem;
  display: flex;
  background: #fff;
  border-bottom: 1px solid #ddd;
}

.filter-info li {
  flex: 1;
  display: block;
  border-right: 1px solid #666;
  text-align: center;
}

.filter-info li:last-of-type {
  border-right: none;
}

.filter-info li.active,
.sort-filter li.active {
  color: #42b983;
}

.star-filter li.active{
  color: #42b983;
  border-color:#42b983;
}
.sort-filter{
  padding: 0rem 1rem;
}

.m-mask {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0px;
  top:4rem;
  overflow: hidden;
  z-index: 100;
  background: rgba(0, 0, 0, 0.3);
}

.sort-filter,.star-filter,.sidebar {
  position: absolute;
  right: 0;
  left: 0;
  top:0;
  z-index: 101;
  opacity: 1;
  font-size: 1.4rem;
  background: #fff;
}
.sidebar {
  overflow: hidden;
  height: 20rem;
}


.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-enter{
  opacity:0;
  transform: translateY(-100%);
}
.sort-filter li {
  display: block;
  line-height: 3rem;
  border-bottom: 1px solid #ddd;
}

.star-items{
  display: flex;
  padding:1rem;
}

.star-items li{
  flex:1;
  border-radius:2px;
    display: inline-block;
    line-height: 2rem;
    text-align: center;
    background: #fff;
    border: 1px solid #ddd;
    margin-right: 1rem;
}
.star-footer span{
  display: inline-block;
  line-height: 3rem;
  text-align: center;
  width:50%;
}
.star-footer span:nth-of-type(1){
  color:#42b983;
  background:#fff;
}
.star-footer span:nth-of-type(2){
  color: #3D3D3D;
  background-color: #42b983;
}
</style>
<template>
  <div>
    <ul class="filter-info">
      <li v-for="(value, key) in filter" @click="contentPop(key)" :class="{active:filterActive(key)}">
        <span>{{filterName(key)['text']}}</span>
      </li>
    </ul>
    <div class="m-mask" v-show="sortShow || starShow || positionArrayShow" @click="maskHide($event)">
      <transition name="slide-fade">
        <div class="sort-filter" v-show="sortShow">
          <ul>
            <li v-for="item in filter.sort" class="filter-item" :class="{active:item.code == param.sortCode}" @click="sortClick(item.code)">
              <span>{{item.text}}</span>
            </li>
          </ul>
        </div>
      </transition>
  
      <transition name="slide-fade">
        <div class="star-filter" v-show="starShow">
          <ul class="star-items">
            <li v-for="item in filter.star" class="filter-item" :class="{active:starActive(item)}" @click="starClick(item)">
              <span>{{item.text}}</span>
            </li>
          </ul>
          <div class="star-footer">
            <span @click="starClear">清空</span><span @click="starConfirm">确定</span>
          </div>
        </div>
      </transition>
      <transition name="slide-fade">
        <div class="sidebar" v-show="positionArrayShow">
          <multi-level-select :data-source="filter.positionArray" @select="select" v-show="positionArrayShow"></multi-level-select>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import MultiLevelSelect from 'multi-level-select'
export default {
  data() {
    return {
      positionArrayShow: false,
      sortShow: false,
      starShow:false,
      starTmps:[]
    }
  },
  computed: {
    ...mapGetters({
    filter: 'allFilters',
    param:'param'
    })
  },
  created() {
    this.$store.dispatch('getFilters')
  },
  components: {
    MultiLevelSelect
  },
  methods: {
    maskHide(e) {
      //only event from m-mask will hide the mask
      if (e.target === document.querySelector('.m-mask')) {
        for (var index in this.filter) {
          var item = index + 'Show';
          this[item] = false;
        }
      }
      return false;
    },
    //compute the label name to diplay
    filterName(key){
      if(key =="sort") {
          for(var i =0; i< this.filter.sort.length;i++){
            var cur = this.filter.sort[i];
            if(cur.code == this.param.sortCode) 
            return {hasItems:true,text:cur.text}
          }
      }else if(key =="star"){
        //default is '星级',otherwise to display the items choosed
        if(!this.param.starItems.length) return {hasItems:false,text:'星级'};
        var text = this.param.starItems.reduce((item,cur)=>item+cur.text,'');
        return {hasItems:true,text:text};
      }else if(key =="positionArray"){
        //default is '位置',otherwise to display the item choosed
        if(!this.param.positionItem) return {hasItems:false,text:'位置'};
        return {hasItems:true,text:this.param.positionItem.name};
      }
    },
    //compute whether to show the filter content
    contentPop(key){
      for(var index in this.filter){
          var item = index+'Show';
          if(key === index){
            this[item] = !this[item];
          }else{
            this[item] = false;
          }
      }
    },
    //when choosed or have items to active the label
    filterActive(key){
        if(this[key+'Show']) return true;
        return this.filterName(key).hasItems;
    },
    //compute whether a star item is actived       
    starActive(item){
        if(item.code == 0 && !this.starTmps.length) return true;
        if(item.code == 0 && this.starTmps.length) return false;
        return this.starTmps.indexOf(item) >= 0;
    },
    //to reload data
    reload(){
      this.$store.dispatch('reload');
    },
    //when choose an position filter item,to reload data
    select(data) {
      this.$store.commit('SET_PARAM',{key : 'positionItem',value : data});
      this.positionArrayShow = false;
      document.querySelector('.infinite-wrapper').scrollTop = 0;
      this.reload();
    },
    //choose an item in the sort filter,it's exclusive selected
    sortClick(code) {
      this.$store.commit('SET_PARAM',{key : 'sortCode',value : code});
      this.sortShow = false;
      this.reload();
    },
    //choose an item in the star filter,it's multiple selected
    starClick(item){
      //unlimited choice
      if(item.code == 0) {
        this.starClear();
        return;
      }
      var index = this.starTmps.indexOf(item);
      if(index >= 0) {
        this.starTmps.splice(index, 1);
      }else{
        this.starTmps.push(item);
      }
    },
    //clear the choices in the star filter
    starClear(){
        this.starTmps.length = 0;
        this.starTmps = [];
    },
    //confirm the choices in the star filter
    starConfirm(){
      this.starShow = false;
      this.$store.commit('SET_PARAM',{key : 'starItems',value: JSON.parse(JSON.stringify(this.starTmps))});
      this.reload();
    }
  }

}
</script>
