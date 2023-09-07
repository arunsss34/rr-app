import React from 'react'
import aa2 from './images/c2.jpg'
import aa1 from './images/c2.jpg'
import aa3 from './images/c2.jpg'

function slide() {
  return (
    <div id="carouselExampleCaptions" class="carousel slide">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active item">
          <img src={aa2} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5 class='itemhead'>First slide label</h5>
              <p class='itempara'>Some representative placeholder content for the first slide.</p>
            </div>
        </div>
        <div class="carousel-item item">
          <img src={aa1} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5 class='itemhead'>Second slide label</h5>
              <p class='itempara'>Some representative placeholder content for the second slide.</p>
            </div>
        </div>
        <div class="carousel-item item">
          <img src={aa3} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5 class='itemhead'>Third slide label</h5>
              <p class='itempara'>Some representative placeholder content for the third slide.</p>
            </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default slide
