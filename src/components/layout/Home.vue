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
            <iframe id="current-vid" src="http://www.youtube.com/embed/AppDg5PavHk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
      <div class="col s12 m6">
        <div class="title-beat">
          <h2 class="purple-text lighten-3">INFO</h2>
        </div>
        <div class="card purple lighten-3">
          <div class="card-content featurebeat-info">
            <span class="card-title">Feature Beat</span>
            <p>Listed below is a downloadable link, which contains all of the subsequent files for the beat.  To see all beats click on the link below "See All Beats".  Remember you must signup for free to see the links for downloads. You can play the feature beat below in the music player before downloading.</p>
          </div>
          <div class="card-action" id="feature-link">
            <a href="#">Smooth Beat</a>
            <a href="#">See All Beats</a>
          </div>
        </div>
      </div>
    </div>
    <Royalplayer />
    <!-- <div class="row">
      <div class="col s12 m12">
        <ul id="playlist1" style="display:none;">
            <li data-path="content/mp3/02.mp3" data-thumbpath="content/thumbnails/small2.jpg" data-downloadable="no" data-duration="04:41">
            <p><span style="font-weight:bold;">MACKLEMORE & RYAN LEWIS vs MAJOR LAZER</span> -  can't hold us remix (ft swappi and 1st klase)</p>
          </li>
          <li data-path="content/mp3/03.mp3" data-thumbpath="content/thumbnails/small3.jpg" data-downloadable="no" data-duration="03:49">
              <p><span style="font-weight:bold;">Crush ft. Camden Cox</span> - Could This Be Real (Luminox Remix)</p>
          </li>
          <li data-path="content/mp3/04.mp3" data-thumbpath="content/thumbnails/small4.jpg"  data-duration="04:19">
              <p><span style="font-weight:bold;">DJ SLiiNK X DiRTY SOUTH JOE</span> - CERTiFiED TRAP TOUR OFFiCiAL MiX</p>
          </li>
        <li data-path="content/mp3/05.mp3" data-thumbpath="content/thumbnails/small5.jpg" data-downloadable="no" data-duration="03:54">
            <p><span style="font-weight:bold;">Knife Party</span> - LRAD (CRNKN FESTIE RMX)</p>
        </li>
      </ul>
      <div id="myDiv" class="col m12 s12">
         <ul id="playlists" style="display:none;">
          <li data-source="playlist1" data-thumbnail-path="content/thumbnails/large1.jpg">
          <p class="minimalDarkCategoriesTitle"><span class="bold">Title: </span>My playlist 1</p>
          <p class="minimalDarkCategoriesType"><span class="bold">Type: </span><span class="minimalDarkCategoriesTypeIn">HTML</span></p>
          <p class="minimalDarkCategoriesDescription"><span class="bold">Description: </span>This playlist is created using html elements.</p>
         </li>
        </ul>
      </div>
      </div>
    </div> -->
  </div>
</div>
</template>

<script>
import Royalplayer from '@/components/Royalplayer.vue'

export default {
  name: 'Home',
  components: {
    Royalplayer
  },
  data(){
    return {
    }
  },
  updated(){
    
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

.card .card-content.featurebeat-info p {
  font-size: 1.0em;
}

#feature-link a {
  color: white;
  transition: color .3s ease-in-out;
}

#feature-link a:hover {
  color: #9dd893;
}

#myDiv {
  padding-left: 0px;
  min-width: 100%;
}

</style>


