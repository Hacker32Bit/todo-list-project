import { Timestamp } from "@firebase/firestore";

export interface UserProps {
    uid: string;
    email: string | null;
    displayName: string | null;
    photoURL: string | null;
}

export interface UsersProps extends UserProps {
    id: string;
    created: Timestamp;
    status: string;
}

export interface BoardsProps {
    id?: string;
    boardName?: string;
    created?: Timestamp;
    uid?: string;
}

export interface MainCardsProps {
    id: string;
    title: string;
    boardId: string;
    created: Timestamp;
    uid: string;
}

export interface CardsProps {
    id: string;
    title: string;
    description: string;
    mainCardId: string;
    created: Timestamp;
    uid: string;
}

export interface CommentsProps {
    id: string;
    cardId: string;
    message: string;
    created: Timestamp;
    uid: string;
}