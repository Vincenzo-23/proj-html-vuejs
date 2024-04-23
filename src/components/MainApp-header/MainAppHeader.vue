<template>
    <div class="main_hero_section">
        <!-- Main hero section title, paragraph and buttons -->
        <div class="container_large">
            <div class="row">
                <div class="col-6 p-5">
                    <h1 class="hero_title">
                        SEM Campaigns Made Simple With Avada
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dicta eum nihil asperiores vitae! Modi.
                    </p>
                    <div>
                        <button class="button yellow_btn">BUY AVADA NOW</button>
                        <button class="button blue_btn">CONTACT US</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.main_hero_section{
    height: 720px;
    color: white;
    padding: 80px;
    .hero_title{
        font-size: 48px;
        font-weight: 700;
    }
    p{
        padding: 25px 0;
        font-size: 20px;
    }
    .button{
        border-radius: 999px;
        padding: 12px 35px;
        color: white;
        font-size: 12px;
        font-weight: 700;
        &:first-child{
            margin-right: 20px;
        }
    }
    .yellow_btn{
        background-color: rgb(255, 167, 55);
    }
    .blue_btn{
        background-color: rgb(85, 110, 237);
    }
}

</style>