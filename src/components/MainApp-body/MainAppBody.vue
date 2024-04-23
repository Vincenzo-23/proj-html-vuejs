<template>
    <MainAppAgencySection />
    <MainAppServicesSection />
    <MainAppWorkSection />
</template>

<script>
import MainAppAgencySection from "./MainAppAgencySection.vue"
import MainAppServicesSection from "./MainAppServicesSection.vue"
import MainAppWorkSection from "./MainAppWorkSection.vue"

    export default {
        components:{
            MainAppAgencySection,
            MainAppServicesSection,
            MainAppWorkSection,
        }
    }
</script>

<style lang="scss" scoped>

</style>