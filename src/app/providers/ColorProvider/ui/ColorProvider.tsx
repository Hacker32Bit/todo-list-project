import { FC, ReactNode, useMemo, useState } from "react";
import {
  Color,
  LOCAL_STORAGE_COLOR_KEY,
  ColorContext,
} from "../lib/ColorContext";

const defaultColor =
  (localStorage.getItem(LOCAL_STORAGE_COLOR_KEY) as Color) || Color.BLUE;

export interface ColorProviderProps {
  children: ReactNode;
}

const ColorProvider: FC<ColorProviderProps> = ({ children }) => {
  const [color, setColor] = useState<Color>(defaultColor);

  const defaultProps = useMemo(() => {
    return {
      color,
      setColor,
    };
  }, [color]);

  return (
    <ColorContext.Provider value={defaultProps}>
      {children}
    </ColorContext.Provider>
  );
};

export default ColorProvider;
