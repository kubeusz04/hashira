"use client";

import { createContext, useContext, type ReactNode } from "react";

const ElementTheme = createContext<"water" | "flame">("water");
export const useElementTheme = () => useContext(ElementTheme);

export function FlameArchive({ children }: { children: ReactNode }) {
  return (
    <ElementTheme.Provider value="flame">
      <div className="polish-page">{children}</div>
    </ElementTheme.Provider>
  );
}
