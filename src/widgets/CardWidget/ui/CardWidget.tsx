import React, { useState } from "react";
import { MdOutlineSubject } from "react-icons/md";
import { LiaCommentDots, LiaComments } from "react-icons/lia";
import { FaRegPenToSquare } from "react-icons/fa6";

import "./CardWidget.css";
import ModalWidget from "widgets/ModalWidget";
import DescriptionWidget from "widgets/DescriptionWidget";
import { CardWidgetProps } from "./CardWidget.interface";
import CommentsWidget from "widgets/CommentsWidget";

const CardWidget: React.FC<CardWidgetProps> = ({ card }) => {
  const [isOpenDescription, setIsOpenDescription] = useState<boolean>(false);
  const [isOpenComments, setIsOpenComments] = useState<boolean>(false);

  return (
    <div className="card">
      <div className="content">
        <p>{card.title}</p>
      </div>
      <div className="card-actions">
        <div
          className="btn"
          title="Description"
          onClick={() => setIsOpenDescription(true)}
        >
          <MdOutlineSubject />
        </div>
        <div
          className="btn"
          title="Comments and replys"
          onClick={() => setIsOpenComments(true)}
        >
          <LiaCommentDots />
          <span>{card.comments?.length}</span>
        </div>
        <div className="btn" title="Edit">
          <FaRegPenToSquare />
        </div>
      </div>
      {isOpenDescription ? (
        <ModalWidget close={setIsOpenDescription}>
          <DescriptionWidget {...card} />
        </ModalWidget>
      ) : null}
      {isOpenComments ? (
        <ModalWidget close={setIsOpenComments}>
          <CommentsWidget {...card}/>
        </ModalWidget>
      ) : null}
    </div>
  );
};

export default CardWidget;
