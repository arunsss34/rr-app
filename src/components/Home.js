import React from 'react'
import Header from './Header'
import Product from './Product'
import Quote from './quote'
import aa2 from './images/supermarket-949912_1920.jpg'
import aa1 from './images/supermarket-949912_1920.jpg'
import aa3 from './images/laser-2819142_1920.jpg'
import aa4 from './images/car-4716036_1920.jpg'
// import Fade from 'react-reveal/Fade';
import './css/default.css'
import Footer from './Footer'
function Home() {


  return (
    <div>
      <Header />
      {/* <video controls loop autoPlay muted  height={1000} width={1500} class='home_v'>
            <source src={a1} type="video/mp4" />
            </video> */}
      <Product />
      <div class="container text-center my_cont">
        <div class="row">
          <div class="col-4">
            <img src={aa1} class='img_center1' alt='image1'/><h4>Retail</h4>
          </div>
          <div class="col-6">
            <img src={aa2} class='img_center1' alt='image2'/><h4>Consumer Goods</h4>
          </div>
        </div><br />
        <div class="row">
          <div class="col-6">
            <img src={aa3} class='img_center1' alt='image3'/><h4>Industrial</h4>
          </div>
          <div class="col">
            <img src={aa4} class='img_center1' alt='image4'/><h4>Automative</h4>
          </div>
        </div>
      </div>
      <Quote />
      {/* <Service/> */}
      <Footer />
    </div>
  )
}

export default Home
