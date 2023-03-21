import React, { useState } from "react";
import { ContentItemList } from "./contentItemList";

export function ContentSearch({setSearchParams}){

  return (
    <div className="content">
      <div className="content-search">
        <span></span>
        <input type="text"></input>
      </div>
        <ContentItemList searchParams={searchParams}/>   
    
    </div>
  );
}
