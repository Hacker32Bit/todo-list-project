import { useContext } from "react";
import { LOCAL_STORAGE_COLOR_KEY, Color, ColorContext } from "./ColorContext";

interface UseColorResult {
  toggleColor: () => void;
  color?: Color;
}

const useColor = (): UseColorResult => {
  const { color, setColor } = useContext(ColorContext);

  const toggleColor = () => {
    const newColor =
      color === Color.BLUE
        ? Color.GREEN
        : color === Color.GREEN
        ? Color.PURPLE
        : color === Color.PURPLE
        ? Color.YELLOW
        : Color.BLUE;

    if (setColor) {
      setColor(newColor);
    }
    localStorage.setItem(LOCAL_STORAGE_COLOR_KEY, newColor);
  };

  return {
    color,
    toggleColor,
  };
};

export default useColor;
