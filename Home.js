import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch products from the backend API
        axios.get("http://localhost:5000/api/products")
            .then(response => setProducts(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold mb-4">Our Superhero T-Shirts</h2>
            <div className="grid grid-cols-3 gap-4">
                {products.map(product => (
                    <div key={product._id} className="border p-4 rounded">
                        <img src={product.images[0]} alt={product.name} className="w-full h-40 object-cover" />
                        <h3 className="text-xl font-bold mt-2">{product.name}</h3>
                        <p className="text-gray-700">{product.category}</p>
                        <p className="text-blue-700 font-bold">${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
