<template>
  <div id="app">
    <Navbar />
    <router-view v-bind:Lessons="Lessons" />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
// import Royalplayer from '@/components/Royalplayer'

export default {
  name: 'App',
  components: {
    Navbar
  },
  data(){
    return {
      Lessons: [{
        index: 1,
        pageId: 1,
        src: "https://www.youtube.com/embed/TP6NjKTLuyo",
        title: "How to play - We lift our hands in the Sanctuary",
        desc: "This a fun and energetic song.  This song will give you practice in many keys.  It starts out in the D Flat key.",
        key: "/Bykey/DFlat",
        sheetMusic: "",
        musicFiles: ""
      },
      {
        index: 2,
        pageId: 1,
        src: "https://www.youtube.com/embed/DVaIg55CCB4",
        title: "How to play - Anointing",
        desc: "This is dynamic song with huge two hand voicing chords. This song is in the key of D Flat",
        key: "/Bykey/DFlat",
        sheetMusic: "",
        musicFiles: "" 
      },
      {
        index: 3,
        pageId: 1,
        src: "https://www.youtube.com/embed/TP6NjKTLuyo",
        title: "How to play - We Lift Our Hands in the Sanctuary",
        desc: "A lively upbeat song that will teach you to play in many keys.  This song starts in key of D Flat",
        key: "/Bykey/DFlat",
        sheetMusic: "",
        musicFiles: "" 
      },
      {
        index: 4,
        pageId: 1,
        src: "https://www.youtube.com/embed/AppDg5PavHk",
        title: "How to play - Bread of Heaven",
        desc: "Simple beautiful song in the key of E flat. Should be able to master the song within a week.",
        key: "/Bykey/EFlat",
        sheetMusic: "",
        musicFiles: "" 
      },
      {
        index: 5,
        pageId: 1,
        src: "https://www.youtube.com/embed/zOPH-1mOPZs",
        title: "How to play - Just want to praise you",
        desc: "Smooth jazzy feel song, that will teach you left hand bass.  This song starts in the key of G Flat",
        key: "/Bykey/GFlat",
        sheetMusic: "",
        musicFiles: "" 
      },
      {
        index: 6,
        pageId: null,
        src: "https://www.youtube.com/embed/_OXRtl9o3kQ",
        title: "How to play - Awesome God",
        desc: "Very worshipful song that has nice two hand voicing. This song is in the key of E Flat",
        key: "/Bykey/EFlat",
        sheetMusic: "",
        musicFiles: "" 
      },
      {
        index: 7,
        pageId: null,
        src: "https://www.youtube.com/embed/djMdRlqO_Dg",
        title: "How to play - Great is Your Mercy",
        desc: "One of the most popular song back then.  Once you get this song down, you will be able to add your own improvisation to the song.  The song is in the key of F.",
        key: "/Bykey/F",
        sheetMusic: "",
        musicFiles: "" 
      },
      ]
    }
  }
}

</script>


<style>

</style>
