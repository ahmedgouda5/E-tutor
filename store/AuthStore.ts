// store/useFormStore.ts
import { create } from "zustand";

interface FormData {
  firstName?: string;
  lastName?: string;
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  [key: string]: unknown; // Allow additional dynamic fields
}

interface AuthStoreState {
  formData: FormData;
  setFormData: (data: FormData) => void;
  updateField: (key: string, value: unknown) => void;
}

export const AuthStore = create<AuthStoreState>((set) => ({
  formData: {},

  setFormData: (data: FormData) => set({ formData: data }),

  updateField: (key: string, value: unknown) =>
    set((state) => ({
      formData: { ...state.formData, [key]: value },
    })),
}));
