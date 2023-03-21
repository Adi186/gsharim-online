import React from "react";
import "./contentItem.css";

export function ContentItem({title, subjects, type, link, level, language}){
    
  return (
    <div className="content-item">
        <span className="title">{title}</span>
        <div>
        <span className="subject">נושאים:</span>
            {
                subjects.map( subject => <span className="subject">{subject}</span>)
            }
        </div>
        <a href={link} className="open-content-button">לתוכן</a>
    </div>
  );
}
