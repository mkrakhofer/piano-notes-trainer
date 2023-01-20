import React from "react";
import "./line.css";
import clsx from "clsx";
import { Note } from "../note/note";
import { observer } from "mobx-react-lite";
import { PianoNote } from "../../n";

interface IProps {
  // note
  n: PianoNote;
  // subcontra
  sc?: PianoNote;
  // fourline
  fl?: PianoNote;
  // sharp
  s?: PianoNote;
  // fourline sharp
  fls?: PianoNote;
  // subcontra sharp
  scs?: PianoNote;
  // flat
  f?: PianoNote;
  // fourline flat
  flf?: PianoNote;
  // subcontra flat
  scf?: PianoNote;
  // note tail direction (up / down)
  d: "u" | "d";
  // visible
  v?: boolean;
  notes: PianoNote[];
  // border on the left / right
  b?: boolean;
  // required elper lines for notes
  h?: number;
  // helper line offset required?
  ho?: boolean;
}

export const Line = observer((props: IProps) => {
  const className = clsx("line", {
    visible: props.v,
  });

  return (
    <div className={className}>
      {props.b && <div className="border-left" />}
      {props.b && <div className="border-right" />}
      {props.notes.map((note, key) => {
        if (note.equals(props.n)) {
          return (
            <Note
              helperOffset={props.ho}
              helperLines={props.h}
              note={note}
              taildir={props.d}
              key={key}
            />
          );
        }
        if (note.equals(props.s)) {
          return (
            <Note
              helperOffset={props.ho}
              helperLines={props.h}
              note={note}
              taildir={props.d}
              key={key}
              modifier="s"
            />
          );
        }
        if (note.equals(props.f)) {
          return (
            <Note
              helperOffset={props.ho}
              helperLines={props.h}
              note={note}
              taildir={props.d}
              key={key}
              modifier="f"
            />
          );
        }
        if (note.equals(props.sc)) {
          return (
            <Note
              helperOffset={props.ho}
              helperLines={props.h}
              note={note}
              taildir={props.d}
              key={key}
            />
          );
        }
        if (note.equals(props.fl)) {
          return (
            <Note
              helperOffset={props.ho}
              helperLines={props.h}
              note={note}
              taildir={props.d}
              key={key}
            />
          );
        }
        if (note.equals(props.scs)) {
          return (
            <Note
              helperOffset={props.ho}
              helperLines={props.h}
              note={note}
              taildir={props.d}
              key={key}
              modifier="s"
            />
          );
        }
        if (note.equals(props.scf)) {
          return (
            <Note
              helperOffset={props.ho}
              helperLines={props.h}
              note={note}
              taildir={props.d}
              key={key}
              modifier="f"
            />
          );
        }
        if (note.equals(props.fls)) {
          return (
            <Note
              helperOffset={props.ho}
              helperLines={props.h}
              note={note}
              taildir={props.d}
              key={key}
              modifier="s"
            />
          );
        }
        if (note.equals(props.flf)) {
          return (
            <Note
              helperOffset={props.ho}
              helperLines={props.h}
              note={note}
              taildir={props.d}
              key={key}
              modifier="f"
            />
          );
        }
        return <div key={key} className="gap" />;
      })}
    </div>
  );
});
