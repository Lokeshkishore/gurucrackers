import {useState,useEffect} from 'react';
import React from 'react'
import "./OrderForm.css"
import axios from 'axios';
import orderConfirm from '../../../assets/order_confirmed.jpg'

const OrderForm = () => {
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    const [cartlist,setCartList] = useState([]);
    const [orderForm,setOrderForm] = useState({
    name:'',
    email:'',
    phone:'',
    address:'',
   });
    const [orderPlaced, setOrderPlaced] = useState(false);
    useEffect(() => {
        const storedItems = localStorage.getItem('orderCart');
        if (storedItems) {
          setCartList(JSON.parse(storedItems));
        }
      }, []);
      const totalPrice = cartlist.reduce((sum, item) => sum + Number(item.buying_price), 0);

      const handleChange = (e) => {
     const { name,value} = e.target;
      setOrderForm((prev) => ({
        ...prev,
                [name]: value,
            }));
        };

        const placeOrder=()=>{
            event.preventDefault();
            // orderForm['cartlist'] = JSON.stringify(cartlist);
            // orderForm['total_price'] = totalPrice;
            var data={
                form:JSON.stringify(orderForm),
                cartlist:JSON.stringify(cartlist),
                total_price:totalPrice
            }
              const res = axios.post(`${baseUrl}/crackers/add-order`, data, {
                headers: {
                  'Content-Type': 'application/json',
                },
              })
              .then(function (response) {
                    if(response.data.success){
                       setOrderPlaced(true);
                    }
               });

        }

    return (
        <>
        <div className='form-parrent'>
            <div  className='order-detail-div'>
                <h4>Billing Details</h4>
                <form>
                <fieldset>
                    <div className="fs-field col-span-full">
                    <label className="fs-label" htmlFor="customer-name">Full Name</label>
                    <input
                        className="fs-input"
                        id="customer-name"
                        name="name"
                        placeholder="Enter your full name"
                        required onChange={handleChange}  value={orderForm.name}
                    />

                    </div>
                    <div className="fs-field col-span-full">
                    <label className="fs-label" htmlFor="customer-email">Email Address</label>
                    <input
                        className="fs-input"
                        id="customer-email"
                        name="email"
                        placeholder="Enter your email address" onChange={handleChange}  value={orderForm.email}
                        required
                    />
                    </div>
                    <div className="fs-field col-span-full">
                    <label className="fs-label" htmlFor="customer-phone">Phone Number</label>
                    <input
                        className="fs-input"
                        id="customer-phone"
                        name="phone"
                        placeholder="Enter your phone number" onChange={handleChange}  value={orderForm.phone}
                        required
                    />
                    </div>
                    <div className="fs-field col-span-full">
                    <label className="fs-label" htmlFor="delivery-address">Delivery Address</label>
                    <textarea
                        className="fs-textarea"
                        id="delivery-address"
                        name="address"
                        placeholder="Enter your delivery address" onChange={handleChange}  value={orderForm.address}
                        required
                    ></textarea>
                    </div>
                </fieldset>
                {/* <fieldset>
                    <div className="fs-field">
                    <label className="fs-label" for="shipping-method">Shipping Method</label>
                    <select
                        className="fs-select"
                        id="shipping-method"
                        name="shipping-method"
                        required
                    >
                        <option value="standard">Standard</option>
                        <option value="express">Express</option>
                        <option value="pickup">Pickup</option>
                    </select>
                    </div>
                    <div className="fs-field">
                    <label className="fs-label" for="delivery-date">
                        Preferred Delivery Date
                    </label>
                    <input
                        className="fs-input"
                        id="delivery-date"
                        name="delivery-date"
                        placeholder="Enter your preferred delivery date in MM-DD-YYYY format"
                    />
                    </div>
                    <div className="fs-field col-span-full">
                    <label className="fs-label" for="delivery-instructions">
                        Delivery Instructions
                    </label>
                    <textarea
                        className="fs-textarea"
                        id="delivery-instructions"
                        name="delivery-instructions"
                        placeholder="Enter any special delivery instructions (optional)"
                    ></textarea>
                    </div>
                </fieldset> */}
                <div className="fs-checkbox-field">
                    <div className="fs-checkbox-wrapper">
                    <input
                        className="fs-checkbox"
                        id="terms-agreement"
                        name="terms-agreement"
                        required
                        type="checkbox"
                        value="agree"
                    />
                    </div>
                    <div>
                    <label className="fs-label" for="terms-agreement">
                        Agree to Terms and Conditions
                    </label>
                    </div>
                </div>
                </form>
            </div>
             <div className='order-detail-div'>
                <h4>Order details</h4>
                  {!orderPlaced&&(
                    <table className="content-table">
                        <thead>
                            <tr>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartlist.map((product)=>{
                              return <tr>
                                    <td>{product.name}</td>
                                    <td className='cart-input-td'>
                                        <span>{product.buying_quantity} </span>
                                        <span><ion-icon name="close-sharp"></ion-icon></span>
                                        <span>{product.display_price} </span>
                                    </td>
                                    <td>{product.buying_price}</td>
                                    </tr>
                            })}
                                    <tr>
                                    <td>Total</td>
                                    <td></td>
                                    <td>{totalPrice}</td>

                                    </tr>
                                    <tr>
                                     <td colSpan={4}><button onClick={() => placeOrder(cartlist)}className='checkout-btn'>Place Order</button></td>
                                    </tr>
                        </tbody>
                    </table>
                    )
                    }
                  {orderPlaced&&(
                  <img src={orderConfirm} className="order-confirm"/>
                  )
                }
            </div>
        </div>

        </>
    )
}

export default OrderForm
