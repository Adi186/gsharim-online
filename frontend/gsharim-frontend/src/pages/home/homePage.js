import React from "react";
import "./home.css";
import i from "../../images/main_pic_3_2.png";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export function HomePage() {
  return (
    <div className="home">
      <div className="e110_37"/>
      <div className="content">
        <div className="button-container">
          <span>רוצה ללמוד משהו חדש?</span>
          <Link className="button" to="/content"> לתוכן</Link>
          <span>יש לך שאלה?</span>
          <Link className="button" to="/forum">לפורום</Link>
        </div>
        <div className="img-container">
          <img src={i} />
        </div>
      </div>
    </div>
  );
}