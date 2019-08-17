<template>
  <div class="All-Lessons">
    <div class="container">
      <ul v-if="Lessons">
        <!-- Show if there is Lessons, input current page to the id and check to see if pageId equal currentPageid to show limit amount of lessons on a single page -->
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
                <!-- Check to see if user is login to display files and if there are any files associated with the lessons -->
                <div class="card-action" id="music-link">
                  <a v-if="$store.state.user !== 'Guest' && lesson.BackingTrack !== ''" v-bind:href="lesson.BackingTrack" download="">Backing Track </a>
                  <a v-if="$store.state.user !== 'Guest' && lesson.PianoMidi !== ''" v-bind:href="lesson.PianoMidi" download="">Piano Midi</a>
                </div>
              </div>
            </div>
          </div>
          </div>
        </li>
      </ul>
      <ul class="pagination">
        <!-- Concatenating currentPageid to link to get page -->
        <li @click="chevron" id="chevron-left" class="disabled"><a v-bind:href="'#'+currentPageid">
        <i class="material-icons">chevron_left</i></a></li>
        <!-- when page is click activate the method and pass param to show certain lessons on the page -->
        <li @click="pageRange(1,5,1,1)" class="active" id="pageOne"><a href="#1">1</a></li>
        <li @click="pageRange(6,10,2,2)" class="waves-effect" id="pageTwo"><a href="#2">2</a></li>
        <!-- Concatenating currentPageid to link to get page -->
        <li @click="chevron" id="chevron-right" class="waves-effect"><a v-bind:href="'#'+currentPageid">
        <i class="material-icons">chevron_right</i></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AllLessons',
  props: ['Lessons'],
  data(){
    return{
      currentPageid: 1,
      paginationActive: null,
    }
  },
  methods: {
    pageRange(range1, range2, pId, cpId){
      //Check how many lesson are in the array
      for (let index = 0; index < this.Lessons.length; index++) {
      //Check if the lesson index is in the ranges of the range param.  The Lesson pageId will be set from the pId param.  Then the currentPageid will be set from the cpId param
          if (this.Lessons[index].index >= range1 && this.Lessons[index].index <= range2){
            this.Lessons[index].pageId = pId
          } 
          this.currentPageid = cpId
        }
        //Page 2 link will be active, removing pageone active and make the left chevron active and disabling the right chevron
        if(this.currentPageid == 2) {
          document.getElementById("pageTwo").classList.add('active')
          document.getElementById("pageOne").classList.remove('active')
          document.getElementById("chevron-left").classList.remove('disabled')
          document.getElementById("chevron-right").classList.add('disabled')
          //Page 1 link will be active, removing pagetwo active and make the right chevron active and disabling the left chevron
        } else if (this.currentPageid == 1) {
          document.getElementById("pageTwo").classList.remove('active')
          document.getElementById("pageOne").classList.add('active')
          document.getElementById("chevron-right").classList.remove('disabled')
          document.getElementById("chevron-left").classList.add('disabled')
        }
      },
    chevron(){
       //When chevron is click it will check if currentpagid is greater of equal to 1 and if so add currentPageid by one. Then add certain lesson to pagetwo for view.  Then disable right chevron and remove classes
        if(this.currentPageid >= 1 && this.currentPageid < 2){
          this.currentPageid += this.currentPageid
          this.Lessons[5].pageId = this.currentPageid
          this.Lessons[6].pageId = this.currentPageid
          document.getElementById("pageTwo").classList.add('active')
          document.getElementById("pageOne").classList.remove('active')
          document.getElementById("chevron-left").classList.remove('disabled')
          document.getElementById("chevron-right").classList.add('disabled')
        //if currentpageif is less than equal to 2 but greater than 1, currentPageid is substracted by 1. Then will display pageone and add certain lessons.  Left chevron will be disable.
        } else if(this.currentPageid <= 2 && this.currentPageid > 1){
          this.currentPageid = this.currentPageid - 1
          this.Lessons[0].pageId = this.currentPageid
          this.Lessons[1].pageId = this.currentPageid
          this.Lessons[2].pageId = this.currentPageid
          this.Lessons[3].pageId = this.currentPageid
          this.Lessons[4].pageId = this.currentPageid
          this.Lessons[5].pageId = null
          this.Lessons[6].pageId = null
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

.All-Lessons .pagination li.active  {
  background-color:  #9dd893;
}

</style>


