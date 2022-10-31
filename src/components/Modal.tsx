import React, { ReactNode } from "react";
import s from "./Modal.module.css";

interface ModalProps {
  children: ReactNode;
}

export function Modal({ children }: ModalProps) {
  return (
    <div className={s.modal}>
      <div className={s.modal_content}>{children}</div>
    </div>
  );
}
