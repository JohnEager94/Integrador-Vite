import styled from 'styled-components';


const FooterWrapper = styled.div`

footer{
    position: relative;
    width: 100%;
    padding: 40px 10vw;
    padding-bottom: 80px;
    background: #101010;
}

.footer-content{
    display: flex;
    width: 100%;
    justify-content: space-between;
}

.footer-content .logo{
    height: 160px;
}

.footer-ul-container{
    width: 75%;
    display: flex;
    justify-content: space-between;
    gap: 50px;
}

.category{
    width: 200px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    list-style: none;
}

.category-title{
    grid-column: span 2;
    text-transform: capitalize;
    color: #fff;
    font-size: 20px;
    margin-bottom: 20px;
}

.category .footer-link{
    text-decoration: none;
    text-transform: capitalize;
    color: rgba(255, 255, 255, 0.75);
}

.footer-link:hover{
    color: #fff;
}

.footer-title, .info{
    color: rgba(255, 255, 255, 0.75);
    margin: 20px 0;
    text-transform: capitalize;
}

.footer-title{
    margin-top: 80px;
    color: #fff;
}

.footer-social-container{
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
}

.social-link{
    color: #fff;
    margin-left: 20px;
    text-transform: capitalize;
}

.social-link:nth-child(1){
    margin-left: 0;
}

.footer-credit{
    width: 100%;
    padding: 10px;
    position: absolute;
    left: 0;
    bottom: 0;
    text-align: center;
    color: #fff;
    background: rgba(0, 0, 0, 0.2);
}

`;

export default {
	FooterWrapper,
};