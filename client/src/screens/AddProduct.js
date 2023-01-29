import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function AddProduct() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState();
  const [countInStock, setCountInStock] = useState();
  const [imageUrl, setImageUrl] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch()

  const addProduct = (e)=>{
    e.preventDefault();
    const product={
      name: name,
      price: price,
      countInStock: countInStock,
      imageUrl: imageUrl,
      description: description,
      category: category,
    }
    console.log(product);
  }
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h3>Add Product</h3>
          <form onSubmit={addProduct}>
            <input type="text" className='form-control mb-2 mr-sm-2' placeholder='Product Name' required value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <input type="text" className='form-control mb-2 mr-sm-2' placeholder='Price' required value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
            <input type="text" className='form-control mb-2 mr-sm-2' placeholder='Description' required value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
            <input type="text" className='form-control mb-2 mr-sm-2' placeholder='Image URL' required value={imageUrl} onChange={(e)=>{setImageUrl(e.target.value)}}/>
            <input type="text" className='form-control mb-2 mr-sm-2' placeholder='Category' required value={category} onChange={(e)=>{setCategory(e.target.value)}}/>
            <input type="text" className='form-control mb-2 mr-sm-2' placeholder='Count In Stock' required value={countInStock} onChange={(e)=>{setCountInStock(e.target.value)}}/>
            <button type='submit' className='btn btn-dark mt-3 float-start'>Add Product</button>
          </form>
        </div>
      </div>
    </div>
  )
}
