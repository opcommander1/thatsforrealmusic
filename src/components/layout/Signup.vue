<template>
<div class="Signup">
  <div class="container">
    <div class="title">
      <h2 class="center">WELCOME</h2>
    </div>
    <div class="row">
      <div class="col m8 s12 offset-m2">
        <div class="card-panel grey lighten-4 z-depth-3">
          <form>
            <div class="row">
              <div class="input-field col m6 s12">
                <input type="text" name="fname">
                <label for="fname">First Name:</label>
              </div>
              <div class="input-field col m6 s12">
                <input type="text" name="lname">
                <label for="lname">Last Name:</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col m6 s12">
                <input type="text" name="email">
                <label for="email">Enter Email:</label>
              </div>
              <div class="input-field col m6 s12">
                <input type="text" name="username">
                <label for="username">Enter username:</label>
              </div>
            </div>
            <div class="row">
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
        </div>
      </div>
    </div>
  </div>
</div>
  
</template>

<script>
export default {
  name: 'Signup',
  data() {
    return {

    }
  }
}
</script>

<style>

.Signup {
 background-color: #9dd893;
 margin-top: -34px;
}

.Signup .title h2 {
  padding-top: 15px;
}
</style>


