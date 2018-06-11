<template>
<div class="cards container-fluid">
<singleCard></singleCard>


</div>

</template>

<script>
import singleCard from './singleCard.vue'

export default {
    components:{
    singleCard
  },
  name: 'cards',
  props: {
    
    
  },
  computed:{

  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped lang='scss'>



</style>
