import React, { Component } from 'react';
import './app-middle.css';

function FoodMenu(name, fas, fa, link) {
    return (
        <a href='/client/public/index.html' className="d-flex flex-column align-items-center m-3 text-decoration-none">
            <div className="icon-container bg-danger d-flex justify-content-center align-items-center bg-gradient">
                <i className={"fas fa-envelope" + fas + ' ' + fa}></i>
            </div>
            <small className='text-secondary'>{name}</small>
        </a>
    );
}

function FoodCard(name, price, amount) {
    return (
        <div className='food-card-menu p-lg-4 shadow d-flex flex-column align-items-center justify-content-start'>
            <div className='card-img-container'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlx--HiIy8aXL1fakcp-WuuJ5qSixBbFS3sA&usqp=CAU'
                    alt='card-img' height='130%' />
            </div>
            <div>
                <h5>{name}</h5>
                <div className='d-flex justify-content-between'>
                    <div>
                        <small><i className='fas fa-star text-warning'></i>{amount}</small>
                    </div>
                    <div><small>{price}</small></div>
                </div>
            </div>
        </div>
    );
}

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
                        <a href="/client/public/index.html" className="btn btn-outline-dark bg-gradient capsule">Add to cart</a>
                    </div>
                </div>
                {/* Banner */}
                <div className="row d-flex justify-content-between bg-gradient rounded banner m-3">
                    <div className="col-lg p-lg-4">
                        <div>
                            <h5>Save Food</h5>
                            <h5>Delivery At 30Min.</h5>
                            <a href="/client/public/index.html" className="btn btn-danger bg-gradient py-1 px-3 my-2">Read more</a>
                        </div>
                    </div>
                    <div className='col-lg text-end'>
                        <img src='https://image.freepik.com/free-vector/delivery-man-handling-parcel-package-box-customer-vector_218660-157.jpg'
                            alt='banner'
                            height='150' />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h6 className='mx-3'>Favorite Food Category</h6>
                        <div className="d-flex">
                            {FoodMenu("All", 'fas', 'fa-envelope')}

                            {FoodMenu("Pizza", 'fas', 'fa-envelope')}

                            {FoodMenu("Burger", 'fas', 'fa-envelope')}

                            {FoodMenu("Sandwich", 'fas', 'fa-envelope')}

                            {FoodMenu("Spaguetti", 'fas', 'fa-envelope')}

                            {FoodMenu("Tuna Fish", 'fas', 'fa-envelope')}

                            {FoodMenu("Grill", 'fas', 'fa-envelope')}
                        </div>
                    </div>
                </div>
                <div className='row my-5 py-5'>
                    <div className='col d-flex justify-content-evenly'>
                        {FoodCard("Quotto Formaggi", '$55.55', 4)}

                        {FoodCard('Quotto Formaggi', '$55.55', 3)}

                        {FoodCard('Quotto Formaggi', '$55.55', 3)}

                        {FoodCard('Quotto Formaggi', '$55.55', 4)}
                    </div>
                </div>
            </div>
        </div>
    );
}
