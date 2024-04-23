<template>
    <MainAppAgencySection />
    <MainAppServicesSection />
    <MainAppWorkSection />
    <MainAppPlansSection />
    <MainAppNewsSection />
    <MainAppClientsSection />
    <MainAppConsultationSection />
</template>

<script>
import MainAppAgencySection from "./MainAppAgencySection.vue"
import MainAppServicesSection from "./MainAppServicesSection.vue"
import MainAppWorkSection from "./MainAppWorkSection.vue"
import MainAppPlansSection from "./MainAppPlansSection.vue"
import MainAppNewsSection from "./MainAppNewsSection.vue"
import MainAppClientsSection from "./MainAppClientsSection.vue"
import MainAppConsultationSection from "./MainAppConsultationSection.vue"

    export default {
        components:{
            MainAppAgencySection,
            MainAppServicesSection,
            MainAppWorkSection,
            MainAppPlansSection,
            MainAppNewsSection,
            MainAppClientsSection,
            MainAppConsultationSection
        }
    }
</script>

<style lang="scss" scoped>

</style>