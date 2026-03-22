"use client";
import { ThemeProviderProps } from "next-themes";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const ThemeProvider = ({ children, ...prop }: ThemeProviderProps) => {
  return <NextThemesProvider {...prop}>{children}</NextThemesProvider>;
};

export default ThemeProvider;
