<template>
<div class="HOME">
  <div class="container">
    <div class="row">
      <img src="../../assets/forrealtitle.png" alt="That's ForReal Music"   class="title col m12">
    </div>
    <div class="row">
      <div class="col s12 m6">
        <div class="current-title">
          <h2 class="purple-text lighten-3">Current Lesson</h2>
        </div>
        <div class="card">
          <div class="card-image">
            <iframe id="current-vid" src="https://www.youtube.com/embed/AppDg5PavHk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div class="card-content">
              <p>Simple song in the key of E flat. Should be able to master the song within a week.</p>
            </div>
            <div class="card-action">

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
  name: 'Home',
  data(){
    return {

    }
  }
}
</script>

<style>
.row .title {

}

.current-title h2 {
  font-weight: 300;
}

.row .current-title {
  margin-top: -56px;
}

#current-vid {
  width: 100%;
  height: 200px;
}

.card-content p {
  font-weight: 300;
  font-size: 1.5em
}
</style>


