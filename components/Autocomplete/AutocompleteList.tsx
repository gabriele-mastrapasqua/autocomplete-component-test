import { useEffect, useRef, useState, KeyboardEvent, FormEvent } from "react";
import { Entry } from "@/interfaces/Entry";

interface Props {
  index: number;
  items: any[];
  keyToShow: string;
  onClick: (objectSelected: any) => void;
}

export const AutocompleteList = ({
  keyToShow = 'API',
  ...props
}: Props) => {
  return (
      <div className="autocomplete-list">
        <ul>
          {props.items.map((item, index) => (
            <li key={index} className={index === props.index ? "highligth" : ""} onClick={() => props.onClick(item)}>
              {item[keyToShow]}
            </li>
          ))}
        </ul>
      </div>
 
  );
};
