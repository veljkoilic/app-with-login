<template>
  <div id="app" class="light" :class="{dark:themeApplied}">
    <i @click="changeTheme" class="fas " :class="[{ 'fa-toggle-on': themeApplied }, 'fa-toggle-off']"></i>
    <router-view></router-view>
  </div>
</template>

<script>
import login from './components/login.vue'
import cards from './components/cards.vue'



export default {
  name: 'app',
  components: {
    login,
    cards
  },
  data(){
    return{
      themeApplied: false
    }
  },

    methods:{
    changeTheme(){
      if(this.themeApplied == false){
        this.themeApplied = true;
        agCookie.create("theme", true, 30)
        
      }else{
        this.themeApplied = false;
        agCookie.create("theme", false, 30)

      }
    }
  },
    mounted(){
    this.themeApplied = JSON.parse(agCookie.read("theme"));
  }
}
</script>

<style  lang='scss'>
.light {
  margin-top: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  widows: 100vw;
  height: 100vh;
  background: #DFE0E3;
  i{
      font-size: 50px;

  }
  a{
    
    background: #f1f1f1;
    padding: 10px;
    margin: 12px;
    border-radius: 5px;
    &:hover{
      background: darken($color: #f1f1f1, $amount: 10);
      text-decoration: none;
    }
  }
  .login{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
}
.dark{
  background: #000;
    .card{
      background: gray;
      h1{
        color: #000;
      }
      p{
        color:#000;
      }
      h6{
        color:#000;
      }

  }

}
</style>
