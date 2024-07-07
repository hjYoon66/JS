<template>
  <div>
    <AppHeader
        v-bind:propsdata="str"
        v-on:renew="renewStr"></AppHeader>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
export default {
  data() {
    return {
      str: 'Header'
    }
  },
  components:{
    AppHeader,
  },
  methods:{
    renewStr:function(){
      this.str = 'hi';
    }
  }
}
</script>

<style>

</style>