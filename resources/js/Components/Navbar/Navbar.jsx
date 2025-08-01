import {useState,useEffect,useNavigate} from 'react';
import './Navbar.css'
import logo from '../../../assets/logo.svg'

const Navbar = () => {
 const [cartlist,setCartList] = useState([]);
 const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const storedItems = localStorage.getItem('myCart');
    if (storedItems) {
      setCartList(JSON.parse(storedItems));
    }
  }, []);
   const toggleSidebar = () => setIsOpen(!isOpen);
    const changeQuantity=(product,id,type)=>{
    if(type=='plus'){
        document.getElementById(id).value = Number(document.getElementById(id).value) +1;
    }
    else if(type=='minus'){
        document.getElementById(id).value = Number(document.getElementById(id).value) - 1;
    }
    var priceTag = Number(document.getElementById(id).value) * Number(product.price);
    setCartList(prevItems =>
      prevItems.map(item =>
        item.id === product.id ? { ...item, display_price: priceTag,buying_quantity:Number(document.getElementById(id).value)} : item
      )
    );
  }
   const totalPrice = cartlist.reduce((sum, item) => sum + Number(item.display_price), 0);

   const checkOutCart=(cartlist)=>{
     localStorage.setItem('orderCart', JSON.stringify(cartlist));
     window.location.href = '/order'
   }
  return (
         <header>
            <div className="header-main">

            <div className="container">

                <a href="#" className="header-logo">
                <img src={logo} alt="Guru's logo" width="200" height="70"/>
                </a>

                <div className="header-search-container">

                <input type="search" name="search" className="search-field" placeholder="Enter your product name..."/>

                <button className="search-btn">
                    <ion-icon name="search-outline"></ion-icon>
                </button>

                </div>

                <div className="header-user-actions">

                <button className="action-btn altmenu" onClick={toggleSidebar}>
                    <ion-icon name="bag-handle-outline"></ion-icon>
                    <span className="count">{cartlist.length}</span>
                </button>

                </div>

            </div>

            </div>


            <div className="mobile-bottom-navigation">


            <button className="action-btn">
                <ion-icon name="home-outline"></ion-icon>
            </button>

            <button className="action-btn">
                <ion-icon name="bag-handle-outline"></ion-icon>
                <span className="count">0</span>
            </button>



            </div>

            {/* <div id="mySidepanel" className="sidepanel">
            <a href="javascript:void(0)" className="closebtn altmenu">×</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
            </div> */}

            <nav className="mobile-navigation-menu  has-scrollbar" data-mobile-menu>

            <div className="menu-top">
                <h2 className="menu-title">Menu</h2>

                <button className="menu-close-btn" data-mobile-menu-close-btn>
                <ion-icon name="close-outline"></ion-icon>
                </button>
            </div>

            <ul className="mobile-menu-category-list">

                <li className="menu-category">
                <a href="#" className="menu-title">Home</a>
                </li>

                <li className="menu-category">

                <button className="accordion-menu" data-accordion-btn>
                    <p className="menu-title">Men's</p>

                    <div>
                    <ion-icon name="add-outline" className="add-icon"></ion-icon>
                    <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                    </div>
                </button>

                <ul className="submenu-category-list" data-accordion>

                    <li className="submenu-category">
                    <a href="#" className="submenu-title">Shirt</a>
                    </li>

                    <li className="submenu-category">
                    <a href="#" className="submenu-title">Shorts & Jeans</a>
                    </li>

                    <li className="submenu-category">
                    <a href="#" className="submenu-title">Safety Shoes</a>
                    </li>

                    <li className="submenu-category">
                    <a href="#" className="submenu-title">Wallet</a>
                    </li>

                </ul>

                </li>

                <li className="menu-category">

                <button className="accordion-menu" data-accordion-btn>
                    <p className="menu-title">Women's</p>

                    <div>
                    <ion-icon name="add-outline" className="add-icon"></ion-icon>
                    <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                    </div>
                </button>

                <ul className="submenu-category-list" data-accordion>

                    <li className="submenu-category">
                    <a href="#" className="submenu-title">Dress & Frock</a>
                    </li>

                    <li className="submenu-category">
                    <a href="#" className="submenu-title">Earrings</a>
                    </li>

                    <li className="submenu-category">
                    <a href="#" className="submenu-title">Necklace</a>
                    </li>

                    <li className="submenu-category">
                    <a href="#" className="submenu-title">Makeup Kit</a>
                    </li>

                </ul>

                </li>

                <li className="menu-category">

                <button className="accordion-menu" data-accordion-btn>
                    <p className="menu-title">Jewelry</p>

                    <div>
                    <ion-icon name="add-outline" className="add-icon"></ion-icon>
                    <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                    </div>
                </button>

                <ul className="submenu-category-list" data-accordion>

                    <li className="submenu-category">
                    <a href="#" className="submenu-title">Earrings</a>
                    </li>

                    <li className="submenu-category">
                    <a href="#" className="submenu-title">Couple Rings</a>
                    </li>

                    <li className="submenu-category">
                    <a href="#" className="submenu-title">Necklace</a>
                    </li>

                    <li className="submenu-category">
                    <a href="#" className="submenu-title">Bracelets</a>
                    </li>

                </ul>

                </li>

                <li className="menu-category">

                <button className="accordion-menu" data-accordion-btn>
                    <p className="menu-title">Perfume</p>

                    <div>
                    <ion-icon name="add-outline" className="add-icon"></ion-icon>
                    <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                    </div>
                </button>

                <ul className="submenu-category-list" data-accordion>

                    <li className="submenu-category">
                    <a href="#" className="submenu-title">Clothes Perfume</a>
                    </li>

                    <li className="submenu-category">
                    <a href="#" className="submenu-title">Deodorant</a>
                    </li>

                    <li className="submenu-category">
                    <a href="#" className="submenu-title">Flower Fragrance</a>
                    </li>

                    <li className="submenu-category">
                    <a href="#" className="submenu-title">Air Freshener</a>
                    </li>

                </ul>

                </li>

                <li className="menu-category">
                <a href="#" className="menu-title">Blog</a>
                </li>

                <li className="menu-category">
                <a href="#" className="menu-title">Hot Offers</a>
                </li>

            </ul>

            <div className="menu-bottom">

                <ul className="menu-category-list">

                <li className="menu-category">

                    <button className="accordion-menu" data-accordion-btn>
                    <p className="menu-title">Language</p>

                    <ion-icon name="caret-back-outline" className="caret-back"></ion-icon>
                    </button>

                    <ul className="submenu-category-list" data-accordion>

                    <li className="submenu-category">
                        <a href="#" className="submenu-title">English</a>
                    </li>

                    <li className="submenu-category">
                        <a href="#" className="submenu-title">Espa&ntilde;ol</a>
                    </li>

                    <li className="submenu-category">
                        <a href="#" className="submenu-title">Fren&ccedil;h</a>
                    </li>

                    </ul>

                </li>

                <li className="menu-category">
                    <button className="accordion-menu" data-accordion-btn>
                    <p className="menu-title">Currency</p>
                    <ion-icon name="caret-back-outline" className="caret-back"></ion-icon>
                    </button>

                    <ul className="submenu-category-list" data-accordion>
                    <li className="submenu-category">
                        <a href="#" className="submenu-title">USD &dollar;</a>
                    </li>

                    <li className="submenu-category">
                        <a href="#" className="submenu-title">EUR &euro;</a>
                    </li>
                    </ul>
                </li>

                </ul>

                <ul className="menu-social-container">

                <li>
                    <a href="#" className="social-link">
                    <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                </li>

                <li>
                    <a href="#" className="social-link">
                    <ion-icon name="logo-twitter"></ion-icon>
                    </a>
                </li>

                <li>
                    <a href="#" className="social-link">
                    <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                </li>

                <li>
                    <a href="#" className="social-link">
                    <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                </li>

                </ul>

            </div>

            </nav>

              <div className={`cartListBar ${isOpen ? 'open' : ''}`}>
                <div className='rightside-title'>
                    <div><h4>Your Cart</h4></div>
                    <div onClick={toggleSidebar}><ion-icon name="close-sharp"></ion-icon></div>
                </div>
                <div>
                    <table className="content-table">
                        <thead>
                            <tr>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartlist.map((product)=>{
                              return <tr>
                                    <td>{product.name}</td>
                                    <td className='cart-input-td'>
                                        <span onClick={() => changeQuantity(product,`quantity${product.id}`,'minus')}> <ion-icon name="remove-outline"></ion-icon></span>
                                        <span><input type="number" id={`quantity${product.id}`} value={product.buying_quantity} className='cart-input'/></span>
                                        <span onClick={() => changeQuantity(product,`quantity${product.id}`,'plus')}> <ion-icon name="add-outline"></ion-icon></span>
                                    </td>
                                    <td>{product.display_price}</td>
                                    <td> <div><ion-icon name="close-sharp"></ion-icon></div></td>
                                    </tr>
                            })}
                                    <tr>
                                    <td>Total</td>
                                    <td></td>
                                    <td>{totalPrice}</td>
                                    <td></td>
                                    </tr>
                                    <tr>
                                     <td colSpan={4}><button onClick={() => checkOutCart(cartlist)}className='checkout-btn'>Continue to checkout</button></td>
                                    </tr>
                        </tbody>
                    </table>
                </div>
             </div>

        </header>
  )
}

export default Navbar
