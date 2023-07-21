import Styles from './styles'
import {LiaUserCircle} from 'react-icons/lia';
import {LiaShoppingCartSolid} from 'react-icons/lia';

const Header = () => {
   return (
      <Styles.HeaderWrapper>
         <nav class="navbar">
            <div class="nav">
               <img src="https://res.cloudinary.com/denzovwml/image/upload/v1687675718/Z%20Collectibles%20-%20Assets/v9vikhintivjig8s5apc.png" class="brand-logo" alt="LOGO" />
               <h1 class="title"><span class="z-neon">Z</span>COLLECTIBLES</h1>
            <div class="nav-items">
          
               <div class="search">
          
                  <div class="container-buscar"> 
                     <input placeholder="Buscar..." required="" class="input-buscar" name="text" type="text"/>
                  <div class="icon-buscar">
                     <svg viewBox="0 0 512 512" class="ionicon" xmlns="http://www.w3.org/2000/svg">
                         <title>Buscar</title>
                        <path stroke-width="32" stroke-miterlimit="10" stroke="currentColor" fill="none" d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"></path>
                        <path d="M338.29 338.29L448 448" stroke-width="32" stroke-miterlimit="10" stroke-linecap="round" stroke="currentColor" fill="none"></path>
                     </svg>
                  </div>
                  </div>
               </div>
               <a href="#"><LiaUserCircle class="link-nav-items" alt="Profile" /></a>
               <a href="#"><LiaShoppingCartSolid class="link-nav-items" alt="Cart" /></a>
            </div>
            </div>
            <ul class="links-container">
               <li class="link-item"><a href="#" class="link">Home</a></li>
               <li class="link-item"><a href="#" class="link">Figuras</a></li>
               <li class="link-item"><a href="#" class="link">Comics</a></li>
               <li class="link-item"><a href="#" class="link">Mangas</a></li>
               <li class="link-item"><a href="#" class="link">Estatuas</a></li>
            </ul>
         </nav>                
      </Styles.HeaderWrapper>
   )
}

export default Header