<template>
  <div class="About">
    <div class="container">
      <div class="row">
        <div class="col s12 m6 offset-m3">
          <div class="card small">
            <div class="card-image">
              <img src="../../assets/Aboutimage.jpg" alt="Me Pic">
              <span class="card-title">ABOUT</span>
            </div>
              <div class="card-content">
                <p>Hi there, my name is Shereal McNeal.  I have many years of experience playing the Keyboard/Piano.  I am very passionate about music and the theory behind it. This site will teach on how to play particular songs, the fundemental/theory about musicianship and the basic 101 on scales.  But that's not all, this site will include Beats, which you as a member can download files to customize beats into your DAW(Digital Analog Workstation to your liking.  Also the lessons will have downloadable files as well.  So enjoy, and come with me on this exciting ride!  Thank You for Joining!</p>
              </div>
              <div class="card-action" id="email-link">
                <p>Email:</p>
                <a href="mailto:thatsforrealmusic@forrealcodes.com">That's ForReal Music</a>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data(){
    return {

    }
  }
}
</script>

<style>
.About {
  background: rgb(157,216,147); /* Old browsers */
  background: -moz-radial-gradient(center, ellipse cover, rgba(157,216,147,1) 8%, rgba(206,147,216,1) 13%, rgba(157,216,147,1) 22%, rgba(206,147,216,1) 43%, rgba(206,147,216,1) 43%, rgba(157,216,147,1) 64%); /* FF3.6-15 */
  background: -webkit-radial-gradient(center, ellipse cover, rgba(157,216,147,1) 8%,rgba(206,147,216,1) 13%,rgba(157,216,147,1) 22%,rgba(206,147,216,1) 43%,rgba(206,147,216,1) 43%,rgba(157,216,147,1) 64%); /* Chrome10-25,Safari5.1-6 */
  background: radial-gradient(ellipse at center, rgba(157,216,147,1) 8%,rgba(206,147,216,1) 13%,rgba(157,216,147,1) 22%,rgba(206,147,216,1) 43%,rgba(206,147,216,1) 43%,rgba(157,216,147,1) 64%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#9dd893', endColorstr='#9dd893',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  height: 100%;
}

.About .card {
  height: 100%;
}

.About .card .card-content {
  height: 400px;
}

.About .card .card-content p{
  font-size: 1.0em;
}

#email-link a {
  color: #ce93d8;
  transition: color .3s ease-in-out;
}

#email-link a:hover {
  color: #9dd893;
}
</style>


