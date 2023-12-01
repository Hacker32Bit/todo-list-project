import { DraggableProvided } from "react-beautiful-dnd";
import { CardsProps } from "redux/store.interfaces";

export interface CardWidgetProps extends CardsProps {
    provider: DraggableProvided;
    editCardFunction: (id: string, editTitle: string) => void;
    deleteCardFunction: (id: string) => void;
}