import { TasksProps } from "pages/DashboardPage/ui/DashboardPage.interface";

import "../../DescriptionWidget/ui/DescriptionWidget.css";
import "./CommentsWidget.css";
import CommentWidget from "widgets/CommentWidget";

const CommentsWidget: React.FC<TasksProps> = ({
  id,
  author,
  date,
  title,
  comments,
}) => {
  console.log(comments);
  return (
    <>
      <h1>{title}</h1>
      <div className="modal-content">
        <span>{date.toString()}</span>
        <div className="line"></div>
        <span>{author}</span>
        <div className="line"></div>
        <div className="comments-wrapper">
          {comments.map((el: any) => {
            return <CommentWidget key={el.id} {...el} />;
          })}
        </div>
      </div>
    </>
  );
};

export default CommentsWidget;
