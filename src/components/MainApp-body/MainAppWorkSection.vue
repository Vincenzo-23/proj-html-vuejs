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
                <div class="col-auto img_wrapper">
                    <img src="/images/case-study-gallery-3-1.jpg" alt="A desk with a laptop">
                    <div class="link_img"><a href="#"><font-awesome-icon :icon="['fas', 'link']" /></a></div>
                </div>
                <div class="col-auto img_wrapper">
                    <img src="/images/case-study-gallery-2.jpg" alt="A smartphone">
                    <div class="link_img"><a href="#"><font-awesome-icon :icon="['fas', 'link']" /></a></div>
                </div>
                <div class="col-auto img_wrapper">
                    <img src="/images/case-study-gallery-1-1.jpg" alt="A monitor with graphs">
                    <div class="link_img"><a href="#"><font-awesome-icon :icon="['fas', 'link']" /></a></div>
                </div>
                <div class="col-auto img_wrapper">
                    <img src="/images/case-study-gallery-4-1.jpg" alt="A monitor with graphs">
                    <div class="link_img"><a href="#"><font-awesome-icon :icon="['fas', 'link']" /></a></div>
                </div>
                <div class="col-auto img_wrapper">
                    <img src="/images/case-study-gallery-5-1.jpg" alt="A monitor with graphs">
                    <div class="link_img"><a href="#"><font-awesome-icon :icon="['fas', 'link']" /></a></div>
                </div>
                <div class="col-auto img_wrapper">
                    <img src="/images/case-study-gallery-6-1.jpg" alt="A monitor with graphs">
                    <div class="link_img"><a href="#"><font-awesome-icon :icon="['fas', 'link']" /></a></div>
                </div>
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
    .img_wrapper{
        padding: 0;
        position: relative;
        img{
            width: 380px;
            height: 285px;
        }
        .link_img{
            color: white;
            font-size: 28px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-image: linear-gradient(rgb(98, 124, 254), white);
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            opacity: 0;
        }
        &:hover{
            .link_img{
                opacity: 0.8;
            }
        }
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