<template>
<div class=" login wrap container-fluid d-flex align-items-center justify-content-center">
    <div class="loginDisplay ">
        <h1>{{this.title}}</h1>
        <p>{{this.message}}</p>
    </div>
    <form @submit="logIn()" class="container" action="">
        <label  for="email" class="col-sm-12 ">E-mail</label>

        <input  
        required
        placeholder="me@example.com" 
        name="email" 
        id="email" 
        class="form-control col-sm-10 offset-sm-1" 
        type="type" 
        v-model="email"
        @blur="verifyEmail"
        @focus="resetErrors"
        >

        <p>{{emailError}}</p>
        <label for="password" class="col-sm-12 ">Password <i @click="showPassword" v-bind:class="[show ? show : active, errorClass]" class="fa"></i></label> 
         
        <input 
        required
        placeholder="qwerty123%" 
        name="password" 
        id="password" 
        class="form-control col-sm-10 offset-sm-1" 
        :type="type" 
        v-model="password"
        @blur="verifyPassword"
        >

        <p>{{passwordError}}</p>
    
        <button class="logInButton">Log in</button>
    
    </form>
</div>
</template>

<script>
export default {
  name: 'login',
  props: {
    
  },
  computed:{
      
  },
  methods:{
      showPassword(){
              if(this.show === false){
                this.show = true;
                this.type = "text"

              }else{
                this.show = false;
                this.type = "password"

              }

      },
      verifyEmail(){
            var regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            var result =  regEx.test(String(this.email).toLowerCase());
            result ?  this.emailError =  "" : this.emailError ="Please enter a valid E-mail";


      },
      verifyPassword(){
            this.password === "" ?  this.passwordError =  "Please enter your password" : this.passwordError ="";


      },
      resetErrors(){
          this.passwordError = "";
          this.emailError = "";
      },
      formPreventDefault(e){
          e.preventDefault();

      },
      logIn(){
          if(this.email == this.requiredMail && this.password == this.requiredPassword){          
          this.$router.push({ path: this.userUrl, params: { userID: 'veljko' } })
          }else{
              this.emailError = "Wrong E-mail and/or password"
          }


          
      }
  },
  data(){
      return{
          type: "password",
          show: false,
          active: "fa-eye-slash",
          errorClass: "fa-eye",
          title: "Log In",
          message: "By logging in you agree to the ridiculously long terms that you didnt mother to read.",
          email: "",
          password: "",
          emailError: "",
          passwordError: "",
          userUrl : "veljko",
          requiredMail:"veljko@gmail.com",
          requiredPassword: "jekul"
          


          
          }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang='scss'>
.loginDisplay{
    padding: 30px;
    h1{
        font-size: 30px;
        font-weight: bold;
        text-align: left;
    }
    p{
        text-align: left;
        font-size: 14px;
    }
}
.wrap{
    width: 100vw;

        .logInButton{
            background: #fff;
            border: none;
            padding: 10px 70px 10px 70px;
            margin: 10px 0;

        }
    .loginDisplay{
        width: 280px;
        height: 150px;
        background: #fff;

    }
    form{
        
        margin: 0;
        padding: 20px;
        background: #32475C;
        border-radius: 5px;
        width: 250px;
        -webkit-box-shadow: 0px 0px 44px 3px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 0px 44px 3px rgba(0,0,0,0.75);
        box-shadow: 0px 0px 44px 3px rgba(0,0,0,0.75);
        label{
            color: rgba(255, 255, 255, 0.4);
            text-align: left;   
        }
            #email{
                margin-bottom: 10px;
            }
            input{
                display: inline-block;
                background: transparent;
                border: none;
                color: #fff;
                margin:0;
                padding: 0;
                }
                p{
                    color: red;
                }
    }

    input::placeholder{
        color: #fff;
    }
    .eye{
    height: 30px;
    width: 30px;
    z-index: 1;
    display: inline-block;
    background-repeat: no-repeat;
    background-size: contain;

    }



}


</style>
