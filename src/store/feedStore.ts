import { create } from "zustand";

import type { DeedCategory } from "@/types";

interface FeedFilterState {
  category: DeedCategory | "all";
  search: string;
  scope: "all" | "following";
  setCategory: (category: DeedCategory | "all") => void;
  setSearch: (search: string) => void;
  setScope: (scope: "all" | "following") => void;
  reset: () => void;
}

/** UI filter state for the community feed (kept across navigation). */
export const useFeedStore = create<FeedFilterState>((set) => ({
  category: "all",
  search: "",
  scope: "all",
  setCategory: (category) => set({ category }),
  setSearch: (search) => set({ search }),
  setScope: (scope) => set({ scope }),
  reset: () => set({ category: "all", search: "", scope: "all" }),
}));
