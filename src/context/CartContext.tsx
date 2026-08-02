"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Product, products } from "@/lib/data";

export type CheckoutOption = "pay" | "inspection";
export type DeliveryMethod = "pickup" | "delivery";

export interface CartItem extends Product {
  quantity: number;
}

export interface CheckoutState {
  option: CheckoutOption;
  deliveryMethod: DeliveryMethod;
  deliveryAddress: string;
  inspectionDate: string;
  inspectionTime: string;
  paymentMethod: string;
}

interface CartContextValue {
  items: CartItem[];
  cartCount: number;
  checkout: CheckoutState;
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  setCheckout: (updates: Partial<CheckoutState>) => void;
  subtotal: number;
  deliveryFee: number;
  total: number;
}

const CartContext = createContext<CartContextValue | null>(null);

const CART_KEY = "czuchi-cart";
const CHECKOUT_KEY = "czuchi-checkout";

const defaultCheckout: CheckoutState = {
  option: "pay",
  deliveryMethod: "pickup",
  deliveryAddress: "",
  inspectionDate: "",
  inspectionTime: "",
  paymentMethod: "transfer",
};

const parsePrice = (price: string) =>
  Number(price.replace(/[^0-9]/g, "")) || 0;

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [checkout, setCheckoutState] = useState<CheckoutState>(defaultCheckout);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const storedCart = localStorage.getItem(CART_KEY);
    const storedCheckout = localStorage.getItem(CHECKOUT_KEY);
    if (storedCart) {
      try {
        setItems(JSON.parse(storedCart));
      } catch {
        localStorage.removeItem(CART_KEY);
      }
    }
    if (storedCheckout) {
      try {
        setCheckoutState(JSON.parse(storedCheckout));
      } catch {
        localStorage.removeItem(CHECKOUT_KEY);
      }
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(CART_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(CHECKOUT_KEY, JSON.stringify(checkout));
  }, [checkout, hydrated]);

  const addToCart = useCallback((product: Product) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const updateQuantity = useCallback((id: number, quantity: number) => {
    if (quantity < 1) return;
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const setCheckout = useCallback((updates: Partial<CheckoutState>) => {
    setCheckoutState((prev) => ({ ...prev, ...updates }));
  }, []);

  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce(
    (sum, item) => sum + parsePrice(item.price) * item.quantity,
    0
  );
  const deliveryFee =
    checkout.option === "pay" && checkout.deliveryMethod === "delivery"
      ? 500000
      : 0;
  const total = subtotal + deliveryFee;

  const value = useMemo(
    () => ({
      items,
      cartCount,
      checkout,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      setCheckout,
      subtotal,
      deliveryFee,
      total,
    }),
    [
      items,
      cartCount,
      checkout,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      setCheckout,
      subtotal,
      deliveryFee,
      total,
    ]
  );

  if (!hydrated) return null;

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}

export const sampleProduct = products[0];
