<template>
  <div class="All-Lessons">
    <div class="container">
      <ul v-if="Lessons">
        <li v-for="(lesson, index) in Lessons" :key="index" class="list-group" v-bind:id="currentPageid">
          <div v-show="lesson.pageId == currentPageid">
          <div class="row">
            <div class="col s12 m8 offset-m2">
              <div class="card">
                <div class="card-image">
                  <iframe id="alllessons-vid" v-bind:src="lesson.src" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="card-content">
                  <h6>{{ lesson.title }}</h6>
                  <p>{{ lesson.desc }}</p>
                </div>
                <div class="card-action" id="music-link">
                  <a v-bind:href="lesson.sheetMusic">Sheet Music</a>
                  <a v-bind:href="lesson.musicFiles">Music Files</a>
                </div>
              </div>
            </div>
          </div>
          </div>
        </li>
      </ul>
      <ul class="pagination">
        <li @click="chevron" id="chevron-left" class="disabled"><a href="#!">
        <i class="material-icons">chevron_left</i></a></li>
        <li @click="pageRange(1,5,1,1)" class="active" id="pageOne"><a href="#1">1</a></li>
        <li @click="pageRange(6,10,2,2)" class="waves-effect" id="pageTwo"><a href="#2">2</a></li>
        <li @click="chevron" id="chevron-right" class="waves-effect"><a href="#4">
        <i class="material-icons">chevron_right</i></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AllLessons',
  data(){
    return{
      currentPageid: 1,
      paginationActive: null,
      

      Lessons: [{
        index: 1,
        pageId: 1,
        src: "https://www.youtube.com/embed/TP6NjKTLuyo",
        title: "How to play - We lift our hands in the Sanctuary",
        desc: "This a fun and energetic song.  This song will give you practice in many keys.  It starts out in the D Flat key.",
        sheetMusic: "",
        musicFiles: ""
      },
      {
        index: 2,
        pageId: 1,
        src: "https://www.youtube.com/embed/DVaIg55CCB4",
        title: "How to play - Anointing",
        desc: "This is dynamic song with huge two hand voicing chords. This song is in the key of D Flat",
        sheetMusic: "",
        musicFiles: "" 
      },
      {
        index: 3,
        pageId: 1,
        src: "https://www.youtube.com/embed/TP6NjKTLuyo",
        title: "How to play - We Lift Our Hands in the Sanctuary",
        desc: "A lively upbeat song that will teach you to play in many keys.  This song starts in key of D Flat",
        sheetMusic: "",
        musicFiles: "" 
      },
      {
        index: 4,
        pageId: 1,
        src: "https://www.youtube.com/embed/AppDg5PavHk",
        title: "How to play - Bread of Heaven",
        desc: "Simple beautiful song in the key of E flat. Should be able to master the song within a week.",
        sheetMusic: "",
        musicFiles: "" 
      },
      {
        index: 5,
        pageId: 1,
        src: "https://www.youtube.com/embed/zOPH-1mOPZs",
        title: "How to play - Just want to praise you",
        desc: "Smooth jazzy feel song, that will teach you left hand bass.  This song starts in the key of G Flat",
        sheetMusic: "",
        musicFiles: "" 
      },
      {
        index: 6,
        pageId: null,
        src: "https://www.youtube.com/embed/_OXRtl9o3kQ",
        title: "How to play - Awesome God",
        desc: "Very worshipful song that has nice two hand voicing. This song is in the key of E Flat",
        sheetMusic: "",
        musicFiles: "" 
      }]
    }
  },
  methods: {
    pageRange(range1, range2, pId, cpId){
      for (let index = 0; index < this.Lessons.length; index++) {
          if (this.Lessons[index].index >= range1 && this.Lessons[index].index <= range2){
            this.Lessons[index].pageId = pId
          } 
          this.currentPageid = cpId
        }
        if(this.currentPageid == 2) {
          document.getElementById("pageTwo").classList.add('active')
          document.getElementById("pageOne").classList.remove('active')
          document.getElementById("chevron-left").classList.remove('disabled')
          document.getElementById("chevron-right").classList.add('disabled')
        } else if (this.currentPageid == 1) {
          document.getElementById("pageTwo").classList.remove('active')
          document.getElementById("pageOne").classList.add('active')
          document.getElementById("chevron-right").classList.remove('disabled')
          document.getElementById("chevron-left").classList.add('disabled')
        }
      },
    chevron(){
        if(this.currentPageid >= 1 && this.currentPageid < 2){
          this.currentPageid += this.currentPageid
          this.Lessons[5].pageId = this.currentPageid
          document.getElementById("pageTwo").classList.add('active')
          document.getElementById("pageOne").classList.remove('active')
          document.getElementById("chevron-left").classList.remove('disabled')
          document.getElementById("chevron-right").classList.add('disabled')
        } else if(this.currentPageid <= 2 && this.currentPageid > 1){
          this.currentPageid = this.currentPageid - 1
          this.Lessons[0].pageId = this.currentPageid
          this.Lessons[1].pageId = this.currentPageid
          this.Lessons[2].pageId = this.currentPageid
          this.Lessons[3].pageId = this.currentPageid
          this.Lessons[4].pageId = this.currentPageid
          this.Lessons[5].pageId = null
          document.getElementById("pageTwo").classList.remove('active')
          document.getElementById("pageOne").classList.add('active')
          document.getElementById("chevron-right").classList.remove('disabled')
          document.getElementById("chevron-left").classList.add('disabled')
        }
      }
    },
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


