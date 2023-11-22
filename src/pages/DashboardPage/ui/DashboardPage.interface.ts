
export interface TasksProps {
    id: number;
    title: string;
    description: string;
    author: string;
    date: Date;
    comments?: any;
}

export interface ItemsProps {
    id: number;
    mainTitle: string;
    author: string;
    date: Date;
    tasks?: TasksProps[];
}

export interface DashboardPageProps {
    items: ItemsProps[];
}