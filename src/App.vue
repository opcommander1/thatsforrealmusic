<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <Navbar />
    <Home />
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Home from '@/components/layout/Home'

export default {
  name: 'App',
  components: {
    Navbar,
    Home
  }
}

</script>


<style>

</style>
