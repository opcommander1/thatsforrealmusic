<template>
  <div class="Password">
  <div class="container">
    <div class="title">
      <h2 class="center">Password Reset</h2>
    </div>
    <div class="row">
      <div class="col m8 s12 offset-m2">
        <div class="card-panel grey lighten-4 z-depth-3">
          <form @submit.prevent="updatepassword">
            <div class="row">
              <div class="input-field col m12 s12">
                <input type="text" v-model="username">
                <label for="username">Enter username:</label>
              </div>
              <div class="input-field col m12 s12">
                <input type="password" v-model="password" autocomplete="new-password">
                <label for="password">Enter new password:</label>
              </div>
            </div>
            <div class="row">
              <div class="col m12 s12 center">
                <button class="purple lighten-3 btn-large">SUBMIT</button>
                <div v-html="feedback" class="red-text">{{ feedback }}</div>
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
import SignupService from '@/services/SignupService'
export default {
  name: 'Password',
  data() {
    return {
      username: null,
      password: "",
      feedback: null
    }
  },
  methods: {
   async updatepassword(){
     //Update user data to the server database
     try {
     const response = await SignupService.updatepassword({
        username: this.username,
        password: this.password,
        feedback: this.feedback
      })
      //send member to Login
      this.$router.push({ name: 'Login' })
     } catch (error) {
      //send error message to user inteface
       this.feedback = error.response.data.err
       console.log(this.username + " " + this.password)
     }
    console.log(this.feedback)
    }
  },
}
</script>

<style>

</style>


