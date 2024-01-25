import { create } from 'zustand';

const useAuthStore = create<{
  mode: string;
  open: boolean;
  setMode: (_: string) => void;
  setOpen: (_: boolean) => void;
}>((set) => ({
  mode: 'login',
  open: false,
  setMode: (mode) => set({ mode }),
  setOpen: (open) => set({ open })
}));

export default useAuthStore;
