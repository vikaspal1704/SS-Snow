"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const products = [
  { id: "single_driveway", name: "Single Driveway", price: 49.99 },
  { id: "double_driveway", name: "Double Driveway", price: 99.99 },
  { id: "triple_driveway", name: "Triple Driveway", price: 149.99 },
  { id: "shared_driveway", name: "Shared Driveway", price: 199.99 },
];

export default function Checkout() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const router = useRouter();

  const handlePaymentClick = async () => {
    if (!selectedProduct) return alert("Please select a product");

    try {
      const response = await fetch("/api/checkout_sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: selectedProduct }),
      });

      const data = await response.json();
      if (response.ok) {
        // Redirect to Stripe Checkout
        router.push(data.url);
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="checkout-page">
      <h1>Select a Product</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <label>
              <input
                type="radio"
                name="product"
                value={product.id}
                onChange={() => setSelectedProduct(product.id)}
              />
              {product.name} - ${product.price}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={handlePaymentClick}>Pay</button>
    </div>
  );
}
