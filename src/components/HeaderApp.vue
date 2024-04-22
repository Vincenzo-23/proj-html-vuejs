<template>
    <header class="header_section">
        <div class="container_large">
            <div class="row">
                <div class="col-auto logo">
                    <img src="/images/logo_seo_w_2x.png" alt="">
                </div>
                <ul class="col-auto d-flex flex-row navbar">
                    <li v-for="(menu, i) in voices" :key="i">
                        <a href="#">{{menu}}</a>
                    </li>
                </ul>
                <div class="col-auto">
                    <button class="button">GET IN TOUCH NOW</button>
                </div>
            </div>
            
        </div>
    </header>
</template>

<script>
    export default {
        props:["voices"]
    }
</script>

<style lang="scss" scoped>
.container_large{
    padding: 30px 0;
}
.navbar{
    gap: 35px;
    padding-right: 25px;
    color: white;
    
}
.logo{
margin-right: auto;
}
li{
    margin: 0;
    &:first-child{
        color: rgb(255, 167, 55);
    }
    &:nth-child(6){
        color: rgb(255, 167, 55);
        border: 1px solid rgb(255, 167, 55);
        padding: 3px 8px;
        border-radius: 5px;
        font-size: 12px;
        margin-left: -30px;
    }
}

img{
    height: 40px;
    width: 160px;
}
button{
    background-color: rgb(255, 167, 55);
    border-radius: 999px;
    padding: 10px 15px;
    color: white;
    font-weight: 700;
}
</style>