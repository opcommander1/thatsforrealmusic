<template>
  <div class="All-Lessons">
    <div class="container">
      <ul v-if="Lessons">
        <li v-for="(lesson, index) in Lessons" :key="index" class="list-group" v-bind:id="currentPageid">
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
                  <a v-bind:href="lesson.sheetMusic">Sheet Music</a>
                  <a v-bind:href="lesson.musicFiles">Music Files</a>
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
</script>

<style>

</style>


