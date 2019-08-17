<template>
  <div class="All-Lessons">
    <div class="container">
      <ul v-if="Lessons">
        <li v-for="(lesson, index) in Lessons" :key="index" class="list-group">
          <!-- Match lesson key and show lesson by key on each page -->
          <div v-show="lesson.key == $route.path">
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
                  <a v-if="$store.state.user !== 'Guest' && lesson.BackingTrack !== ''" v-bind:href="lesson.BackingTrack" download="">Backing Track </a>
                  <a v-if="$store.state.user !== 'Guest' && lesson.PianoMidi !== ''" v-bind:href="lesson.PianoMidi" download="">Piano Midi</a>
                </div>
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
  name: 'Bykey',
  props: ['Lessons'],
  data(){
    return {
      currentPageid: 1,
    }
  },
}
// v-bind:id="currentPageid
</script>

<style>

</style>


