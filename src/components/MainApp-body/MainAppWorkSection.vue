<template>
    <div class="work_section">
        <!-- Work section description -->
        <div class="container_small">
            <div class="description">
                <h2>Our Work</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quos dignissimos nostrum cum.
                </p>
            </div>
        </div>
        <!-- Section grid with images -->
        <div class="container_large">
            <div class="row justify-content-evenly">
                <img class="col-auto" src="/images/case-study-gallery-3-1.jpg" alt="A desk with a laptop">
                <img class="col-auto" src="/images/case-study-gallery-2.jpg" alt="A smartphone">
                <img class="col-auto" src="/images/case-study-gallery-1-1.jpg" alt="A monitor with graphs">
                <img class="col-auto" src="/images/case-study-gallery-4-1.jpg" alt="A monitor with graphs">
                <img class="col-auto" src="/images/case-study-gallery-5-1.jpg" alt="A monitor with graphs">
                <img class="col-auto" src="/images/case-study-gallery-6-1.jpg" alt="A monitor with graphs">
            </div>
        </div>
        <!-- Section button -->
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
//Layout
.work_section{
    padding: 110px 0;
}

// Work section description
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

// Images
.row{
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