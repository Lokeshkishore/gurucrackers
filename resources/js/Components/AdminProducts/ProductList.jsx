import React, { useState ,useEffect} from 'react';
import './ProductList.css'
import axios from 'axios';

const ProductList = () => {

 const [productlist, setProductlist] = useState([]);
 const baseUrl = import.meta.env.VITE_API_BASE_URL;
  useEffect(() => {
    axios.get(`${baseUrl}/crackers/products`).then((response) => {
      if(response){
          response.data.data.forEach((item)=>{
              item.display_price = item.price;
              item.buying_quantity = 1;
              item.addCart = true;
          });
         setProductlist(response.data.data);
      }
    });
  },[]);

 const [formData, setFormData] = useState({
    name: '',
    price: '',
    quantity: '',
    discount:'',
    image: null,
  });
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

   const handleChange = (e) => {
     const { name, type, value, files } = e.target;

    if (type === 'file') {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

  };

  const addNewProductData=()=>{
   event.preventDefault();
    const data = new FormData();
    data.append('name', formData.name);
    data.append('price', formData.price);
    data.append('quantity', formData.quantity);
    data.append('discount', formData.discount);
    data.append('image', formData.image);

     const res = axios.post(`${baseUrl}/crackers/add-product`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(function (response) {
       setProductlist(response.data.data);
    });
  }

  return (
    <div>
        <div className='title-div'>
            <div>
               <h1>Product List</h1>
            </div>
            <div>
                <button className='btn' onClick={toggleSidebar}>
                    {isOpen ? 'Close' : 'Open'} Sidebar
                </button>
            </div>
        </div>
           <table className="content-table">
                        <thead>
                            <tr>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {productlist.map((product)=>{
                              return <tr>
                                    <td>{product.name}</td>
                                    <td>  <img  src={product.image_url} alt={product.name} style={{ height: '100px', width: '100px'}} /></td>
                                    <td>{product.quantity}</td>
                                    <td>{product.price}</td>
                                    <td> <div><ion-icon name="close-sharp"></ion-icon></div></td>
                                    </tr>
                            })}
                        </tbody>
                    </table>
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className='rightside-title'>
                    <div><h4>Add Product</h4></div>
                    <div onClick={toggleSidebar}><ion-icon name="close-sharp"></ion-icon></div>
                </div>
                <div className='form-div'>
                    <form action="" onSubmit={addNewProductData}>
                        <div className='input-div'>
                            <label className='input-label'>Name</label>
                            <div className="input-group mb-3">
                            <input type="text" className="form-input" name="name" placeholder="name" onChange={handleChange} value={formData.name}/>
                            </div>
                        </div>
                        <div className='input-div'>
                        <label htmlFor="">Price</label>
                            <div className="input-group mb-3">
                            <input type="number" className="form-input" onChange={handleChange} value={formData.price}  name="price" placeholder="price"/>
                            </div>
                        </div>
                        <div className='input-div'>
                            <label htmlFor="">Quantity</label>
                                <div className="input-group mb-3">
                                <input type="number" name="quantity" onChange={handleChange} value={formData.quantity} className="form-input" placeholder="quantity"/>
                                </div>
                        </div>
                         <div className='input-div'>
                            <label htmlFor="">Discount percentage</label>
                                <div className="input-group mb-3">
                                <input type="number" name="discount" onChange={handleChange} value={formData.discount} className="form-input" placeholder="discount"/>
                                </div>
                        </div>
                        <div className='input-div'>
                        <label htmlFor="">Image</label>
                            <div className="input-group mb-3">
                            <input type="file" className="" name="image" onChange={handleChange} placeholder="name"/>
                            </div>
                        </div>
                        <div className="d-flex gap-2">
                            <button type="submit" className="btn">Save</button>
                        </div>
                    </form>
                </div>

        </div>
    </div>
  )
}

export default ProductList
