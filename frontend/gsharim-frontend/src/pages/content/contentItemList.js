import React, { useEffect, useState } from "react";
import { getContent } from "../../services/contentService";
import { ContentItem } from "./conentItem";
import "./contentItemList.css";

export function ContentItemList({searchParams}){

    const [items, setItems] = useState([]);
    useEffect(()=>{
        console.log("params", searchParams);
        setItems(getContent(searchParams));
    }, [searchParams, setItems, getContent])

  return (
    <div className="content-item-list">
      {
        items.map(item => <ContentItem title={item.title} subjects={item.subject} link={item.link}/>)
      }
    </div>
  );
}
