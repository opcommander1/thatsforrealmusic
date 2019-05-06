<template>
  <div class="Login">
  <div class="container">
    <div class="title">
      <h2 class="center">LOGIN</h2>
    </div>
    <div class="row">
      <div class="col m8 s12 offset-m2">
        <div class="card-panel grey lighten-4 z-depth-3">
          <form>
            <div class="row">
              <div class="input-field col m6 s12">
                <input type="text" name="username">
                <label for="username">Enter username:</label>
              </div>
              <div class="input-field col m6 s12">
                <input type="text" name="password">
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
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
name: 'Login',
data(){
  return{

    }
  }  
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

