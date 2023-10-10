import { createContext } from "react";

type IdContextType = {
  id: number;
  setId: (n: number) => void;
  search: string;
  setSearch: (s: string) => void;
};

export const IdContext = createContext<IdContextType | null>(null);
