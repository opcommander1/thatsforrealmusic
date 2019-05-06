<template>
  <div class="All-Lessons">
    <div class="container">
      <ul>
        <li>
          <div class="row">
            <div class="col s12 m8 offset-m2">
              <div class="card">
                <div class="card-image">
                  <iframe id="alllessons-vid" src="https://www.youtube.com/embed/TP6NjKTLuyo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="card-content">
                  <h6>How to play "We lift our hands in the Sanctuary"</h6>
                  <p>This a fun and energetic song.  This song will give you practice in many keys.  It starts out in the D Flat key.</p>
                </div>
                <div class="card-action" id="music-link">
                  <a href="">Sheet Music</a>
                  <a href="">Music Files</a>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AllLessons',
  data(){
    return{

    }
  }
}
</script>

<style>
.All-Lessons {
  margin-top: 20px;
}

#alllessons-vid {
  width: 100%;
  height: 50vh;
}

.All-Lessons .card-content h6 {
  font-weight: 400;
}

.All-Lessons .card-content p {
  font-size: 1.0em;
}

#music-link a {
  color: #ce93d8;
  transition: color .3s ease-in-out;
}

#music-link a:hover {
  color: #9dd893;
}

</style>


