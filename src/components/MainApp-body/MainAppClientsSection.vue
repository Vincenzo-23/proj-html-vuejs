<template>
    <div class="clients_section">
        <!-- Client section feedback -->
        <div class="container_medium">
            <h2 class="subtitle">What Our Clients Say</h2>
            <img src="/images/testimonials-2.jpg" alt="a testimonial picture" class="testimonial">
            <p class="testimonial_description">Ability proceeds from a fusion of skills, knowledge, undertanding and imagination, consolidated by experience.</p>
            <p class="testimonial_name"><strong>Luis Desalvo, </strong>CREO TECH</p>
            <div class="switch_image d-flex justify-content-center gap-2">
                <input class="radio_button" type="radio" name="picture">
                <input class="radio_button" type="radio" name="picture">
            </div>
        </div>
        <!-- Partner logos -->
        <div class="container_large partners">
            <div class="row justify-content-evenly">
                <div class="col-auto">
                    <img src="/public/images/clients_partner_5-200x202.png" alt="logo image" class="partner_image">
                </div>
                <div class="col-auto">
                    <img src="/public/images/clients_partner_6-200x202.png" alt="logo image" class="partner_image">
                </div>
                <div class="col-auto">
                    <img src="/public/images/clients_partner_1-200x202.png" alt="logo image" class="partner_image">
                </div>
                <div class="col-auto">
                    <img src="/public/images/clients_partner_2-200x202.png" alt="logo image" class="partner_image">
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
.clients_section{
    padding: 110px 0 75px;
    text-align: center;

    // Clients section feedback
    .subtitle{
        font-weight: 700;
        margin-bottom: 50px;
    }
    .testimonial{
        width: 150px;
        aspect-ratio: 1/1;
        border-radius: 99px;
        margin-bottom: 30px;

    }
    .testimonial_description{
        font-style: oblique;
        font-size: 20px;
        margin-bottom: 30px;
    }
    .radio_button{
        cursor: pointer;
        margin-bottom: 75px;
    }
}

// Partner logos
.partners{
    border-top: 1px solid #e6e6e6;
    padding-top: 60px;
    .partner_image{
        width: 100px;
        aspect-ratio: 1/1;
    }
}
</style>