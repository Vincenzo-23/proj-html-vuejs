<template>
    <MainAppAgencySection />
    <MainAppServicesSection />
    <MainAppWorkSection />
    <MainAppPlansSection />
</template>

<script>
import MainAppAgencySection from "./MainAppAgencySection.vue"
import MainAppServicesSection from "./MainAppServicesSection.vue"
import MainAppWorkSection from "./MainAppWorkSection.vue"
import MainAppPlansSection from "./MainAppPlansSection.vue"

    export default {
        components:{
            MainAppAgencySection,
            MainAppServicesSection,
            MainAppWorkSection,
            MainAppPlansSection,
        }
    }
</script>

<style lang="scss" scoped>

</style>