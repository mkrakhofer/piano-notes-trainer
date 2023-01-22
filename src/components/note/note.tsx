import React from "react";
import "./note.css";
import clsx from "clsx";
import sharp from "../../icons/sharp.svg";
import flat from "../../icons/flat.svg";
import { observer } from "mobx-react-lite";
import { MusicNote } from "../../classes/music-note";

interface IProps {
  taildir: "u" | "d";
  helperLines?: number;
  helperOffset?: boolean;

  modifier?: "f" | "s";
  note: MusicNote;
  isCurrent?: boolean;
  isSuccess?: boolean;
  startOfBar?: boolean;
  endOfLastBar?: boolean;
}

export const Note = observer((props: IProps) => {
  const className = clsx("note", {
    "tail-down": props.taildir === "d",
    "is-current": props.isCurrent,
    "is-success": props.isSuccess,
    "bar-start": props.startOfBar,
    "bar-end": props.endOfLastBar,
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
      {props.startOfBar && <div className="bar-start" />}
      {props.endOfLastBar && <div className="bar-end" />}
    </div>
  );
});
