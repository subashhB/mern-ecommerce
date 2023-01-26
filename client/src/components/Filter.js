import React, { useState } from "react";
import { filterProducts } from "../actions/productActions";
import { useDispatch } from "react-redux";

export default function Filter() {
  const dispatch = useDispatch();
  const [searchKey, setsearchKey] = useState("");
  const [sort, setSort] = useState("popular");
  const [category, setCategory] = useState("all");
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-3 mt-2">
          <div className="form-group">
            <input
                type='text'
                className="form-control"
                placeholder="Search Products"
                id="searchkey"
                value={searchKey}
                onChange={(e) => {
                setsearchKey(e.target.value);
                }}
            />
          </div>
        </div>
        <div className="col-md-2 mt-4 ms-2">
          <select
            className="form-control"
            value={sort}
            onChange={(e) => {
              setSort(e.target.value);
            }}
          >
            <option value="popular">Popular</option>
            <option value="htl">High to Low</option>
            <option value="lth">Low to High</option>
          </select>
        </div>
        <div className="col-md-2 mt-4 ms-2">
          <select
            className="form-control"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option value="all">All</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="mobiles">Mobiles</option>
            <option value="games">Games</option>
          </select>
        </div>
        <div className="col-md-2 mt-2 ms-2">
          <button
            className="btn w-100 btn-dark mt-3 float-center"
            onClick={() => dispatch(filterProducts(searchKey, sort, category))}
          >
            Filter
          </button>
        </div>
      </div>
    </div>
  );
}
