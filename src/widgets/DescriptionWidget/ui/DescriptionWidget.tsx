import { TasksProps } from "pages/DashboardPage/ui/DashboardPage.interface";

import "./DescriptionWidget.css";

const DescriptionWidget: React.FC<TasksProps> = ({
  id,
  author,
  date,
  description,
  title,
}) => {
  return (
    <>
      <h1>{title}</h1>
      <div className="modal-content">
        <p>{description}</p>
        <div className="line"></div>
        <span>{date.toString()}</span>
        <div className="line"></div>
        <span>{author}</span>
      </div>
    </>
  );
};

export default DescriptionWidget;
