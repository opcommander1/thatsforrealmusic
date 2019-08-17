<template>
<div class="HOME">
  <div class="row">
      <img src="../../assets/forrealtitlelogo.png" alt="That's ForReal Music"   class="title col s12 m12">
    </div>
  <div class="container">
    <div class="row">
      <div class="col s12 m6">
        <div class="current-title">
          <h2 class="purple-text lighten-3">Current Lesson</h2>
        </div>
        <div class="card">
          <div class="card-image">
            <iframe id="current-vid" src="https://www.youtube.com/embed/JDoaMSssHuk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div class="card-content">
              <p>Latin feel song in the key of G. Nice chords and good rhythm. "Signup for free to download the backing track and piano midi track"</p>
            </div>
            <div class="card-action" id="music-files">
              <!-- Show only if customer is login -->
              <a v-if="$store.state.user !== 'Guest'" href="content/mp3/GloriousBackingTrack.mp3" download>BACKING TRACK</a>
              <a v-if="$store.state.user !== 'Guest'" href="content/mp3/GloriousPianoMidi.mid" download>PIANO MIDI TRACK</a>
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
              <p>Yes that's right, Get a free feature mp3 beat when you signup as a member with That's For Real Music.  Download and add your own lyrics on the beat. Once you signup, the link for the download will appear under the "Feature Beat" info section.</p>
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
            <p>Listed below is a downloadable link, which contains mp3 file for the Free Beat.  To see all beats click on the link below "See All Beats".  Remember you must signup for free to see the link for free beat downloads. You can play the free/feature beat below in the music player before downloading or leasing.</p>
          </div>
          <div class="card-action" id="feature-link">
            <!-- Show only if customer is login -->
            <a v-if="$store.state.user !== 'Guest'" href="content/mp3/Gobble.mp3" download>Free Beat</a>
            <!-- Reload the page in order for Royal Player to Appear -->
            <span @click="reload"><router-link to="/Beats">See All Beats</router-link></span>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col s12 m6">
          <div class="card purple lighten-3">
            <div class="card-content Pricing-info">
              <span class="card-title">Beat Pricing</span>
              <ul>
                <li><b>Leasing Beats</b> - Nonexclusive rights
                  <strong>Must give credit "Prod. by That's For Real Music"</strong> That's For Real Music maintains full ownership of the instrumental</li>
                <li><strong>MP3:</strong> $15</li>
                <li><strong>MP3 and 24-bit Wav file:</strong> $30</li><br>
                <li><strong>Exclusive Rights Beats</strong> - Unlimited rights, one owner, no previous leases, and removed from site when purchase.</li>
                <li><strong>MP3, 24-bit Wav file and Track Out (Instrumental Stems seperated out):</strong> Price vary</li>
              </ul>
            </div>
            <div class="card-action" id="feature-link">
              <!-- Reload the page in order for Royal Player to Appear -->
              <span @click="reload"><router-link to="/Beats">See All Beats</router-link></span>
            </div>
          </div>
        </div>
        <div class="col s12 m6">
          <div class="card green lighten-3">
            <div class="card-content Contract-info">
              <span class="card-title">Contract</span>
              <ul>
                <li>All leases and exclusive contract will be signed and attach when purchasing a beat. Click the contract button below and it will list the services for each contract.</li>
              </ul>
              
              <!-- MP3 Leasing Contract Modal -->
              <a style="height:100%" class="purple lighten-3 btn modal-trigger" href="#mp3" data-target="mp3">MP3 Leasing Contract</a><br><br>
              <div id="mp3" class="modal">
                <img src="../../assets/forrealtitlelogo.png" alt="That's ForReal Music">
                <div class="modal-content">
                  <ul>
                    <li><strong>MP3 Leasing</strong></li><br>
                    <li>Sell up to 2500 units</li>
                    <li>Unlimited - Free Downloads</li>
                    <li>Paid Performances - restricted</li>
                    <li>1 - Music Videos</li>
                    <li>Unlimited - Audio Streams</li>
                    <li>Unlimited - Video Streams</li>
                    <li>Broadcasting Rights</li>
                    <li>1 - Radio Stations</li>
                    <li>Paid Monetization - restricted</li>
                  </ul>
                </div>
                <div class="modal-footer">
                  <a href="#!" class="modal-close purple lighten-3 btn-flat">Close</a>
                </div>
              </div>

              <!-- MP3 and WAV Leasing Contract Modal -->
              <a style="height:100%" class="purple lighten-3 btn modal-trigger" href="#mp3andwav" data-target="mp3andwav">MP3 and WAV Leasing Contract</a><br><br>
              <div id="mp3andwav" class="modal">
                <img src="../../assets/forrealtitlelogo.png" alt="That's ForReal Music">
                <div class="modal-content">
                  <ul>
                    <li><strong>MP3 and WAV Leasing</strong></li><br>
                    <li>Sell up to 20000 units</li>
                    <li>Unlimited - Free Downloads</li>
                    <li>Unlimited - Paid Performances - </li>
                    <li>1 - Music Videos</li>
                    <li>Unlimited - Audio Streams</li>
                    <li>Unlimited - Video Streams</li>
                    <li>Broadcasting Rights</li>
                    <li>12 - Radio Stations</li>
                    <li>Monetization - up to 100,000 views(each) before renewing lease</li>
                  </ul>
                </div>
                <div class="modal-footer">
                  <a href="#!" class="modal-close purple lighten-3 btn-flat">Close</a>
                </div>
              </div>

              <!-- Exclusive Contract Modal -->
              <a style="height:100%" class="purple lighten-3 btn modal-trigger" href="#exclusive" data-target="exclusive"> Exclusive Contract</a>
              <div id="exclusive" class="modal">
                <img src="../../assets/forrealtitlelogo.png" alt="That's ForReal Music">
                <div class="modal-content">
                  <ul>
                    <li><strong>Exclusive MP3, WAV and Track Out</strong></li><br>
                    <li>Unlimited units</li>
                    <li>Unlimited - Free Downloads</li>
                    <li>Unlimited - Paid Performances - </li>
                    <li>Unlimited - Music Videos</li>
                    <li>Unlimited - Audio Streams</li>
                    <li>Unlimited - Video Streams</li>
                    <li>Broadcasting Rights</li>
                    <li>Unlimited - Radio Stations</li>
                    <li>Unlimited - Monetization</li>
                  </ul>
                </div>
                <div class="modal-footer">
                  <a href="#!" class="modal-close purple lighten-3 btn-flat">Close</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <Royalplayer />
    <div class="row">
      <div class="col s12 m6 offset-m3">
        <div class="title-donation">
          <h2 class="purple-text lighten-3" style="text-align:center;">DONATE</h2>
        </div>
        <div class="card Large">
          <div class="card-image">
            <img src="../../assets/fulllogo.png" alt="That's For Real Logo">
            <div class="card-content">
              <p>You can make donation to this site with any amount. Your donation will help with the site hosting expenses which I provide with free piano tutorials. You can donate by clicking on the link below.  <br><br>Thank You for your Donation!</p>
            </div>
            <div class="card-action">
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="KXJGRFVQ3TBPY" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
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
      freebeat: null
    }
  },
  methods: {
    reload() {
      //reload the Beats page to show the Royal Player
      window.location.reload(true)
    }
  }
}

$(document).ready(function(){
    $('.modal').modal();
  });

</script>

<style>

.row .title {
height: 400px;

padding-bottom: 10px;
padding-left: 0px;
padding-right: 0px;

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

#music-files a {
  color: #ce93d8;
  transition: color .3s ease-in-out;
}

#music-files a:hover {
  color: #9dd893;
}

#feature-link a {
  color: white;
  transition: color .3s ease-in-out;
}

#feature-link a:hover {
  color: #9dd893;
}

.card .card-content.Pricing-info li {
  font-size: 1.0em;
  font-weight: 300;
}

.card .card-content.Contract-info li {
  font-size: 1.0em;
  font-weight: 300;
}

.modal img {
  width: 100%;
}

.modal-content {
  text-align: center;

}

#myDiv {
  padding-left: 0px;
  min-width: 100%;
}

</style>


