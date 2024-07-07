<script setup>
import {onMounted, ref} from "vue";
const count = ref(0)
function increment(){
  count.value++
}
onMounted(() =>{
  console.log(`숫자 세기의 초기값은 ${count.value} 입니다.`)
})
</script>
<template>
  <button @click="increment">숫자 세기: {{count}}</button>
</template>