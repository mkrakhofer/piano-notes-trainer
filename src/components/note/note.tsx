import React from "react";
import "./note.css";
import { INote } from "../../notemap";
import clsx from "clsx";
import sharp from "../../icons/sharp.svg";
import flat from "../../icons/flat.svg";

interface IProps {
  taildir: "u" | "d";
  helperLines?: number;
  helperLinesOffset?: boolean;
  modifier?: "f" | "s";
  note: INote;
}

export const Note = (props: IProps) => {
  const className = clsx("note", {
    "tail-down": props.taildir === "d",
  });

  return (
    <div
      className={className}
      id={`${props.note.key}-${props.note.octave}${
        props.modifier ? "-" + props.modifier : ""
      }`}
    >
      {props.modifier === "s" && (
        <img src={sharp} className="sharp" alt="logo" />
      )}
      {props.modifier === "f" && <img src={flat} className="flat" alt="logo" />}
      <div className="tail" />
    </div>
  );
};
