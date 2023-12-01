import { CommentsProps, UserProps, UsersProps } from "redux/store.interfaces";

export interface CommentWidgetProps extends CommentsProps {
    user?: UserProps
}