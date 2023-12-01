import { CardsProps } from "redux/store.interfaces";

export interface DescriptionWidgetProps extends CardsProps{
    deleteCardFunction: (id: string) => void;
}