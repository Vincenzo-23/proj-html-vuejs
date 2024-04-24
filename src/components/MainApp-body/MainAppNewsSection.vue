<template>
    <section class="news_section">
        <!-- News description section-->
        <div class="container_small">
            <div class="description">
                <h2>Our News</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quos dignissimos nostrum cum.
                </p>
            </div>
        </div>
        <!-- News section cards -->
        <div class="container_large">
            <div class="row justify-content-evenly">
                <div class="card border-0">
                    <img src="/images/related-service-2-700x441.jpg" class="card_picture" alt="Desk picture">
                    <div class="card-body">
                        <h5 class="card-title">Why You Need A SEO Agency Now</h5>
                        <div class="card-subtitle">November 1st, 2017</div>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora inventore, quia corporis aliquid perspiciatis id delectus atque? Aliquid, aspernatur iure!</p>
                    </div>
                </div>
                <div class="card border-0">
                    <img src="/images/related-service-4-700x441.jpg" class="card_picture" alt="Computer picture">
                    <div class="card-body">
                        <h5 class="card-title">SEO Tips For Your Startup</h5>
                        <div class="card-subtitle">November 1st, 2017</div>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora inventore, quia corporis aliquid perspiciatis id delectus atque? Aliquid, aspernatur iure!</p>
                    </div>
                </div>
                <div class="card border-0">
                    <img src="/images/blog-post-6-700x441.jpg" class="card_picture" alt="A man using an ipad">
                    <div class="card-body">
                        <h5 class="card-title">Image Optimization For Your Site</h5>
                        <div class="card-subtitle">November 1st, 2017</div>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora inventore, quia corporis aliquid perspiciatis id delectus atque? Aliquid, aspernatur iure!</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- News Section button -->
        <div class="container_small">
            <div class="button_wrap">
                <button class="button">GO TO NEWS</button>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.news_section{
    background-color: rgb(247, 248, 249);
    padding: 115px 0 110px;
    
    // Description section
    .description{
        text-align: center;
        h2{
            font-size: 34px;
            font-weight: 700;
            margin-bottom: 35px;
        }
        p{
            margin-bottom: 80px;
            font-size: 20px;
        }
    }
    
    // Cards
    .card{
        background-color: rgb(247, 248, 249);
        width: 375px;
        padding: 0;
        text-align: center;
        .card_picture{
            height: 240px;
        }
        .card-title{
            color: rgb(255, 167, 55);
            font-weight: 700;
            margin-bottom: 10px;
        }
        .card-subtitle{
            font-size: 10px;
            margin-bottom: 20px;
        }
    }
    
    // Button
    .button_wrap{
        text-align: center;
        padding-top: 70px;
        .button{
            border-radius: 999px;
            padding: 12px 35px;
            color: white;
            font-size: 12px;
            font-weight: 700;
            background-color: rgb(255, 167, 55);
            
        }
    }
}

</style>