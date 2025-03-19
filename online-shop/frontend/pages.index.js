import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/products").then((res) => setProducts(res.data));
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Interneta veikals</h1>
      <div className="grid grid-cols-4 gap-6 mt-6">
        {products.map((product) => (
          <div key={product._id} className="border p-4">
            <img src={product.image} alt={product.name} className="h-40 w-full object-cover"/>
            <h2 className="text-lg">{product.name}</h2>
            <p className="text-gray-700">{product.price} €</p>
          </div>
        ))}
      </div>
    </div>
  );
}

