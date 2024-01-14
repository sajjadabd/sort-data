import { create } from "zustand";
import { data } from "../data";

export const useContentStore = create((set) => ({
  content: data,
  reverseEmail: false,
  reverseDate: false,
  sortBasedOnEmail: () => {
    set((state) => ({
      ...state,
      reverseEmail: !state.reverseEmail,
      content: state.content.sort((a, b) =>
        state.reverseEmail ? a.email < b.email : a.email > b.email
      ),
    }));
  },
  sortBasedOnDate: () => {
    set((state) => ({
      ...state,
      reverseDate: !state.reverseDate,
      content: state.content.sort((a, b) =>
        state.reverseDate
          ? new Date(a.date).getTime() < new Date(b.date).getTime()
          : new Date(a.date).getTime() > new Date(b.date).getTime()
      ),
    }));
  },
}));
