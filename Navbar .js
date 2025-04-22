import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-blue-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Superhero T-Shirt Store</h1>
                <ul className="flex space-x-4">
                    <li><Link to="/" className="hover:underline">Home</Link></li>
                    <li><Link to="/cart" className="hover:underline">Cart</Link></li>
                    <li><Link to="/checkout" className="hover:underline">Checkout</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;