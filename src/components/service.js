import React from 'react'
import Header from './Header'
import b1 from './images/air freight 1.jpg'
import b2 from './images/ship-6794508_1920.jpg'
import b3 from './images/heavy-4070854_1920.jpg'
import b4 from './images/transport-5062062_1920.jpg'
import './css/service.css'
import ScrollReveal from 'scrollreveal'
import Footer from './Footer'


function Service() {
  ScrollReveal().reveal('.myimg', {
    delay: 50,
    duration: 2000,
    opacity: 0,
    distance: "100%",
    origin: "left",
    reset: true
  });
  
  ScrollReveal().reveal('.s_p', {
    delay: 50,
    duration: 2000,
    opacity: 0,
    distance: "100%",
    origin: "top",
    reset: true
  });
  

  return (<>
    <div>
      <Header />
      <div class="container text-center myservice">
        <div class="row">
          <div class="col">
            <img class='myimg' src={b1} alt='imagea'/>
          </div>
          <div class="col">
            <h2 class='s_h'>Air Freight</h2>
            <p class="s_p">No matter where you are shipping from India, we provide the crucial Block Space Agreement (BSA) and Guaranteed Space, Consolidation and deconsolidation, DDP & DDU, routing and priority cargo booking with cost-effective through all reputed airlines.Cirpe logistics aims to be your go-to resource for all things related to air freight. Whether you're a business owner looking to optimize your supply chain or an individual shipping personal items across the globe, we've got you covered with the latest information, insights, and best practices in the world of air freight. Happy shipping!
            </p>

          </div>
        </div>
      </div>

      <div class="container text-center myservice">
        <div class="row">
          <div class="col">
          <h2 class='s_h'>Ocean Freight</h2>
          <p class="s_p"> every ocean freight service takes your business a step ahead. Our global ocean freight specialists offer you specialised solutions in every main trade line to and from India and the destination ports. With our global NVOCC service partner, we can help you transport with our own House Bill of Lading (MTO & FMC).

LCL & FCL cargo with leading liners, making ocean freight shipping all the more easier along with the consolidation (groupage) and deconsolidation of cargo imports.

We also provide DDP & DDU for ocean transport to help you be at ease throughout the entire process.
            </p>
          </div>
          <div class="col">
            <img class='myimg' src={b2} alt='images'/>

          </div>
        </div>
      </div>
      <div class="container text-center myservice">
        <div class="row">
          <div class="col">
            <img class='myimg' src={b3} alt='imaged'/>
          </div>
          <div class="col">
          <h2 class='s_h'>Road Transport</h2>
          <p class="s_p"> Road Transport are an integral part of the transportation business. It is in fact a vital component of supply chain industry. Our transportation solutions include trucks, rail as well as state-of-the-art handling equipment. With our fleet of trucks from big to small we are capable to handle any size of Cargo.
            </p>
          </div>
        </div>
      </div>
      <div class="container text-center myservice">
        <div class="row">
          <div class="col">
          <h2 class='s_h'>Rail Transport</h2>
          <p class="s_p"> Delve into the world of freight transportation by rail. Understand how trains are used to move goods efficiently and sustainably over long distances, supporting global trade and supply chains. compared to other modes of transportation. From its lower environmental impact to its ability to move large volumes of goods and people, rail transport has a lot to offer.
          </p>
          </div>
          <div class="col">
            <img class='myimg' src={b4} alt='imagef'/>

          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>
  )
}

export default Service
