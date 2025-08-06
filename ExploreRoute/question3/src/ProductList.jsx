import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [categories, setCategories] = useState([]);
  const [sortOrder, setSortOrder] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setFiltered(data.products);
        const uniqueCategories = [
          ...new Set(data.products.map((p) => p.category)),
        ];
        setCategories(uniqueCategories);
      });
  }, []);

  useEffect(() => {
    let result = [...products];

    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (sortOrder === "low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "high") {
      result.sort((a, b) => b.price - a.price);
    }

    setFiltered(result);
  }, [products, selectedCategory, sortOrder]);

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Product Store</h2>

      <div style={{ marginBottom: "1rem" }}>
        <select onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>

        <select
          onChange={(e) => setSortOrder(e.target.value)}
          style={{ marginLeft: "1rem" }}
        >
          <option value="">Sort by Price</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>
      </div>

      <div style={{ display: "grid", gap: "1rem" }}>
        {filtered.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            style={{
              padding: "1rem",
              border: "1px solid #ccc",
              display: "block",
              textDecoration: "none",
              color: "black",
            }}
          >
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
