import React from 'react'
import banner1 from '../../../assets/banner-1.jpg'
import banner2 from '../../../assets/banner-2.jpg'
import banner3 from '../../../assets/banner-3.jpg'

const Container = () => {
  return (
    <>
    <div class="banner">

      <div class="container">

        <div class="slider-container has-scrollbar">

          <div class="slider-item">

            <img src={banner1} alt="women's latest fashion sale" class="banner-img"/>

            <div class="banner-content">

              {/* <p class="banner-subtitle">Trending item</p> */}

              <h2 class="banner-title">Light Up Your Celebrations with the Best Crackers in Town!</h2>
{/*
              <p class="banner-text">
                starting at &dollar; <b>20</b>.00
              </p>

              <a href="#" class="banner-btn">Shop now</a> */}

            </div>

          </div>

          <div class="slider-item">

            <img src={banner2} alt="modern sunglasses" class="banner-img"/>

            <div class="banner-content">

              {/* <p class="banner-subtitle">Trending accessories</p> */}

              <h2 class="banner-title">This Diwali, Let Every Spark Speak Joy!</h2>

              {/* <p class="banner-text">
                starting at &dollar; <b>15</b>.00
              </p>

              <a href="#" class="banner-btn">Shop now</a> */}

            </div>

          </div>

          <div class="slider-item">

            <img src={banner3} alt="new fashion summer sale" class="banner-img"/>

            <div class="banner-content">

              {/* <p class="banner-subtitle">Sale Offer</p> */}

              <h2 class="banner-title">Fun for the Whole Family – Safe & Colorful Crackers!</h2>
{/*
              <p class="banner-text">
                starting at &dollar; <b>29</b>.99
              </p>

              <a href="#" class="banner-btn">Shop now</a> */}

            </div>

          </div>

        </div>

      </div>

    </div>
    </>
  )
}

export default Container
