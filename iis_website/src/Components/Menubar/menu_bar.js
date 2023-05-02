import React, { useState } from "react";
import "../Menubar/menu_bar.css";

function MenuBar(props) {
  return (
    <>
      <div className="menu-main-div">
        <div className="project-name">Cipher Hub</div>
        <div className="cipher-menu" onClick={props.showCipher}>Ciphers</div>
      </div>
    </>
  );
}

export default MenuBar;