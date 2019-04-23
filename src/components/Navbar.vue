<template>
  <div class="navbar">
    <nav class="purple lighten-3">
      <div class="container">
        <div class="nav-wrapper">
          <a href="#" class="logo black-text">Logo</a> <!--change this to router-->
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="#">About</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">All Lessons</a></li>
            <li><a class="dropdown-trigger" href="#!" data-target="dropdown-lessons">Lessons<i class="material-icons right">arrow_drop_down</i></a></li>
            <li><a href="#">Beats</a></li>
            <li><a href="#">Sign In</a></li>
            <li><a href="#">Sign Up</a></li>
            <li><a href="#">Logout</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <ul id="dropdown-lessons" class="dropdown-content">
      <li><a href="#">By Keys</a></li>
      <li class="divider"></li>
      <li><a href="#">C Major</a></li>
      <li><a href="#">D Flat Major</a></li>
      <li><a href="#">E Flat Major</a></li>
      <li><a href="#">E Major</a></li>
      <li><a href="#">F Major</a></li>
      <li><a href="#">G Flat Major</a></li>
      <li><a href="#">F Sharp Major</a></li>
      <li><a href="#">G Major</a></li>
      <li><a href="#">A Flat Major</a></li>
      <li><a href="#">A Major</a></li>
      <li><a href="#">B Flat Major</a></li>
      <li><a href="#">B Major</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data(){
    return {

    }
  },
}

$(document).ready(function(){
  $(".dropdown-trigger").dropdown({
    hover: true
  });
});
</script>

<style>

body {
  font-family: 'Roboto Slab', serif
}

nav ul a {
  font-weight: 300;
  color: #000000;
}

.container {
  width: 80%;
}

.dropdown-content li a {
  font-size: 1.0em;
  font-weight: 300;
  color: #c51162;
}

</style>


