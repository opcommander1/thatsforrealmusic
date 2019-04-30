<template>
<div class="HOME">
  <div class="container">
    <div class="row">
      <img src="../../assets/forrealtitleone.png" alt="That's ForReal Music"   class="title col s12 m12">
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
      <div class="col s12 m6">
        <div class="notegraphic">
          <img src="../../assets/notegraphic.png" alt="Notes Graphic">
          <div class="lesson-info">
            <div class="card horizontal">
              <div class="card-image">
                <img src="../../assets/trebleclef.jpg" alt="Treble Clef">
              </div>
              <div class="card-stacked">
                <div class="card-content">
                  <p>Upcoming Lesson</p>
                </div>
                <!-- <div class="card-action">

                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col s12 m6">
        <div class="title-beat">
          <h2 class="purple-text lighten-3">The Beats</h2>
        </div>
        <div class="card horizontal">
          <div class="card-image">
            <img src="../../assets/BeatsImage.jpg" alt="Beats For Free">
          </div>
          <div class="card-stacked">
            <div class="card-content beat-content">
              <p>Yes that's right, Beats for Free when you signup as a member with That's ForReal Music.  Download the beat to your own lyrics. Even change the beat to your own liking by importing the files to your DAW. Once you signup the links for the downloads will appear.</p>
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
height: 280px;
padding-top: 20px;
padding-bottom: 10px;

}

h2 {
  font-weight: 300;
}

.row .current-title {
  margin-top: -56px;
}

#current-vid {
  width: 100%;
  height: 200px;
}

 .notegraphic {
  position: relative;
  text-align: center;
  margin-top: 20%;
}

 .notegraphic img {
  max-width: 80%;
}
.lesson-info {
  position: absolute;
  left: 0;
  right: 0;
  top: 20%;
}

.card.horizontal .card-image {
  width: 30%; 
}

.card-content p {
  font-weight: 300;
  font-size: 1.5em
}

.card-content.beat-content p {
  font-size: 1.0em;
}

</style>


