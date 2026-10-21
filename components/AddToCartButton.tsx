"use client";

import { useState } from "react";
import { useCart, type CartItem } from "@/context/CartContext";

type AddToCartButtonProps = {
  item: Omit<CartItem, "quantity">;
  className?: string;
};

export default function AddToCartButton({
  item,
  className = "btn-primary w-full rounded-md py-2 text-xs sm:py-2.5 sm:text-sm",
}: AddToCartButtonProps) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addItem(item);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1500);
  };

  return (
    <button type="button" onClick={handleAddToCart} className={className}>
      {added ? "Added ✓" : "Add to cart"}
    </button>
  );
}
