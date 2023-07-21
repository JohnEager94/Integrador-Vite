import Styles from './styles'

const Main = () => {
    return (
       <Styles.MainWrapper>
        <section class="product">
      <h2 class="product-category">Figuras más vendidas</h2>
      <button class="pre-btn"><img src="img/arrow.png" alt="" /></button>
      <button class="nxt-btn"><img src="img/arrow.png" alt="" /></button>
      <div class="product-container">
        <div class="product-card">
          <div class="product-image">
            <span class="discount-tag">50% off</span>
            <img src="assets/imagenes-section-1/Batman TDK 1000x1000.png" class="product-thumb" alt="" />
            <button class="card-btn">agregar al carrito</button>
          </div>
          <div class="product-info">
            <h2 class="product-brand">Batman</h2>
            <p class="product-short-des">Medicom Toys - Batman (Movie Ver.)</p>
            <span class="price">$120</span><span class="actual-price">$140</span>
          </div>
        </div>
        <div class="product-card">
          <div class="product-image">
            <span class="discount-tag">50% off</span>
            <img src="assets/imagenes-section-1/joker.png" class="product-thumb" alt="" />
            <button class="card-btn">agregar al carrito</button>
          </div>
          <div class="product-info">
            <h2 class="product-brand">Joker</h2>
            <p class="product-short-des">Medicom Toys - Joker (Movie Ver.)</p>
            <span class="price">$20</span><span class="actual-price">$40</span>
          </div>
        </div>
        <div class="product-card">
          <div class="product-image">
            <span class="discount-tag">50% off</span>
            <img src="assets/imagenes-section-1/Bane.png" class="product-thumb" alt="" />
            <button class="card-btn">agregar al carrito</button>
          </div>
          <div class="product-info">
            <h2 class="product-brand">Bane</h2>
            <p class="product-short-des">Medicom Toys - Bane (Movie Ver.)</p>
            <span class="price">$20</span><span class="actual-price">$40</span>
          </div>
        </div>
        <div class="product-card">
          <div class="product-image">
            <span class="discount-tag">50% off</span>
            <img src="assets/imagenes-section-1/rhas.png" class="product-thumb" alt="" />
            <button class="card-btn">agregar al carrito</button>
          </div>
          <div class="product-info">
            <h2 class="product-brand">Ra's al Ghul</h2>
            <p class="product-short-des">Medicom toys - Ra's al Ghul</p>
            <span class="price">$20</span><span class="actual-price">$40</span>
          </div>
        </div>
        <div class="product-card">
          <div class="product-image">
            <span class="discount-tag">50% off</span>
            <img src="assets/imagenes-section-1/two-faces.png" class="product-thumb" alt="" />
            <button class="card-btn">agregar al carrito</button>
          </div>
          <div class="product-info">
            <h2 class="product-brand">Two Faces</h2>
            <p class="product-short-des">Medicom Toys - Two Faces (Movie Ver.)</p>
            <span class="price">$20</span><span class="actual-price">$40</span>
          </div>
        </div>
        <div class="product-card">
          <div class="product-image">
            <span class="discount-tag">50% off</span>
            <img src="assets/imagenes-section-1/scarecrow.png" class="product-thumb" alt="" />
            <button class="card-btn">agregar al carrito</button>
          </div>
          <div class="product-info">
            <h2 class="product-brand">Scarecrow</h2>
            <p class="product-short-des">Medicom Toys - Scarecrow (Movie Ver.)</p>
            <span class="price">$20</span><span class="actual-price">$40</span>
          </div>
        </div>
        <div class="product-card">
          <div class="product-image">
            <span class="discount-tag">50% off</span>
            <img src="assets/imagenes-section-1/bruce-wayne.png" class="product-thumb" alt="" />
            <button class="card-btn">agregar al carrito</button>
          </div>
          <div class="product-info">
            <h2 class="product-brand">Bruce Wayne</h2>
            <p class="product-short-des">Medicom Toys - Bruce Wayne (Movie Ver.)</p>
            <span class="price">$20</span><span class="actual-price">$40</span>
          </div>
        </div>
        <div class="product-card">
          <div class="product-image">
            <span class="discount-tag">50% off</span>
            <img src="assets/imagenes-section-1/catwoman.png" class="product-thumb" alt="" />
            <button class="card-btn">agregar al carrito</button>
          </div>
          <div class="product-info">
            <h2 class="product-brand">Catwoman</h2>
            <p class="product-short-des">Medicom Toys - Catwoman (Movie Ver.)</p>
            <span class="price">$20</span><span class="actual-price">$40</span>
          </div>
        </div>
      </div>
    </section>
       </Styles.MainWrapper>

)
}

export default Main