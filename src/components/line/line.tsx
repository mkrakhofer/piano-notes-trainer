import React from "react";
import "./line.css";
import clsx from "clsx";
import { IKey } from "../../keymap";

interface IProps {
  assignedKey: IKey;
  subContra?: IKey;
  fourLine?: IKey;
  sharp?: IKey;
  fourLineSharp?: IKey;
  subContraSharp?: IKey;
  flat?: IKey;
  fourLineFlat?: IKey;
  subContraFlat?: IKey;
  tailDir: "up" | "down";
  visible?: boolean;
}

export const Line = (props: IProps) => {
  const className = clsx("line", {
    visible: props.visible,
  });
  return <div className={className} />;
};
