<template>
  <div class="Footer">
    <footer class="page-footer purple lighten-3">
      <div class="container">
        <div class="row">
          <div class="col m12 s12">
            <h5 class="black-text">Social Media Links</h5>
          </div>
          <div class="col m12 s12">
            <ul>
              <li><a class="black-text" href="https://www.facebook.com/thatsforrealmusic/" target="blank">Facebook</a></li>
              <li><a class="black-text" href="https://twitter.com/Tforrealmusic" target="blank">Twitter</a></li>
              <li><a class="black-text" href="https://www.instagram.com/thatsforrealmusic/" target="blank">Instagram</a></li>
              <li><span class="black-text">Contact: </span><a class="black-text" href="mailto:thatsforrealmusic@forrealcodes.com">That's For Real Music</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container black-text">
          @ 2019 copyright
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data(){
    return {
      
    }
  }
}
</script>

<style>

  .Footer{
    text-align: center;
  }

  .Footer h5{
    font-weight: 400;
  }

  .Footer li a{
    font-weight: 300;
  }

  .footer-copyright{
    font-weight: 300;
  }
</style>


