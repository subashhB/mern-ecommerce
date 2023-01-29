import React from 'react'
import { Link , Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import AddProduct from './AddProduct'
import EditProduct from './EditProduct'
import ProductList from './ProductList'
import UsersList from './UsersList'

export default function AdminScreen() {
  return (
    <div>
        <div className="row justify-content-center mt-5">
            <div className="col-md-10">
                <ul className='admin p-2'>
                    <li><Link to='/admin/userslist' style={{color: 'black', textDecoration: 'none'}}>Users List</Link></li>
                    <li><Link to='/admin/productslist' style={{color: 'black' , textDecoration: 'none'}}>Products List</Link></li>
                    <li><Link to='/admin/addnewproduct' style={{color: 'black', textDecoration: 'none'}}>Add Product</Link></li>
                </ul>
                <Routes>
                    <Route path='userslist' element={<UsersList/>}></Route>
                    <Route path='productslist' element={<ProductList/>}></Route>
                    <Route path='addnewproduct' element={<AddProduct/>}></Route>
                    <Route path='editproduct/:id' element={<EditProduct/>}></Route>
                </Routes>
            </div>
        </div>
    </div>
  )
}
