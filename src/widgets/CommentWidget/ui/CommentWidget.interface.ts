
export interface CommentWidgetProps {
    id: number;
    author: string;
    message: string;
    date: Date;
    reply?: CommentWidgetProps[]
}