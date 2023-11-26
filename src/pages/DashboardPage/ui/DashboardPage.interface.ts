import { User } from "firebase/auth";
import { Dispatch, SetStateAction } from "react";

export interface CommentsProps {
    id: number;
    author: string;
    message: string;
    date: Date;
    reply?: CommentsProps[];
}

export interface TasksProps {
    id: number;
    title: string;
    description: string;
    author: string;
    date: Date;
    comments?: CommentsProps[];
}

export interface ItemsProps {
    id: number;
    mainTitle: string;
    author: string;
    date: Date;
    tasks?: TasksProps[];
    setItemsState?: Dispatch<SetStateAction<ItemsProps[]>>;
}

export interface DashboardPageProps {
    user: User | null;
    items: ItemsProps[];
    setItemsState: Dispatch<SetStateAction<ItemsProps[]>>;
}