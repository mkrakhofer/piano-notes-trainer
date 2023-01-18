import React from "react";
import "./note.css";
import { INote } from "../../notemap";

interface IProps {
  taildir: "u" | "d";
  helperLines?: number;
  helperLinesOffset?: boolean;
  modifier?: "f" | "s";
  note: INote;
}

export const Note = (props: IProps) => {
  return (
    <div
      className="note"
      id={`${props.note.key}-${props.note.octave}${
        props.modifier ? "-" + props.modifier : ""
      }`}
    />
  );
};
