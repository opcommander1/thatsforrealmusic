<template>
  <div class="navbar">
    <nav class="purple lighten-3">
      <div class="container">
        <div class="nav-wrapper">
          <img src="../assets/forrealmusiclogo.png" alt="That's For Real Music">
          <a href="#" data-target="mobile-resp" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <ul id="nav-desktop" class="right hide-on-med-and-down">
            <li><router-link to="/About">About</router-link></li>
            <li @click="reload"><router-link to="/">Home</router-link></li>
            <li><router-link to="/Alllessons/">All Lessons</router-link></li>
            <li><a class="dropdown-trigger" href="#!" data-target="dropdown-lessons-desktop">Lessons<i class="material-icons right">arrow_drop_down</i></a></li>
            <!-- Reload the page in order for Royal Player to Appear -->
            <li @click="reload"><router-link to="/Beats">Beats</router-link></li>
            <!-- show navbar menu items if state variable exist -->
            <li v-if="!$store.state.isUserLoggedIn"><router-link to="/Login">Login</router-link></li>
            <li v-if="!$store.state.isUserLoggedIn"><router-link to="/Signup">Sign Up</router-link></li>
            <li v-if="$store.state.isUserLoggedIn" @click="logout"><a href="#">Logout</a></li>
            <li v-if="$store.state.user === 'Guest'" class="black-text">{{ $store.state.user }}</li>
            <li v-else-if="$store.state.user.username" class="black-text">{{ $store.state.user.username }}</li>
            <li v-else-if="(localusername)" class="black-text">{{ localusername }}</li>
          </ul>
          
           <!-- Mobile Responsiveness -->
          <ul id="mobile-resp" class="sidenav">
            <li class="sidenav-close"><router-link to="/About">About</router-link></li>
            <li class="sidenav-close" @click="reload"><router-link to="/">Home</router-link></li>
            <li class="sidenav-close"><router-link to="/Alllessons/">All Lessons</router-link></li>
            <li class="sidenav-close"><a class="dropdown-trigger" href="#!" data-target="dropdown-lessons-mobile">Lessons<i class="material-icons right">arrow_drop_down</i></a></li>
            <!-- Reload the page in order for Royal Player to Appear -->
            <li @click="reload"><router-link to="/Beats">Beats</router-link></li>
            <!-- show navbar menu items if state variable exist -->
            <li v-if="!$store.state.isUserLoggedIn" class="sidenav-close"><router-link to="/Login">Login</router-link></li>
            <li v-if="!$store.state.isUserLoggedIn"><router-link to="/Signup" class="sidenav-close">Sign Up</router-link></li>
            <li v-if="$store.state.isUserLoggedIn" @click="logout"><a href="#">Logout</a></li>
          </ul>

          <!--Show username on navbar instead of collaspable tab -->
          <ul id="nav-username" class="right hide-on-large-only">
            <li v-if="$store.state.user === 'Guest'" class="black-text">{{ $store.state.user }}</li>
            <li v-else-if="$store.state.user.username" class="black-text">{{ $store.state.user.username }}</li>
            <li v-else-if="(localusername)" class="black-text">{{ localusername }}</li>
          </ul>
        </div>
      </div>
    </nav>
    <ul id="dropdown-lessons-desktop" class="dropdown-content">
      <li><a href="#">By Keys</a></li>
      <!-- Route lessons by keys -->
      <li class="divider"></li>
      <!-- <li><a href="#">C Major</a></li> -->
      <li><router-link to="/Bykey/DFlat">D Flat Major</router-link></li>
      <li><router-link to="/Bykey/EFlat">E Flat Major</router-link></li>
      <!-- <li><a href="#">E Major</a></li> -->
      <li><router-link to="/Bykey/F">F Major</router-link></li>
      <li><router-link to="/Bykey/GFlat">G Flat Major</router-link></li>
      <!-- <li><a href="#">F Sharp Major</a></li>
      <li><a href="#">G Major</a></li>
      <li><a href="#">A Flat Major</a></li>
      <li><a href="#">A Major</a></li>
      <li><a href="#">B Flat Major</a></li>
      <li><a href="#">B Major</a></li> -->
    </ul>
    <ul id="dropdown-lessons-mobile" class="dropdown-content">
      <li><a href="#">By Keys</a></li>
      <!-- Route lessons by keys -->
      <li class="divider"></li>
      <!-- <li><a href="#">C Major</a></li> -->
      <li><router-link to="/Bykey/DFlat">D Flat Major</router-link></li>
      <li><router-link to="/Bykey/EFlat">E Flat Major</router-link></li>
      <!-- <li><a href="#">E Major</a></li> -->
      <li><router-link to="/Bykey/F">F Major</router-link></li>
      <li><router-link to="/Bykey/GFlat">G Flat Major</router-link></li>
      <!-- <li><a href="#">F Sharp Major</a></li>
      <li><a href="#">G Major</a></li>
      <li><a href="#">A Flat Major</a></li>
      <li><a href="#">A Major</a></li>
      <li><a href="#">B Flat Major</a></li>
      <li><a href="#">B Major</a></li> -->
    </ul>
  </div>
</template>

<script>
import AppVue from '../App.vue';
export default {
  name: 'Navbar',
  props: ['localusername'],
  data(){
    return {
      
    }
  },
  methods: {
    reload() {
      //reload the Beats page to show the Royal Player
      window.location.reload(true)
    },
    logout() {
      //Log out user and remove global state and remove local storage
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', "Guest")
      this.$router.push({ name: 'Login' })
      localStorage.removeItem('currentUser')
      localStorage.setItem('logincounter', 0)
    },
  },
}

$(document).ready(function(){
  $('.dropdown-trigger').dropdown({
    hover: true
  });
  $('.sidenav').sidenav();
});

// $(document).ready(function(){
//   $('.sidenav').sidenav();
// });
</script>

<style>

body {
  font-family: 'Roboto Slab', serif;
}

nav {
  height: 100px;
}

nav .nav-wrapper img {
  padding-top: 5px;
  width: 180px;
  height: 90px;
}

nav ul a {
  font-weight: 300;
  color: #000000;
}

.container {
  width: 80%;
}

#nav-desktop li a{
  margin-right: -4px;
}

.dropdown-content li a {
  font-size: 1.0em;
  font-weight: 300;
  color: #c51162;
}

#mobile-resp li a{
  font-weight: 300;
}

</style>


