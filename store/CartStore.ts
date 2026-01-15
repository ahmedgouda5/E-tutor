import { ICourse } from "@/lib/data";
import { create } from "zustand";

interface CartItem extends ICourse {
  quantity: number;
}

interface CartStoreState {
  cartItems: CartItem[];
  addToCart: (item: ICourse) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
}

export const UseCartStore = create<CartStoreState>((set) => ({
  cartItems: [],
  addToCart: (item: ICourse) => {
    set((state) => {
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        return {
          cartItems: state.cartItems.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          ),
        };
      }
      return { cartItems: [...state.cartItems, { ...item, quantity: 1 }] };
    });
  },
  removeFromCart: (id: number) => {
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== id),
    }));
  },
  updateQuantity: (id: number, quantity: number) => {
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      ),
    }));
  },
  clearCart: () => {
    set(() => ({ cartItems: [] }));
  },
}));
