import { TasksProps } from "pages/DashboardPage/ui/DashboardPage.interface";
import { IoIosSend } from "react-icons/io";

import "../../DescriptionWidget/ui/DescriptionWidget.css";
import "./CommentsWidget.css";
import CommentWidget from "widgets/CommentWidget";
import { useLayoutEffect, useRef, useState } from "react";

const CommentsWidget: React.FC<TasksProps> = ({
  id,
  author,
  date,
  title,
  comments,
}) => {

  const textareaRef = useRef(null);
  const [value, setValue] = useState("");
  const onChange = (event: any) => setValue(event.target.value);

  useLayoutEffect(() => {
    // Reset height - important to shrink on delete
    //@ts-ignore
    textareaRef.current.style.height = "inherit";
    // Set height
    //@ts-ignore
    textareaRef.current.style.height = `${Math.max(
      //@ts-ignore
      textareaRef.current.scrollHeight,
      50
    )}px`;
  }, [value]);

  return (
    <>
      <h1>{title}</h1>
      <div className="modal-content">
        <span>{date.toString()}</span>
        <div className="line"></div>
        <span>{author}</span>
        <div className="line"></div>
        <div className="comments-wrapper">
          <div className="send-comment">
            <label>Write your comment:</label>
            <textarea
              placeholder="Write your comment:"
              onChange={onChange}
              ref={textareaRef}
              style={{
                minHeight: 50,
                resize: "none",
              }}
              value={value}
            />
            <button className="btn">
              <IoIosSend />
            </button>
          </div>

          {comments.map((el: any) => {
            return <CommentWidget key={el.id} {...el} />;
          })}
        </div>
      </div>
    </>
  );
};

export default CommentsWidget;
