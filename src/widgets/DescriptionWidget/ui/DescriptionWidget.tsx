import "./DescriptionWidget.css";
import "../../CommentWidget/ui/CommentWidget.css";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { IoIosSend } from "react-icons/io";
import { fetchComments } from "redux/thunks/Comments/fetchComments";
import { useSelector } from "react-redux";
import { useAppDispatch } from "hooks/useAppDispatch";
import CommentWidget from "widgets/CommentWidget";
import { createComments } from "redux/thunks/Comments/createComments";
import { Timestamp } from "@firebase/firestore";
import { fetchUsers } from "redux/thunks/Users/fetchUsers";
import { FaRegPenToSquare } from "react-icons/fa6";
import { updateCards } from "redux/thunks/Cards/updateCards";
import { fetchCards } from "redux/thunks/Cards/fetchCards";
import { FaSave, FaTrashAlt } from "react-icons/fa";
import { DescriptionWidgetProps } from "./DescriptionWidget.interfaces";
import { RootState } from "redux/store";
import { CommentsProps, UsersProps } from "redux/store.interfaces";

const DescriptionWidget: React.FC<DescriptionWidgetProps> = ({
  id,
  title,
  created,
  description,
  uid,
  deleteCardFunction,
}) => {
  const dispatch = useAppDispatch();

  const comments = useSelector((state: RootState) => state.comments);
  const users = useSelector((state: RootState) => state.users);

  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editDescription, setEditDescription] = useState<string>(description);

  const descriptionTextareaRef = useRef(null);
  const commentTextareaRef = useRef(null);
  const [message, setMessage] = useState("");
  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(event.target.value);
  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => setEditDescription(event.target.value);

  useLayoutEffect(() => {
    // Reset height - important to shrink on delete
    //@ts-ignore
    commentTextareaRef.current.style.height = "inherit";
    // Set height
    //@ts-ignore
    commentTextareaRef.current.style.height = `${Math.max(
      //@ts-ignore
      commentTextareaRef.current.scrollHeight,
      50
    )}px`;
  }, [message]);

  useLayoutEffect(() => {
    // Reset height - important to shrink on delete
    if (isEdit) {
      //@ts-ignore
      descriptionTextareaRef.current.style.height = "inherit";
      // Set height
      //@ts-ignore
      descriptionTextareaRef.current.style.height = `${Math.max(
        //@ts-ignore
        descriptionTextareaRef.current.scrollHeight,
        50
      )}px`;
    }
  }, [editDescription, isEdit]);

  const handleSendComment = () => {
    dispatch(
      createComments({
        message,
        created: Timestamp.fromDate(new Date()),
        uid,
        cardId: id,
      })
    );

    setMessage("");
  };

  const handleEdit = async () => {
    const oldId: string = id;

    const newObj = {
      description: editDescription,
    };

    console.log(newObj);

    await dispatch(updateCards({ oldId, newObj }));
    dispatch(fetchCards());

    setIsEdit(false);
  };

  useEffect(() => {
    dispatch(fetchComments());
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <h1>{title}</h1>
      <div className="modal-content">
        {isEdit ? (
          <div className="edit-description">
            <label>Type description:</label>
            <textarea
              placeholder="Text"
              onChange={handleDescriptionChange}
              ref={descriptionTextareaRef}
              style={{
                minHeight: 50,
                resize: "none",
              }}
              value={editDescription}
            />
            <button
              className="btn"
              onClick={() => setTimeout(() => handleEdit(), 1)}
            >
              <FaSave />
            </button>
          </div>
        ) : (
          <div className="description-content">
             <button
                className="btn btn-edit delete"
                title="Delete card"
                onClick={() => setTimeout(() => deleteCardFunction(id), 1)}
              >
                <FaTrashAlt />
              </button>
            <button
              className="btn btn-edit"
              title="Edit"
              onClick={() => setTimeout(() => setIsEdit(true), 1)}
            >
              <FaRegPenToSquare />
            </button>
            <h3> Description:</h3>
            <p>
              {description}
            </p>
          </div>
        )}
        <div className="line"></div>
        <span>Created: {created.toDate().toDateString()}</span>
        <div className="line"></div>
        <span>
          Author: {users.users.find((el: UsersProps) => el.id === uid)?.displayName}
        </span>
        <div className="line"></div>
        <div className="comments-wrapper">
          <div className="send-comment">
            <label>Write your comment:</label>
            <textarea
              placeholder="Write your comment:"
              onChange={handleMessageChange}
              ref={commentTextareaRef}
              style={{
                minHeight: 50,
                resize: "none",
              }}
              value={message}
            />
            <button className="btn" onClick={handleSendComment}>
              <IoIosSend />
            </button>
          </div>

          {comments?.comments.map((el: CommentsProps) => {
            if (el.cardId === id) {
              //console.log(el);
              return (
                <CommentWidget
                  key={el.id}
                  {...el}
                  user={users.users.find((user: UsersProps) => user.id === el.uid)}
                />
              );
            }
            return null;
          })}
        </div>
      </div>
    </>
  );
};

export default DescriptionWidget;
