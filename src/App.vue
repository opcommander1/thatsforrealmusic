<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Royalplayer from '@/components/Royalplayer'

export default {
  name: 'App',
  components: {
    Navbar,
    Royalplayer
  }
}

</script>


<style>

</style>
