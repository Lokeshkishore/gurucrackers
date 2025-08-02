import React from 'react'
import {useState,useEffect} from 'react';
import axios from 'axios';

const Products = () => {
  const [productlist, setProductlist] = useState([]);
 const baseUrl = import.meta.env.VITE_API_BASE_URL;
  useEffect(() => {
    axios.get(`${baseUrl}/crackers/products`).then((response) => {
      if(response){
          response.data.data.forEach((item)=>{
              item.original_price =  item.price;
              item.display_price = Number(item.price) - ((item.offer_percent / 100) * Number(item.price) );
                item.buying_price = Number(item.price) - ((item.offer_percent / 100) * Number(item.price) );
              item.buying_quantity = 1;
              item.addCart = true;
          });
         setProductlist(response.data.data);
      }
    });
  },[]);

  const addToCart = (ele) => {
       var myCart = JSON.parse(localStorage.getItem('myCart') || '[]');
       myCart.push(ele);
       localStorage.setItem('myCart', JSON.stringify(myCart));
  }

  return (
    <>
    <div className="product-container">

      <div className="container">
        <div className="product-box">
          <div className="product-main">
            </div>
            <h2 className="title">Our Products</h2>
        <div className="product-grid">
            {productlist.map((product)=>{
              return   <div className="showcase">

                <div className="showcase-banner">
                  <img  src={product.image_url} alt="Mens Winter Leathers Jackets" width="300"
                    className="product-img default" />
                  {/* <img src={product.image_url} alt="Mens Winter Leathers Jackets" width="300"
                    className="product-img hover"/> */}

                  <p className="showcase-badge">{product.offer_percent}%</p>

                  <div className="showcase-actions">

                    {/* <button className="btn-action">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>

                    <button className="btn-action">
                      <ion-icon name="eye-outline"></ion-icon>
                    </button>

                    <button className="btn-action">
                      <ion-icon name="repeat-outline"></ion-icon>
                    </button> */}

                    {/* <button className="btn-action" onClick={() => addToCart(product)}>
                      <ion-icon name="bag-add-outline"></ion-icon>
                    </button> */}
                  </div>

                </div>

                <div className="showcase-content">

                  <a href="#" className="showcase-category">{product.name}</a>

                  {/* <a href="#">
                    <h3 className="showcase-title">Mens Winter Leathers Jackets</h3>
                  </a> */}
                   <div className='cart-parent'>
                    <div className="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                    </div>
                    <div>
                        <button className="cart-btn" onClick={() => addToCart(product)}>
                           Add to cart
                        </button>
                    </div>
                   </div>

                  <div className="price-box">
                    <p className="price">₹{product.display_price}</p>
                    <del>₹{product.original_price}</del>
                  </div>



                </div>

              </div>

            })}

          </div>

        </div>

      </div>

    </div>
    </>
  )
}

export default Products
