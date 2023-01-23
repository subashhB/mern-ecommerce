import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Navbar() {
  const cartReducer = useSelector((state) => state.cartReducer);
  const { cartItems } = cartReducer;
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            E-Shop
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {currentUser ? (
                <div className="dropdown me-2">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                <button className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    {currentUser.name}
                                </button>
                                <ul className="dropdown-menu dropdown-menu-start dropdown-menu-dark">
                                    <li><a className="dropdown-item" href="/profile">Profile</a></li>
                                    <li><a className="dropdown-item" href="/orders">Orders</a></li>
                                    <li><hr className="dropdown-divider" style="{{background:'white'}}"/></li>
                                    <li><a className="dropdown-item">Log Out</a></li>
                                </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                ) : (
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    Login
                  </a>
                </li>
              )}
              <li className="nav-item">
                <a className="nav-link" href="/cart">
                  <i className="fas fa-shopping-cart"></i> {cartItems.length}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
