import { create } from 'zustand';

export interface Values {
  history: string;
  setHistory: (newHistory: string) => void;
  loading: boolean;
  setLoading: (newLoading: boolean) => void;
  userState: string;
  setUserState: (newUserState: string) => void;
}

export const useValueStore = create<Values>((set) => ({
  history: '{"title":"", "story":""}',
  setHistory: (newHistory) => set({ history: newHistory }),
  loading: false,
  setLoading: (newLoading) => set({ loading: newLoading }),
  userState: '',
  setUserState: (newUserState) => set({ userState: newUserState }),
}));
