<template>
  <div class="Login">
  <div class="container">
    <div class="title">
      <h2 class="center">LOGIN</h2>
    </div>
    <div class="row">
      <div class="col m8 s12 offset-m2">
        <div class="card-panel grey lighten-4 z-depth-3">
          <form @submit.prevent="login">
            <div class="row">
              <div class="input-field col m6 s12">
                <input type="text" v-model="username" autofocus>
                <label for="username">Enter username:</label>
              </div>
              <div class="input-field col m6 s12">
                <input type="password" v-model="password" autocomplete="new-password">
                <label for="password">Enter password:</label>
              </div>
            </div>
            <div class="row">
              <div class="col m12 s12 center">
                <button class="purple lighten-3 btn-large">SUBMIT</button>
              </div>
            </div>
          </form>
           <div class="row">
              <div class="col m12 s12 center" id="password-link">
                <ul>
                  <li><router-link to="/PasswordReset">Password Reset</router-link></li>
                </ul>
                <div v-html="feedback" class="red-text">{{ feedback }}</div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import SignupService from '@/services/SignupService'
import store from '@/store/store'
export default {
name: 'Login',
data(){
  return{
      username: null,
      password: "",
      feedback: null, 
      logincounter: 0
    }
  },

  //User unable to type login in the url if user is already
  //login.  Therefore restricts user from the login page.
  //Method will fire before route is shown on page.
  beforeRouteEnter (to, from, next){
    next(vm => {
      if(store.state.user !== "Guest"){
        next('/')
      } else {
        next('/login')
      }
    })
  },

  methods: {
   async login(){
     try {
       //Send user data to the server and check login info in the backend
     const response = await SignupService.login({
        username: this.username,
        password: this.password
      })
      //If login correct takes user to home page
      //Set the token to the global state object
      //Set the user to the global state object
      // Saves CurrentUser info (Token and Username to Localstorage) to keep 
      // user login
      this.$router.push({ name: 'Home'})
      // console.log(response)
      this.$store.dispatch('setToken', response.data.token)
      this.$store.dispatch('setUser', response.data.user)
      localStorage.setItem('currentUser', JSON.stringify({token: response.data.token, user: response.data.user.username}))
     } catch (error) {
       //Catch error from user and display on interface
       this.feedback = error.response.data.err
     }
    // console.log(this.feedback)
    //remove any previous counter from localstorage when logging in
    //Set new logincounter to 0 and add logincounter by 1, helps to keep
    //track of user even if the page refreshes or closes
      // localStorage.removeItem('counter')
      let logincounter = 0
      logincounter++
      localStorage.setItem('logincounter', logincounter)
      // console.log(logincounter)
    }
  },  
}
</script>

<style>
.Login {
 background-color: #9dd893;
 margin-top: -34px;
 height: 100%;
}

.Login .title h2 {
  padding-top: 15px;
}

#password-link a {
  color: #ce93d8;
  transition: color .3s ease-in-out;
}

#password-link a:hover {
  color: #9dd893;
}
</style>

