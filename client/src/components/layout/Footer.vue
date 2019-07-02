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
              <li><a class="black-text" href="">Facebook</a></li>
              <li><a class="black-text" href="">Twitter</a></li>
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


