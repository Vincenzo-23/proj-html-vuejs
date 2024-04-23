<template>
    <div class="work_section">
        <div class="container_small">
            <div class="subtitle">
                <h2>Our Work</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quos dignissimos nostrum cum.
                </p>
            </div>
        </div>    
        <div class="container_large">
            <div class="grid">
                <img src="/images/case-study-gallery-3-1.jpg" alt="">
                <img src="/images/case-study-gallery-2.jpg" alt="">
                <img src="/images/case-study-gallery-1-1.jpg" alt="">
                <img src="/images/case-study-gallery-4-1.jpg" alt="">
                <img src="/images/case-study-gallery-5-1.jpg" alt="">
                <img src="/images/case-study-gallery-6-1.jpg" alt="">
            </div>
        </div>
        <div class="container_small">
            <div class="button_wrap">
                <button class="button">VIEW OUR WORK</button>
            </div>
        </div>
    </div>
    
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.work_section{
    padding: 110px 0;
}

// Subtitle and paragraph
.subtitle{
    text-align: center;
    margin-bottom: 95px;
    h2{
        font-size: 34px;
        font-weight: 700;
        margin-bottom: 35px;
    }
}

// Grid of images
.grid{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 18px;
    img{
        width: 380px;
        height: 285px;
    }
}

// Button
.button_wrap{
    text-align: center;
    padding-top: 75px;
    .button{
        border-radius: 999px;
        padding: 12px 35px;
        color: white;
        font-size: 12px;
        font-weight: 700;
        background-color: rgb(255, 167, 55);
        
    }
}
</style>