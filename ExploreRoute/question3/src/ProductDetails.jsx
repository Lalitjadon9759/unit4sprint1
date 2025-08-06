import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <Link to="/">← Back</Link>
      <h2>{product.title}</h2>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Brand:</strong> {product.brand}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p>{product.description}</p>
      <img src={product.thumbnail} alt={product.title} width="200" />
    </div>
  );
};

export default ProductDetail;
