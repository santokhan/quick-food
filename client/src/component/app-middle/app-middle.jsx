import React, { Component } from 'react';
import './app-middle.css';

export default function AppMiddle() {
    return (
        <div className="app-middle">
            <div className="container-fluid">
                <div className="row justify-content-between align-items-center px-3">
                    <div className="col-lg-4 p-4">
                        <label className="sr-only">Username</label>
                        <div className="input-group m-0">
                            <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Username" />
                            <div className="input-group-prepend">
                                <div className="input-group-text"><i className="fas fa-search py-1"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 text-end">
                        <a href="/client/public/index.html" className="btn btn-light bg-gradient capsule">Add to cart</a>
                    </div>
                </div>
                <div className="row p-lg-3">
                    <div className="col-lg rounded bg-light bg-gradient p-lg-4">
                        <h5>Save Food</h5>
                        <h5>Delivery At 30Min.</h5>
                        <a href="/client/public/index.html" className="btn btn-danger bg-gradient py-0 px-2">Read more</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h5>Favorite Food Category</h5>
                        <div className="d-flex">
                            <div className="d-flex flex-column">
                                <i className="fas fa-envelope bg-danger icon-container p-2"></i>
                                <div>All</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
