<template>
    <div class="plans_section">
        <!-- Plans section subtitle and paragraph -->
        <div class="container_small">
            <div class="subtitle">
                <h2>Our Plans</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quos dignissimos nostrum cum.
                </p>
            </div>
        </div>
        <!-- Cards grid -->
        <div class="container_large">
            <div class="grid">
                <div class="card border-0">
                    <h3 class="card_title">Standard</h3>
                    <div class="card_price">
                        <span class="amount">19</span>
                        <span class="currency">$</span>
                        <span class="cents">99</span>
                        <span class="time">monthly</span>
                    </div>
                    <ul>
                        <li>5 projects</li>
                        <li>5 GB Storage</li>
                        <li>Unlimited Users</li>
                    </ul>
                    <button class="card_button">START TODAY</button>
                </div>
                <div class="card border-0">
                    <h3 class="card_title">Premium</h3>
                    <div class="card_price">
                        <span class="amount">29</span>
                        <span class="currency">$</span>
                        <span class="cents">99</span>
                        <span class="time">monthly</span>
                    </div>
                    <ul>
                        <li>10 projects</li>
                        <li>15 GB Storage</li>
                        <li>Unlimited Users</li>
                    </ul>
                    <button class="card_button">START TODAY</button>
                </div>
                <div class="card border-0">
                    <h3 class="card_title">Professional</h3>
                    <div class="card_price">
                        <span class="amount">39</span>
                        <span class="currency">$</span>
                        <span class="cents">99</span>
                        <span class="time">monthly</span>
                    </div>
                    <ul>
                        <li>15 projects</li>
                        <li>30 GB Storage</li>
                        <li>Unlimited Users</li>
                    </ul>
                    <button class="card_button yellow_button">START TODAY</button>
                </div>
                <div class="card border-0">
                    <h3 class="card_title">Extreme</h3>
                    <div class="card_price">
                        <span class="amount">59</span>
                        <span class="currency">$</span>
                        <span class="cents">99</span>
                        <span class="time">monthly</span>
                    </div>
                    <ul>
                        <li>Unlimited projects</li>
                        <li>Unlimited Storage</li>
                        <li>Unlimited Users</li>
                    </ul>
                    <button class="card_button">START TODAY</button>
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
.plans_section{
    background-image: url(images/background1.jpg);
    background-size: cover;
    padding: 110px 0 100px;
}

// Subtitle and paragraph
.subtitle{
    text-align: center;
    margin-bottom: 95px;
    color: white;
    h2{
        font-size: 34px;
        font-weight: 700;
        margin-bottom: 35px;
    }
}

// Cards grid
.grid{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    .card{
        background-color: white;
        padding: 35px 75px 28px;
        text-align: center;
        .card_title{
            font-size: 24px;
            padding-bottom: 20px;
            font-weight: 700;
            
        }
        .card_price{
            position: relative;
            .amount{
                font-size: 50px;
                font-weight: 700;
                color: rgb(96, 122, 254);
            }
            .currency{
                color: rgb(32, 32, 32);
                font-size: 18px;
                font-weight: 700;
                position: absolute;
                left: 8px;
                top: 16px;
            }
            .cents{
                font-weight: 700;
                color: rgb(96, 122, 254);
                position: absolute;
                top: 14px;
            }
            .time{
                color: rgb(93, 95, 100);
                font-style: oblique;
                font-size: 12px;
                font-weight: 700;
            }
        }
        ul{
            color: rgb(93, 95, 100);
            font-weight: 600;
            margin-top: 50px;
            li{
                margin-bottom: 40px;
            }
        }
        .card_button{
            border-radius: 999px;
            padding: 12px 15px;
            font-size: 12px;
            font-weight: 800;
            background-color: white;
            border: 1px solid black;
            color: rgb(93, 95, 100);
        }
        .yellow_button{
            background-color: rgb(255, 167, 55);
            color: white;
            border: none;
        }
    }
}    
</style>