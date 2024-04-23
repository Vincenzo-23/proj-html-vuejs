<template>
  
  <!-- Header section and MainHeader section with the same background -->
  <section class="top_background">
    <HeaderApp :voices="headerMenus" />
    <MainAppHeader />
  </section>

  <!-- Main body section -->
  <section>
    <MainAppBody />
  </section>

<!-- Footer section -->
<section>
  <FooterApp :menus="footerMenus"/>
</section>
</template>

<script>
import HeaderApp from "./components/HeaderApp.vue"
import MainAppHeader from "./components/MainApp-header/MainAppHeader.vue"
import MainAppBody from "./components/MainApp-body/MainAppBody.vue"
import FooterApp from "./components/FooterApp.vue"

  export default {
    components:{
      HeaderApp,
      MainAppHeader,
      MainAppBody,
      FooterApp
    },
    data(){
      return{
        headerMenus: [ "Home", "Who We Are", "What We Do", "Where We Work", "Careers", "APPLY", "News"],
        footerMenus: [ "Home", "Who We Are", "What We Do", "Where We Work", "Careers", "News", "Get in touch Now"]
      }
    }
  }
</script>

<style lang="scss">

@use "./style/general.scss";


.top_background{
  background-image: url(/images/1-hero-image.png);
  background-size: cover;
  background-position: center;
  
  
}

</style>