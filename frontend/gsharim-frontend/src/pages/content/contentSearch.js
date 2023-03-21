import React, { useEffect, useState } from "react";
import { ContentItemList } from "./contentItemList";
import { config } from "../../config";
import "./contentSearch.css"
export function ContentSearch({ setSearchParams }) {

    const [currentParams, setCurrentParams] = useState();
    const onChange = (value) =>{
        console.log("optionClikc", value);
        setCurrentParams({ ...currentParams, [value.target.name]: [value.target.value] })
    }

    useEffect(()=>{
console.log("current param change", currentParams);
    }, [currentParams])
    return (
            <div className="content-search">
                <span>נושא: 
                <select name="subject" onChange={onChange}>
                    {
                        config.subjects.map(sub => <option value={sub.value}>{sub.name}</option>)
                    }
                </select>
                </span>
                <span>רמת קושי: 
                <select name="level" onChange={onChange}>
                    {
                        config.levels.map(level => <option value={level.value}>{level.name}</option>)
                    }
                </select>
                </span>
                    <input type="button" onClick={()=>{
                        console.log("cl", currentParams);
                        setSearchParams(currentParams)}} value="חיפוש"/>
            </div>
    );
}
