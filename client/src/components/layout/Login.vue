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
                <input type="text" v-model="username">
                <label for="username">Enter username:</label>
              </div>
              <div class="input-field col m6 s12">
                <input type="text" v-model="password">
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
export default {
name: 'Login',
data(){
  return{
      username: null,
      password: null,
      feedback: null
    }
  },
  methods: {
   async login(){
     try {
     const response = await SignupService.login({
        username: this.username,
        password: this.password
      })
      this.$router.push({ name: 'Home' })
      console.log(response)
     } catch (error) {
       this.feedback = error.response.data.err
     }
    console.log(this.feedback)
      // if((this.fname) && (this.lname) && (this.email) && (this.username) && (this.password)) {
      // this.feedbackfname = null
      // this.feedbacklname = null
      // this.feedbackemail = null
      // this.feedbackuname = null
      // this.feedbackpassword = null
      // con.connect((err) => {
      //   if(err) throw err
      //   con.query('INSERT INTO Signup(first_name, last_name, email, username, password) VALUES (?, ?, ?, ?, ?)',
      //   [this.fname, this.lname, this.email, this.username, this.password]
      // ).then((err) => {
      //     if(err) throw err
      //       this.feedbackfname = null
      //       this.feedbacklname = null
      //       this.feedbackemail = null
      //       this.feedbackuname = null
      //       this.feedbackpassword = null
      //   }
      // )}
      // )
      // } if(!this.fname) {
      //   this.feedbackfname = "Please enter first name"
      // } if(!this.lname) {
      //   this.feedbacklname = "Please enter last name"
      // } if(!this.email) {
      //   this.feedbackemail = "Please enter email"
      // } if(!this.username) {
      //   this.feedbackuname = "Please enter username"
      // } if(!this.password) {
      //   this.feedbackpassword = "Please enter password, and password must be greater or equal to 8"
      // }
    }
  },  
}
</script>

<style>
.Login {
 background-color: #9dd893;
 margin-top: -34px;
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

