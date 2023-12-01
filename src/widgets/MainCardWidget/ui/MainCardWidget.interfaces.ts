import { MainCardsProps } from "redux/store.interfaces";

export interface MainCardWidgetProps extends MainCardsProps {
    editMainCardFunction: (id: string, title: string) => void;
    deleteMainCardFunction: (id: string) => void;
}