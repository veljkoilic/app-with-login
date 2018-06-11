<template>
<div >
  <div  class="card col-sm-3" v-bind:key="car.model" v-for="car in cars">
    <img :src="car.img" alt="">
    <h1>{{car.brand}}</h1>
    <h6>{{car.model}}</h6>
    <p>{{car.description}}</p>

  </div>
</div>


</template>

<script>
export default {
  name: 'singleCard',
  data(){
    return{
      cars:[

      ]
    }
  },
    mounted(){
    this.axios.get('http://api.myjson.com/bins/ea6ca').then(response => this.cars = response.data);
  },
  
  methods:{


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped lang='scss'>
.card{
  display: inline-block;
  background: #32475C;
  border-radius: 8px;
  -webkit-box-shadow: 10px 10px 31px 3px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 10px 31px 3px rgba(0,0,0,0.75);
  box-shadow: 10px 10px 31px 3px rgba(0,0,0,0.75);
  margin:0  50px 0 50px;
  img{
    width: 300px;
    height: 200px;
    margin-top: 5px;
  }
  h1{
    color: #fff;
    padding: 10px;
  }
  p{
    color: #fff;
    padding: 10px;
  }
  h6{
    color: #fff;
  }
}


</style>
