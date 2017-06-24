<template>
<div id="app">
<choose-items></choose-items>
<page-list></page-list>
</div>
</template>

<script>
import Vue from 'vue'
import chooseItems from './chooseItems.vue'
import pageList from './pageList.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: { chooseItems, pageList }
}
</script>
