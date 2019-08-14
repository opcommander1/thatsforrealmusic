<template>
<div class="Signup">
  <div class="container">
    <div class="title">
      <h2 class="center">WELCOME</h2>
    </div>
    <div class="row">
      <div class="col m8 s12 offset-m2">
        <div class="card-panel grey lighten-4 z-depth-3">
          <form @submit.prevent="addMember" autocomplete="off">
            <div class="row">
              <div class="input-field col m6 s12">
                <input v-model.lazy="inputBoxChange" type="text" v-model="fname" autofocus>
                <label for="fname">First Name:</label>
                <p v-if="feedbackfname" class="red-text">{{ feedbackfname }}</p>
              </div>
              <div class="input-field col m6 s12">
                <input v-model.lazy="inputBoxChange" type="text" v-model="lname">
                <label for="lname">Last Name:</label>
                <p v-if="feedbacklname" class="red-text">{{ feedbacklname }}</p>
              </div>
            </div>
            <div class="row">
              <div class="input-field col m6 s12">
                <input v-model.lazy="inputBoxChange" type="text" v-model="email">
                <label for="email">Enter Email:</label>
                <p v-if="feedbackemail" class="red-text">{{ feedbackemail }}</p>
              </div>
              <div class="input-field col m6 s12">
                <input v-model.lazy="inputBoxChange" type="text" v-model="username">
                <label for="username">Enter username:</label>
                <p v-if="feedbackuname" class="red-text">{{ feedbackuname }}</p>
              </div>
            </div>
            <div class="row">
              <div class="input-field col m6 s12">
                <input v-model.lazy="inputBoxChange" type="password" v-model="password" autocomplete="new-password">
                <label for="password">Enter password:</label>
                <p v-if="feedbackpassword" class="green-text">{{ feedbackpassword }}</p>
              </div>
            </div>
            <div class="row">
              <div class="col m12 s12 center">
                <button class="purple lighten-3 btn-large">SUBMIT</button>
                <div v-html="feedback" class="red-text">{{ feedback }}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
  
</template>

<script>
// let con = require('../../../../server/modules/config.js')
import SignupService from '@/services/SignupService'



export default {
  name: 'Signup',
  data() {
    return {
      fname: null,
      lname: null,
      email: null,
      username: null,
      password: null,
      feedbackfname: null,
      feedbacklname: null,
      feedbackemail: null,
      feedbackuname: null,
      feedbackpassword: "*8 to 32 characters or numeric",
      feedback: null
    }
  },
  methods: {
   async addMember(){
     //Adds user data to the server database 
     try {
     const response = await SignupService.signup({
        first_name: this.fname,
        last_name: this.lname,
        email: this.email,
        username: this.username,
        password: this.password
      })
      //send member to Login
      this.$router.push({ name: 'Login' })
      //Set global state token and user to keep user logged in 
      this.$store.dispatch('setToken', response.data.token)
      this.$store.dispatch('setUser', response.data.user)
     } catch (error) {
       //send error message to user inteface
       this.feedback = error.response.data.err
     }
    console.log(this.feedback)
    }
  },

  computed: {
    inputBoxChange: {
      get: function(){ 
        return this.fname     
      },

      set: function () {
        //if input field aren't empty, the feedback will be clear and set
        //to null
        if((this.fname) && (this.feedbackfname != null)) {
         this.feedbackfname = null
        } else if ((this.lname) && (this.feedbacklname != null)) {
         this.feedbacklname = null
        } else if ((this.email) && (this.feedbackemail != null)) {
         this.feedbackemail = null
        } else if ((this.username) && (this.feedbackuname != null)) {
         this.feedbackuname = null
        } else if ((this.password) && (this.feedbackpassword != null)) {
         this.feedbackpassword = null
        }
    }
  } 
}
}
</script>

<style>

.Signup {
 background-color: #9dd893;
 margin-top: -34px;
 height: 100%;
}

.Signup .title h2 {
  padding-top: 15px;
}
</style>


