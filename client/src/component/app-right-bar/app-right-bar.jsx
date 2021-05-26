import React, { Component } from 'react';
import './app-right-bar.css';

function MyOrder(name, price, amount) {
    return (
        <div className="row">
            <div className="col d-flex justify-content-between align-items-center p-4 bg-light my-2">
                <div className="icon-container bg-danger d-flex justify-content-center align-items-center bg-gradient">
                    <i className="fas fa-envelope"></i>
                </div>
                <div>x</div>
                <div>{amount}</div>
                <div>
                    <div><strong className="text-secondary">{name}</strong></div>
                    <div>
                        <strong>{price}</strong>
                    </div>
                </div>
                <div>
                    <i className="fas fa-trash-alt text-danger"></i>
                </div>
            </div>
        </div>
    );
}

export default function AppRightBar() {
    return (
        <div className="app-right-bar">
            <div className="container-fluid">
                <div className="row">
                    <div className="col d-flex justify-content-between align-items-center px-4">
                        <h4 className="m-0">Your order</h4>
                        <p className="m-0">Edit</p>
                    </div>
                </div>
                {MyOrder("Chicken", "15.35$", 1)}

                {MyOrder("Egg", "15.35$", 2)}

                {MyOrder("Meat", "15.35$", 2)}

                <div className="row">
                    <div className="col d-flex justify-content-between align-items-center p-4 bg-light my-2">
                        <div className="icon-container bg-danger d-flex justify-content-center align-items-center bg-gradient">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div>x</div>
                        <div>1</div>
                        <div>
                            <div><strong className="text-secondary">Chicken</strong></div>
                            <div>
                                <strong>15.35$</strong>
                            </div>
                        </div>
                        <div>
                            <i className="fas fa-trash-alt text-danger"></i>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-between align-items-center p-4 bg-light my-2">
                        <div className="icon-container bg-danger d-flex justify-content-center align-items-center bg-gradient">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div>x</div>
                        <div>1</div>
                        <div>
                            <div><strong className="text-secondary">Chicken</strong></div>
                            <div>
                                <strong>15.35$</strong>
                            </div>
                        </div>
                        <div>
                            <i className="fas fa-trash-alt text-danger"></i>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-between align-items-center p-4 bg-light my-2">
                        <div className="icon-container bg-danger d-flex justify-content-center align-items-center bg-gradient">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div>x</div>
                        <div>1</div>
                        <div>
                            <div><strong className="text-secondary">Chicken</strong></div>
                            <div>
                                <strong>15.35$</strong>
                            </div>
                        </div>
                        <div>
                            <i className="fas fa-trash-alt text-danger"></i>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-between align-items-center p-4 bg-light my-2">
                        <div className="icon-container bg-danger d-flex justify-content-center align-items-center bg-gradient">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div>x</div>
                        <div>1</div>
                        <div>
                            <div><strong className="text-secondary">Chicken</strong></div>
                            <div>
                                <strong>15.35$</strong>
                            </div>
                        </div>
                        <div>
                            <i className="fas fa-trash-alt text-danger"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <a href="/client/public/index.html" className="btn btn-danger bg-gradient px-5 m-3">Checkout</a>
            </div>
        </div>
    );
}