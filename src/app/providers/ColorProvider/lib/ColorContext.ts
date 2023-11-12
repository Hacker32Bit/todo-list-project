import { createContext } from "react";

export enum Color {
    BLUE = "blue",
    YELLOW = "yellow",
    PURPLE = "purple",
    GREEN = "green",
}

export interface ColorContextProps {
    color?: Color;
    setColor?: (color: Color) => void;
}

export const ColorContext = createContext<ColorContextProps>({});

export const LOCAL_STORAGE_COLOR_KEY = "color"