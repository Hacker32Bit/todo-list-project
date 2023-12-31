import React, { useEffect, useState } from "react";
import { MdOutlineSubject } from "react-icons/md";
import { LiaCommentDots } from "react-icons/lia";
import { FaRegPenToSquare } from "react-icons/fa6";

import "./CardWidget.css";
import ModalWidget from "widgets/ModalWidget";
import DescriptionWidget from "widgets/DescriptionWidget";
import { useSelector } from "react-redux";
import { fetchComments } from "redux/thunks/Comments/fetchComments";
import { useAppDispatch } from "hooks/useAppDispatch";
import { FaSave } from "react-icons/fa";
import { RootState } from "redux/store";
import { CardWidgetProps } from "./CardWidget.interface";
import { CommentsProps } from "redux/store.interfaces";

const CardWidget: React.FC<CardWidgetProps> = ({
  id,
  title,
  uid,
  created,
  description,
  mainCardId,
  provider,
  editCardFunction,
  deleteCardFunction,
}) => {
  const [isOpenDescription, setIsOpenDescription] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editTitle, setEditTitle] = useState<string>(title);

  const dispatch = useAppDispatch();
  const comments = useSelector((state: RootState) => {
    return state.comments;
  });

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  return (
    <>
      <div className="card" {...provider.dragHandleProps}>
        {isEdit ? (
          <>
            <input
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              placeholder="Type main card title"
            ></input>
            <button
              className="save"
              onClick={async () => {
                await editCardFunction(id, editTitle);
                setIsEdit(false);
              }}
            >
              <FaSave />
            </button>
          </>
        ) : (
          <>
            <div className="content">
              <p>{title}</p>
            </div>
            <div className="card-actions">
              <div
                className="btn"
                title="Description and comments"
                onClick={() => setIsOpenDescription(true)}
              >
                <MdOutlineSubject />
                <span> </span>
                <LiaCommentDots />
                <span>
                  {
                    comments.comments.filter((el: CommentsProps) => el.cardId === id)
                      .length
                  }
                </span>
              </div>

              <div className="btn" title="Edit" onClick={() => setIsEdit(true)}>
                <FaRegPenToSquare />
              </div>
            </div>
          </>
        )}
      </div>
      {isOpenDescription ? (
        <ModalWidget close={setIsOpenDescription}>
          <DescriptionWidget
            id={id}
            uid={uid}
            created={created}
            title={title}
            description={description}
            mainCardId={mainCardId}
            deleteCardFunction={deleteCardFunction}
          />
        </ModalWidget>
      ) : null}
    </>
  );
};

export default CardWidget;
