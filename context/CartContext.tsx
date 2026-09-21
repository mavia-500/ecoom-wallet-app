"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type CartItem = {
  id: number;
  title: string;
  image: string;
  color: string;
  price: number;
  discountedPrice: number;
  category: string;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  removeItem: (id: number, category: string) => void;
  updateQuantity: (id: number, category: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isReady: boolean;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "hilyah-cart-v1";

function itemKey(id: number, category: string) {
  return `${category}:${id}`;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as CartItem[];
        if (Array.isArray(parsed)) setItems(parsed);
      }
    } catch {
      // ignore corrupt storage
    } finally {
      setIsReady(true);
    }
  }, []);

  useEffect(() => {
    if (!isReady) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, isReady]);

  const addItem = useCallback(
    (item: Omit<CartItem, "quantity">, quantity = 1) => {
      setItems((prev) => {
        const key = itemKey(item.id, item.category);
        const existing = prev.find(
          (p) => itemKey(p.id, p.category) === key,
        );
        if (existing) {
          return prev.map((p) =>
            itemKey(p.id, p.category) === key
              ? { ...p, quantity: p.quantity + quantity }
              : p,
          );
        }
        return [...prev, { ...item, quantity }];
      });
    },
    [],
  );

  const removeItem = useCallback((id: number, category: string) => {
    setItems((prev) =>
      prev.filter((p) => itemKey(p.id, p.category) !== itemKey(id, category)),
    );
  }, []);

  const updateQuantity = useCallback(
    (id: number, category: string, quantity: number) => {
      if (quantity <= 0) {
        removeItem(id, category);
        return;
      }
      setItems((prev) =>
        prev.map((p) =>
          itemKey(p.id, p.category) === itemKey(id, category)
            ? { ...p, quantity }
            : p,
        ),
      );
    },
    [removeItem],
  );

  const clearCart = useCallback(() => setItems([]), []);

  const totalItems = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items],
  );

  const totalPrice = useMemo(
    () =>
      items.reduce(
        (sum, item) =>
          sum + (item.price - item.discountedPrice) * item.quantity,
        0,
      ),
    [items],
  );

  const value = useMemo(
    () => ({
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      totalItems,
      totalPrice,
      isReady,
    }),
    [
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      totalItems,
      totalPrice,
      isReady,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within CartProvider");
  }
  return ctx;
}
