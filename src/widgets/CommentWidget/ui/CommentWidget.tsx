import { Link } from "react-router-dom";
import "./CommentWidget.css";
import { CommentWidgetProps } from "./CommentWidget.interface";

const CommentWidget: React.FC<CommentWidgetProps> = ({
  created,
  message,
  user,
}) => {
  return (
    <div className="comment">
      <div className="user-photo">
        <img
          src={
            user?.photoURL ||
            "https://fs01.cap.ru//www21-11/galatr/person/cb45deff-7216-4306-80f7-9e48d03f437e/no_avatar_3st4mbc2.png"
          }
          alt={user?.displayName || "User"}
        ></img>
      </div>
      <div className="user-data">
        <Link to="#">{user?.displayName}</Link>
        <span>{created.toDate().toDateString()}</span>
      </div>
      <div className="comment-content">
        <p>{message}</p>
        <div className="replies">
          {/* {reply
            ? reply.map((el) => {
                return <CommentWidget key={el.id} {...el} />;
              })
            : null} */}
        </div>
      </div>
    </div>
  );
};

export default CommentWidget;
