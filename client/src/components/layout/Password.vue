<template>
  <div class="Password">
  <div class="container">
    <div class="title">
      <h2 class="center">Password Reset</h2>
    </div>
    <div class="row">
      <div class="col m8 s12 offset-m2">
        <div class="card-panel grey lighten-4 z-depth-3">
          <form>
            <div class="row">
              <div class="input-field col m12 s12">
                <input type="text" name="username">
                <label for="username">Enter username:</label>
              </div>
              <div class="input-field col m12 s12">
                <input type="text" name="password">
                <label for="password">Enter new password:</label>
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
  name: 'Password',
  data() {
    return {

    }
  }
}
</script>

<style>

</style>


