import styled from 'styled-components';


const HeaderWrapper = styled.div`

	display: flex;
	width: 100%;
	background-color: #101010;

/*---------------------------------------------*/

	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
	@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat','roboto', sans-serif;
}

.title{
    color: darkgrey;
    font-family: 'Montserrat', sans-serif;
    font-size:2.25vw;
    letter-spacing: 0.75em;
    padding-left: 25px;
    align-items: center;
    display: flex;
    justify-content: space-between;
}

.z-neon{
    color: red;
    letter-spacing: 1.5em;
    animation: neon 2s ease-in-out infinite alternate;
}

@keyframes neon{
    from{
    text-shadow: 0 0 25px red,
                 0 0 50px red,
                 0 0 75px red;
    }
}

.navbar{
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    background: #101010;
    z-index: 9;
}

.nav{
    padding: 5px 5vw;
    display: flex;
    justify-content: space-between;
}

.brand-logo{
    height: 125px;
}

.nav-items{
    display: flex;
    align-items: center;
}


.container-buscar {
    position: relative;
    --size-button: 30px;
  }
  
  .input-buscar {
    padding-left: var(--size-button);
    height: var(--size-button);
    font-size: 13px;
    border: none;
    color: #fff;
    outline: none;
    width: var(--size-button);
    transition: all ease 0.3s;
    background-color: #191A1E;
    box-shadow: 1.5px 1.5px 3px #0e0e0e, -1.5px -1.5px 3px rgb(95 94 94 / 25%), inset 0px 0px 0px #0e0e0e, inset 0px -0px 0px #5f5e5e;
    border-radius: 50px;
    cursor: pointer;
  }
  
  .input-buscar:focus,
  .input-buscar:not(:invalid) {
    width: 200px;
    cursor: text;
    box-shadow: 0px 0px 0px #0e0e0e, 0px 0px 0px rgb(95 94 94 / 25%), inset 1.5px 1.5px 3px #0e0e0e, inset -1.5px -1.5px 3px #5f5e5e;
  }
  
  .input-buscar:focus + .icon-buscar,
  .input-buscar:not(:invalid) + .icon-buscar {
    pointer-events: all;
    cursor: pointer;
  }
  
  .container-buscar .icon-buscar {
    position: absolute;
    width: var(--size-button);
    height: var(--size-button);
    top: 0;
    left: 0;
    padding: 7px;
    pointer-events: none;
  }
  
  .container-buscar .icon-buscar svg {
    width: 100%;
    height: 100%;
    color: darkred;
  }

.search{
    width: 25px;
    display: flex;
    padding-left: 25px;
    flex-direction: row-reverse;
}

.search-box{
    width: 80%;
    height: 35px;
    padding: 10px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border: 1px solid #d1d1d1;
    text-transform: capitalize;
    background: none;
    color: #a9a9a9;
    outline: none;
}

.search-btn{
    /*width: 20%;*/
    height: 35px;
    padding: 10px 20px;
    border: none;
    outline: none;
    cursor: pointer;
    background: #383838;
    color: #fff;
    text-transform: capitalize;
    /*font-size: 15px;*/
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}


.search-box::placeholder{
    color: #a9a9a9;
}

.nav-items a{
    margin-left: 25px;
}

.nav-items a img{
    width: 30px;
}

.links-container{
    width: 100%;
    display: flex;
    padding: 10px 10vw;
    justify-content: center;
    list-style: none;
    border-top: 1px solid darkred;
}

.link{
    text-transform: capitalize;
    padding: 0 25px;
    margin: 0 5px;
    text-decoration: none;
    color: darkgrey;
    opacity: 0.5;
    transition: .5s;
}

.link:hover{
    color: red;
    opacity: 0.99;
}

.link-nav-items{
	color: darkgray;
	font-size: 32px;
	align-items: center;
	display: flex;
}

/*--------------------------------------*/

`;

export default {
	HeaderWrapper,
};