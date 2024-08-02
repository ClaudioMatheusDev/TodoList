import React from "react";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
    <p>
      <span> React + TS Todo</span>  Copyright &copy; 2024 by &lt;/Claudio Matheus&gt;. All rights Reserved
    </p>
    </footer>
  );
}

export default Footer;
