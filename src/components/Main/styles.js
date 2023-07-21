import styled from 'styled-components';


const MainWrapper = styled.div`

.product{
    position: relative;
    overflow: hidden;
    padding: 20px 0;
    background-color: #202020;
}

.product-category{
    padding: 0 10vw;
    font-size: 25px;
    font-weight: 500;
    margin-bottom: 50px;
    text-transform: capitalize;
    color:darkgrey
}

.product-container{
    padding: 0 10vw;
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
}

.product-container::-webkit-scrollbar{
    display: none;
}

.product-card{
    flex: 0 0 auto;
    width: 250px;
    height: 450px;
    margin-right: 40px;
}

.product-image{
    position: relative;
    width: 100%;
    height: 350px;
    overflow: hidden;
}

.product-thumb{
    width: 100%;
    height: 350px;
    object-fit: cover;
}

.discount-tag{
    position: absolute;
    background: darkgray;
    padding: 5px;
    border-radius: 5px;
    color: black;
    right: 10px;
    top: 10px;
    text-transform: capitalize;
}

.card-btn{
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px;
    width: 75%;
    text-transform: capitalize;
    border-color: darkred;
    outline: none;
    background: #151515;
    border-radius: 5px;
    transition: 0.5s;
    cursor: pointer;
    color:white;
    opacity: 0;
}

.product-card:hover .card-btn{
    opacity: 1;
}

.card-btn:hover{
    background: #101010;
    color: whitesmoke;
    border-color: red;
}

.product-info{
    width: 100%;
    height: 100px;
    padding-top: 10px;
}

.product-brand{
    text-transform: uppercase;
    color:darkgrey
}

.product-short-des{
    width: 100%;
    height: 20px;
    line-height: 20px;
    overflow: hidden;
    opacity: 0.5;
    text-transform: capitalize;
    margin: 5px 0;
    color:darkgrey
}

.price{
    font-weight: 900;
    font-size: 20px;
    background: linear-gradient(180deg, red -0.75%, darkred 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.actual-price{
    margin-left: 20px;
    opacity: 0.5;
    text-decoration: line-through;
    color: whitesmoke;
}

.pre-btn, .nxt-btn{
    border: none;
    width: 10vw;
    height: 100%;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(90deg, rgba(20,20,20,0) 0%, #202020 100%);
    /*background-color: #202020;*/
    cursor: pointer;
    z-index: 8;
}

.pre-btn{
    left: 0;
    transform: rotate(180deg);
}

.nxt-btn{
    right: 0;
}

.pre-btn img, .nxt-btn img{
    opacity: 0.2;
}

.pre-btn:hover img, .nxt-btn:hover img{
    opacity: 1;
}

.collection-container{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    background-color: #101010;
    padding-top: 10px;
}

.collection{
    position: relative;
}

.collection img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.collection p{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
    font-size: 75px;
    text-transform: capitalize;
    font-weight: bolder;
    text-shadow:     -1px 0 black,
                   0  1px black,
                      1px 0 black,
                   0 -1px black,
                 0 0  5px black,
                 0 0 10px black,
                 0 0 25px red,
                 0 0 50px red,
                 0 0 75px red,
                 0 0 100px red;                 
    letter-spacing: 0.25em;
}

.collection:nth-child(3){
    grid-column: span 2;
    margin-bottom: 10px;
}

`;

export default {
	MainWrapper,
};