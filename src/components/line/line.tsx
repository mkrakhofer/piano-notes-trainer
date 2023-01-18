import React from "react";
import "./line.css";
import clsx from "clsx";
import { INote } from "../../notemap";
import { Note } from "../note/note";

interface IProps {
  // note
  n: INote;
  // subcontra
  sc?: INote;
  // fourline
  fl?: INote;
  // sharp
  s?: INote;
  // fourline sharp
  fls?: INote;
  // subcontra sharp
  scs?: INote;
  // flat
  f?: INote;
  // fourline flat
  flf?: INote;
  // subcontra flat
  scf?: INote;
  // note tail direction (up / down)
  d: "u" | "d";
  // visible
  v?: boolean;
  notes: INote[];
}

export const Line = (props: IProps) => {
  const className = clsx("line", {
    visible: props.v,
  });
  return (
    <div className={className}>
      {props.notes.map((note, key) => {
        if (note === props.n) {
          return <Note note={note} taildir={props.d} key={key} />;
        }
        if (note === props.s) {
          return <Note note={note} taildir={props.d} key={key} modifier="s" />;
        }
        if (note === props.f) {
          return <Note note={note} taildir={props.d} key={key} modifier="f" />;
        }
        if (note === props.sc) {
          return <Note note={note} taildir={props.d} key={key} />;
        }
        if (note === props.fl) {
          return <Note note={note} taildir={props.d} key={key} />;
        }
        if (note === props.scs) {
          return <Note note={note} taildir={props.d} key={key} modifier="s" />;
        }
        if (note === props.scf) {
          return <Note note={note} taildir={props.d} key={key} modifier="f" />;
        }
        if (note === props.fls) {
          return <Note note={note} taildir={props.d} key={key} modifier="s" />;
        }
        if (note === props.flf) {
          return <Note note={note} taildir={props.d} key={key} modifier="f" />;
        }
        return <div key={key} className="gap" />;
      })}
    </div>
  );
};
