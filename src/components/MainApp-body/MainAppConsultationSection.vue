<template>
    <div class="consultation_section">
        <div class="container_small">
            <!-- Consultation description section -->
            <div class="description">
                <h2>Start Your Free Consultation</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quos dignissimos nostrum cum.
                </p>
                <button class="button">CONTACT US NOW</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
// Layout
.consultation_section{
    color: white;
    padding: 150px 0 130px;
    background-image: url(/images/CTA-seo-1.jpg);
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: color;
}

.description{
    text-align: center;
    h2{
        font-size: 34px;
        font-weight: 700;
        margin-bottom: 35px;
    }
    p{
        margin-bottom: 35px;
        font-size: 20px;
    }
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