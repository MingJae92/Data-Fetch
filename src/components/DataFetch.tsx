import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

interface RecipeData {
  id: string;
  title: string;
  price: string;
  description: string;
  category: string;
  image: string;
}

function DataFetch() {
  const [products, setProducts] = useState<RecipeData[]>([]);
  const productsUrl = "https://fakestoreapi.com/products";

  useEffect(() => {
    const getProductsData = async () => {
      try {
        const getProductData = await axios.get(productsUrl);
        const response = getProductData.data;
        console.log(response);

        setProducts(getProductData.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProductsData();
  }, []);

  return (
    <div>
      <h1>Data-Fetch</h1>
      {products.map((item) => (
        <div>
          <h1>{item.category}</h1>
          <p>{item.title}</p>
          <p>{item.description}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default DataFetch;
