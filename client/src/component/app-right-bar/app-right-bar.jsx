import React, { Component } from 'react';
import './app-right-bar.css';

export default function AppRightBar() {
    return (
        <div className="app-right-bar">
            <div><a href="/client/public/index.html" className="btn btn-danger bg-gradient px-5 m-3">Checkout</a></div>
        </div>
    );
}