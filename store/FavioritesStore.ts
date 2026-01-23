import { ICourse } from "@/lib/data";
import { create } from "zustand";

interface FavioritesState {
  faviorites: ICourse[];
  addFaviorite: (item: ICourse) => void;
  removeFaviorite: (id: number) => void;
}

export const useFavioritesStore = create<FavioritesState>((set) => ({
  faviorites: [],
  addFaviorite: (item) =>
    set((state) => ({ faviorites: [...state.faviorites, item] })),
  removeFaviorite: (id) =>
    set((state) => ({
      faviorites: state.faviorites.filter((faviorite) => faviorite.id !== id),
    })),
}));
