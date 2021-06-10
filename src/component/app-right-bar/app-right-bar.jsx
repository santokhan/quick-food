import React, { Component } from 'react';
import './app-right-bar.css';

function MyOrder(name, price, amount) {
    return (
        <div className="row mx-2 rounded order-cart-round">
            <div className="col d-flex justify-content-between align-items-center p-4 bg-light my-2">
                <div className="icon-container bg-danger d-flex justify-content-center align-items-center bg-gradient">
                    <i className="fas fa-envelope"></i>
                </div>
                <div>x</div>
                <div>{amount}</div>
                <div className='d-flex flex-column align-items-center'>
                    <div><h6 className="text-secondary">{name}</h6></div>
                    <div><h6>{price}</h6></div>
                </div>
                <button className='btn btn-light px-1 py-0'>
                    <i className="fas fa-trash-alt text-danger"></i>
                </button>
            </div>
        </div>
    );
}

export default function AppRightBar() {
    return (
        <div className="app-right-bar">
            <div className="container-fluid">
                <div className="row">
                    <div className="col d-flex align-items-center">
                        <div>
                            <img src="https://thumbs.dreamstime.com/b/businessman-avatar-image-beard-hairstyle-male-profile-vector-illustration-178545831.jpg"
                                alt="profile" width="50" className="rounded-circle m-3" />
                        </div>
                        <div>
                            <h5 className='m-0'>Santo Khan</h5>
                            <i className='fas fa-star text-danger'></i>
                            <i className='fas fa-star text-danger'></i>
                            <i className='fas fa-star text-danger'></i>
                            <i className='fas fa-star text-light'></i>
                            <i className='fas fa-star text-light'></i>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-between align-items-center px-4">
                        <h5 className="my-lg-3">Your order</h5>
                        <button className='btn btn-outline-danger px-1 py-0'>
                            <span className='px-1'>Edit</span><i className='fas fa-edit px-1'></i>
                        </button>
                    </div>
                </div>
                {MyOrder("Chicken", "15.35$", 1)}

                {MyOrder("Egg", "15.35$", 2)}

                {MyOrder("Meat", "15.35$", 1)}

                {MyOrder("Meat", "15.35$", 3)}

                {MyOrder("Meat", "15.35$", 2)}
            </div>
            <div className="d-flex justify-content-center">
                <a href="/client/public/index.html" className="btn btn-danger bg-gradient px-5 m-3">Checkout</a>
            </div>
        </div>
    );
}