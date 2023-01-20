import React from "react";
import "./note.css";
import clsx from "clsx";
import sharp from "../../icons/sharp.svg";
import flat from "../../icons/flat.svg";
import { observer } from "mobx-react-lite";
import { PianoNote } from "../../n";

interface IProps {
  taildir: "u" | "d";
  helperLines?: number;
  helperOffset?: boolean;

  modifier?: "f" | "s";
  note: PianoNote;
}

export const Note = observer((props: IProps) => {
  console.log(props.note);
  const className = clsx("note", {
    "tail-down": props.taildir === "d",
  });

  const id = `${props.note.key}-${props.note.octave}${
    props.modifier ? "-" + props.modifier : ""
  }`;

  return (
    <div className={className} id={id}>
      {props.helperLines && props.helperLines >= 5 && props.taildir === "d" && (
        <div
          className={`helper down-5 ${
            props.helperOffset ? "offset" : "no-offset"
          }`}
        />
      )}
      {props.helperLines && props.helperLines >= 4 && props.taildir === "d" && (
        <div
          className={`helper down-4 ${
            props.helperOffset ? "offset" : "no-offset"
          }`}
        />
      )}
      {props.helperLines && props.helperLines >= 3 && props.taildir === "d" && (
        <div
          className={`helper down-3 ${
            props.helperOffset ? "offset" : "no-offset"
          }`}
        />
      )}
      {props.helperLines && props.helperLines >= 2 && props.taildir === "d" && (
        <div
          className={`helper down-2 ${
            props.helperOffset ? "offset" : "no-offset"
          }`}
        />
      )}
      {props.helperLines && props.helperLines >= 1 && props.taildir === "d" && (
        <div
          className={`helper down-1 ${
            props.helperOffset ? "offset" : "no-offset"
          }`}
        />
      )}

      {props.helperLines && props.helperLines >= 3 && props.taildir === "u" && (
        <div
          className={`helper up-3 ${
            props.helperOffset ? "offset" : "no-offset"
          }`}
        />
      )}
      {props.helperLines && props.helperLines >= 2 && props.taildir === "u" && (
        <div
          className={`helper up-2 ${
            props.helperOffset ? "offset" : "no-offset"
          }`}
        />
      )}
      {props.helperLines && props.helperLines >= 1 && props.taildir === "u" && (
        <div
          className={`helper up-1 ${
            props.helperOffset ? "offset" : "no-offset"
          }`}
        />
      )}

      {props.modifier === "s" && (
        <img src={sharp} className="sharp" alt="logo" />
      )}
      {props.modifier === "f" && <img src={flat} className="flat" alt="logo" />}
      <div className="tail" />
    </div>
  );
});
