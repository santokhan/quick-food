import React, { Component } from 'react';
import './app-left-bar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AppLeftBar() {
    return (
        <div className="app-left-bar d-flex flex-column align-items-centerbg-light bg-gradient">
            <div className="logo-container border-bottom py-lg-3 px-lg-4 bg-danger">
                <img src="https://img-premium.flaticon.com/png/512/2922/2922037.png?token=exp=1622035407~hmac=9309c9382228014e64ed0c56d0087a89"
                    alt="logo" width="36" />
            </div>
            <div className="py-2"></div>
            <a href="/client/public/index.html" className="text-decoration-none p-lg-3 my-lg-3 mx-lg-4 icon-container text-light bg-danger bg-gradient"><i className="fas fa-home"></i></a>
            <a href="/client/public/index.html" className="text-decoration-none p-lg-3 my-lg-3 mx-lg-4 icon-container text-light bg-warning bg-gradient"><i className="fas fa-user"></i></a>
            <a href="/client/public/index.html" className="text-decoration-none p-lg-3 my-lg-3 mx-lg-4 icon-container text-light bg-primary bg-gradient"><i className="fas fa-heart"></i></a>
            <a href="/client/public/index.html" className="text-decoration-none p-lg-3 my-lg-3 mx-lg-4 icon-container text-light bg-success bg-gradient"><i className="fas fa-envelope"></i></a>
            <a href="/client/public/index.html" className="text-decoration-none p-lg-3 my-lg-3 mx-lg-4 icon-container text-light bg-info bg-gradient"><i className="fas fa-globe"></i></a>
            <a href="/client/public/index.html" className="text-decoration-none p-lg-3 my-lg-3 mx-lg-4 icon-container text-light bg-secondary bg-gradient"><i className="fas fa-info"></i></a>
        </div>
    );
}