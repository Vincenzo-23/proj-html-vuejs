<template>
    <section class="agency_section">
        <div class="container_small">
            <!-- Agency section description -->
            <div class="description">
                <h2>Meet The New Agency SEO Template From The Avada Team</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis similique, provident quo incidunt vitae beatae.
                </p>
            </div>
        </div>
        <!-- Section agency cards grid -->
        <div class="container_large ">
            <div class="grid">
                <div class="card border-0">
                    <div class="icon"><font-awesome-icon :icon="['fas', 'road']" /></div>
                    <h3 class="card_title">Establish Goals</h3>
                    <p class="card_paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla fuga laborum quam ab eligendi aut dicta eius culpa, corporis mollitia.</p>
                </div>
                <div class="card border-0">
                    <div class="icon"><font-awesome-icon :icon="['fas', 'video']" /></div>
                    <h3 class="card_title">Work With a Team</h3>
                    <p class="card_paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla fuga laborum quam ab eligendi aut dicta eius culpa, corporis mollitia.</p>
                </div>
                <div class="card border-0">
                    <div class="icon"><font-awesome-icon :icon="['fas', 'droplet']" /></div>
                    <h3 class="card_title">Get Results</h3>
                    <p class="card_paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla fuga laborum quam ab eligendi aut dicta eius culpa, corporis mollitia.</p>
                </div>
            </div>
        </div>
        <!-- Section image -->
        <div class="container_large">
            <img src="/images/agency-seo-desk-front.jpg" alt="Picture of a desk" class="agency_img">
        </div>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.agency_section{
    padding-top: 110px;
    background-color: rgb(247, 248, 249);
}
// Agency section description
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
// Agency Cards grid
.grid{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    padding-bottom: 30px;
}
.card{
    padding: 40px 35px;
    text-align: center;
    .icon{
        padding-bottom: 20px;
        font-size: 35px;
        color: rgb(255, 167, 55);
    }
    .card_title{
        padding-bottom: 20px;
        font-weight: 800;
    }
    .card_paragraph{
        line-height: 1.7;
    }
    &:hover{
        .card_title{
            color: rgb(255, 167, 55);
        }
    }
}

//Agency image
.agency_img{
    width: 1200px;
}
</style>