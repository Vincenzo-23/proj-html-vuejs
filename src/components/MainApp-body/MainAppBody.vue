<template>
    <MainAppAgencySection />
    <MainAppServicesSection />
    <MainAppWorkSection />
    <MainAppPlansSection />
    <MainAppNewsSection />
    <MainAppClientsSection />
</template>

<script>
import MainAppAgencySection from "./MainAppAgencySection.vue"
import MainAppServicesSection from "./MainAppServicesSection.vue"
import MainAppWorkSection from "./MainAppWorkSection.vue"
import MainAppPlansSection from "./MainAppPlansSection.vue"
import MainAppNewsSection from "./MainAppNewsSection.vue"
import MainAppClientsSection from "./MainAppClientsSection.vue"

    export default {
        components:{
            MainAppAgencySection,
            MainAppServicesSection,
            MainAppWorkSection,
            MainAppPlansSection,
            MainAppNewsSection,
            MainAppClientsSection
        }
    }
</script>

<style lang="scss" scoped>

</style>