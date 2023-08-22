import React from 'react'
import './css/product.css'
import plane from './images/plane.png';
import ship from './images/ship.png';
import car from './images/car.png'
import train from './images/train.png'

export default function Product() {
    return (<>
         
        <div class="container text-center mylist">
        <h1>Our Shipping Services</h1><br />
            <div class="row">
                <div class="col"><div class="card w-300 shadow-lg p-3 mb-5 bg-body-tertiary rounded myzoom">
                    <div class="card-body">
                        <h5 class="card-title">Air Freight</h5>
                        <p class="card-text"><img class='plane' src={plane} alt='image5'/><div><a class='mylink' href='Service'>International</a></div></p>
                    </div>
                </div></div>
                <div class="col"><div class="card w-300 shadow-lg p-3 mb-5 bg-body-tertiary rounded myzoom">
                    <div class="card-body">
                        <h5 class="card-title">Ocean Freight</h5>
                        <p class="card-text"><img src={ship} alt='image6'/><div><a class='mylink' href='Service'>International</a></div></p>
                        
                    </div>
                </div></div>
                <div class="col"><div class="card w-300 shadow-lg p-3 mb-5 bg-body-tertiary rounded myzoom">
                    <div class="card-body">
                        <h5 class="card-title">Road Transport</h5>
                        <p class="card-text"><img src={car} alt='image7'/><div><a class='mylink' href='Service'>All Over India</a></div></p>
                        
                    </div>
                </div></div>
                <div class="col"><div class="card w-300 shadow-lg p-3 mb-5 bg-body-tertiary rounded myzoom">
                    <div class="card-body">
                        <h5 class="card-title">Rail Transport</h5>
                        <p class="card-text"><img src={train} alt='image8'/><div><a class='mylink' href='Service'>All Over India</a></div></p>
                        
                    </div>
                </div></div>
            </div>
        </div>
    </>)
}

