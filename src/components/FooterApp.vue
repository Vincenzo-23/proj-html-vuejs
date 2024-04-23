<template>
    <footer>
        <div class="container_medium">
            <!-- Logo -->
            <div class="logo">
                <img src="/images/logo_seo_2x.png" alt="Logo image">
            </div>
            <!-- Navbar -->
            <ul class="col-auto d-flex flex-row navbar">
                <li v-for="(menu, i) in menus" :key="i">
                    <a href="#">{{menu}}</a>
                </li>
            </ul>
            <!-- Credits -->
            <div class="credits">
                <span>&copy; Copyright 2012 - 2020</span>
                <span>AvadaTheme by <strong>ThemeFusion</strong></span>
                <span>All Rights Reserved</span>
                <span>Powered by <strong>WordPress</strong></span>
            </div>
            <!-- Social -->
            <div class="social d-flex justify-content-center">
                <font-awesome-icon :icon="['fab', 'facebook-f']" />
                <font-awesome-icon :icon="['fab', 'instagram']" />
                <font-awesome-icon :icon="['fab', 'twitter']" />
                <font-awesome-icon :icon="['fab', 'youtube']" />
            </div>
            <!-- Fixed button -->
            <button class="fixed_button" @click="scrollToTop">^</button>
        </div>
    </footer>
</template>

<script>
    export default {
        props:["menus"],
        methods: {
            scrollToTop() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
            },
        }
    }
</script>

<style lang="scss" scoped>
footer{
    padding: 50px 0 35px;
    text-align: center;
    // Logo
    .logo{
        padding-bottom: 55px;
        img{
            height: 40px;
            width: 160px;
        }
    }
    // Navbar
    .navbar{
        font-weight: 500;
        gap: 35px;
        color: black;
        margin-bottom: 65px;
        li{
            margin: 0;
            &:first-child{
                color: rgb(255, 167, 55);
            }
            &:hover{
                color: rgb(255, 167, 55);
            }
        }
    }
    // Credits
    .credits{
        font-size: 12px;
        margin-bottom: 30px;
        span{
            padding: 0 5px;
            &:not(:last-child){
                border-right: 1.5px solid rgb(173, 173, 173);
            }
        }        
    }
    
    // Social
    .social{
        font-size: 20px;
        color: rgb(93, 95, 100);
        gap: 25px;
    }

    // Fixed button
    .fixed_button{
        background-color: rgb(93, 95, 100);
        color: white;
        padding: 5px 12px;
        position: fixed;
        bottom: 0;
        right: 70px;
    }
}

</style>