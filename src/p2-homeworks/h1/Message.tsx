import { type } from "os";
import React from "react";
import styles from "./Message.module.css";

type MessageDataType = {
  avatar: string;
  name: string;
  message: string;
  time: string;
};

const Message = (props: MessageDataType) => {
  return (
    <div className={styles.Message}>
      <img src={props.avatar} alt="" />
      <div className={styles.StyleContent}>
        <div>
          <div className={styles.Name}>{props.name}</div>
          <div className={styles.Text}>{props.message}</div>
        </div>
        <div className={styles.Time}>{props.time}</div>
      </div>
    </div>
  );
};

export default Message;
