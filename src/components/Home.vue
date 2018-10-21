<template>
   <div>
     <h2>Home</h2>
     <HomeContent></HomeContent>
   </div>
</template>

<script>
 import HomeContent from './homecontent/HomeContent.vue'
 export default {
   data(){
      return {  count:0 }
   },
   components: { HomeContent }
 }
</script>
