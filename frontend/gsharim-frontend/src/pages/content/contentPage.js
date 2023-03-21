import React, { useState } from "react";
import { ContentItemList } from "./contentItemList";
import "./contentPage.css";
import { ContentSearch } from "./contentSearch";

export function ContentPage(){

  const [searchParams, setSearchParams] = useState({});

  return (
    <div className="content">
      
        <ContentItemList searchParams={searchParams}/>   
        <ContentSearch  setSearchParams={setSearchParams}/>  
    </div>
  );
}
