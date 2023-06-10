import React from "react";
import loaderImg from "../../assets/loader.gif";
import ReactDOM from "react-dom";
import styles from "./Loader.module.scss";

const loader = () => {
  return ReactDOM.createPortal(
    <div className={styles.wrapper}>
      <div className={styles.loader}>
        <img src={loaderImg} alt="loading..." />
      </div>
    </div>,
    document.getElementById("loader")
  );
};

export default loader;
