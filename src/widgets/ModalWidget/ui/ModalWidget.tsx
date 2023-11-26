import { FC, ReactNode, useEffect, useRef } from "react";

import "./ModalWidget.css";

interface ModalProps {
  close: (arg: boolean) => void;
  children: ReactNode;
}

const ModalWidget: FC<ModalProps> = ({ close, children }) => {
  const modalRef = useRef<any>(null);

  const closeModal = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      close(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      document.addEventListener("click", closeModal);

      return () => {
        document.removeEventListener("click", closeModal);
      };
    }, 1);
  }, []);

  return (
    <>
      <div className="modal-bg"></div>
      <div ref={modalRef} className="modal">
        {children}
      </div>
    </>
  );
};

export default ModalWidget;
