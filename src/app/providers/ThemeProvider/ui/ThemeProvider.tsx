import { FC, ReactNode, useMemo, useState } from "react";
import { Theme, LOCAL_STORAGE_THEME_KEY, ThemeContext } from "../lib/ThemeContext";

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

export interface ThemeProviderProps {
    children: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProps = useMemo(() => {
    return {
      theme,
      setTheme,
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
