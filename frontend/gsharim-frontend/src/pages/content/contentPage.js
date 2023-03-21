import React, { useState } from "react";
import { ContentItemList } from "./contentItemList";
import "./contentPage.css";

export function ContentPage(){

  const [searchParams, setSearchParams] = useState();

  return (
    <div className="content">
      
        <ContentItemList searchParams={searchParams}/>   
    
    </div>
  );
}
