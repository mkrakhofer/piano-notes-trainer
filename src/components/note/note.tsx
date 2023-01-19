import React from "react";
import "./note.css";
import { INote } from "../../notemap";
import clsx from "clsx";

interface IProps {
  taildir: "u" | "d";
  helperLines?: number;
  helperLinesOffset?: boolean;
  modifier?: "f" | "s";
  note: INote;
}

export const Note = (props: IProps) => {

  const className = clsx('note', {
    'tail-down': props.taildir === 'd'
  })

  return (
      <div
          className={className}
          id={`${props.note.key}-${props.note.octave}${
              props.modifier ? "-" + props.modifier : ""
          }`}
      >
        <div className="tail"/>
      </div>
  );
};
