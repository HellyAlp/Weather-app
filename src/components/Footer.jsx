import React from "react";
import "/src/styles.css";

const date = new Date();
function Footer() {
  return (
    <footer>
      <p>Copyright © {date.getFullYear()} </p>
    </footer>
  );
}

export default Footer;
