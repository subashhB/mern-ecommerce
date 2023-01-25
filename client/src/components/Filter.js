import React, { useState } from 'react'

export default function Filter() {
    const[searchkey, setSearchkey] = useState();
    const [sort, setSort] = useState('popular');
    const [category, setCategory] = useState('all');
  return (
    <div>
        <div className="row justify-content-center">
            <div className="col-md-3 mt-2 ms-2">
                <input type='text' placeholder="Search Products" className="form-control"/>
            </div>
            <div className="col-md-2 mt-4 ms-2">
                <select className='form-control' value={sort} onChange={(e)=>{setSort(e.target.value)}}>
                    <option value="popular">Popular</option>
                    <option value="htl">High to Low</option>
                    <option value="lth">Low to High</option>
                </select>
            </div>
            <div className="col-md-2 mt-4 ms-2">
                <select className='form-control' value={category} onChange={(e)=>{setCategory(e.target.value)}}>
                    <option value="all">All</option>
                    <option value="electronics">Electronics</option>
                    <option value="fashion">Fashion</option>
                    <option value="mobiles">Mobiles</option>
                    <option value="games">Games</option>
                </select>
            </div>
            <div className="col-md-2 mt-2 ms-2">
                <button className='btn w-100 btn-dark mt-3 float-center'>Filter</button>
            </div>
        </div>
    </div>
  )
}
