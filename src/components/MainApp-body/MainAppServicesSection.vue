<template>
    <div class="services_section">
        <!-- Services section description -->
        <div class="container_small">
            <div class="description">
                <h2>SEE Our Top Notch Services</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, harum doloribus! Aspernatur, quasi!
                </p>
            </div>
        </div>
        <!-- Section grid with cards -->
        <div class="container_large">
            <div class="grid">
                <div class="card border-0">
                    <div class="icon"><font-awesome-icon :icon="['fab', 'google']" /></div>
                    <h3 class="card_title">Google SEO</h3>
                    <p class="card_paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ullam impedit architecto. Fugit ex doloremque dolorem eaque asperiores delectus soluta.</p>
                    <a href="#" class="card_subtitle first_subtitle">Read More ></a>
                    <a href="#" class="card_subtitle second_subtitle">Let's work toghether ></a>
                </div>
                <div class="card border-0">
                    <div class="icon"><font-awesome-icon :icon="['fas', 'gear']" /></div>
                    <h3 class="card_title">Brand Strategy</h3>
                    <p class="card_paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ullam impedit architecto. Fugit ex doloremque dolorem eaque asperiores delectus soluta.</p>
                    <a href="#" class="card_subtitle first_subtitle">Read More ></a>
                    <a href="#" class="card_subtitle second_subtitle">Let's work toghether ></a>
                </div>
                <div class="card border-0">
                    <div class="icon"><font-awesome-icon :icon="['fas', 'building']" /></div>
                    <h3 class="card_title">Local SEO</h3>
                    <p class="card_paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ullam impedit architecto. Fugit ex doloremque dolorem eaque asperiores delectus soluta.</p>
                    <a href="#" class="card_subtitle first_subtitle">Read More ></a>
                    <a href="#" class="card_subtitle second_subtitle">Let's work toghether ></a>
                </div>
                <div class="card border-0">
                    <div class="icon"><font-awesome-icon :icon="['fas', 'chart-column']" /></div>
                    <h3 class="card_title">SEO Analysis</h3>
                    <p class="card_paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ullam impedit architecto. Fugit ex doloremque dolorem eaque asperiores delectus soluta.</p>
                    <a href="#" class="card_subtitle first_subtitle">Read More ></a>
                    <a href="#" class="card_subtitle second_subtitle">Let's work toghether ></a>
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
.services_section{
    padding: 115px 0 180px;
    background-image: url(/images/pattern_background.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    background-color: rgb(5, 22, 66);
    color: white;
}
// Services section description
.description{
    text-align: center;
    h2{
        font-size: 34px;
        font-weight: 700;
        margin-bottom: 35px;
    }
    p{
        margin-bottom: 95px;
        font-size: 20px;
    }
}
// Cards grid
.grid{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    .card{
        background-color: rgb(7, 27, 80);
        padding: 40px 20px 30px;
        text-align: center;
        .icon{
            padding-bottom: 35px;
            font-size: 35px;
            color: rgb(255, 167, 55);
        }
        .card_title{
            padding-bottom: 20px;
            font-weight: 800;
            
        }
        .card_paragraph{
            padding-bottom: 35px;
            line-height: 1.7;
        }
        .card_subtitle{
            color: rgb(255, 167, 55);
        }
        .second_subtitle{
                display: none;
            }
        &:hover{
            .card_title{
                color: rgb(255, 167, 55);
            }
            .first_subtitle{
                display: none;
            }
            .second_subtitle{
                display: block;
            }
        }
    }
}
</style>