import React from "react";
import "./gap.css";

interface IProps {
  startOfBar?: boolean;
  endOfLastBar?: boolean;
}

export const Gap = (props: IProps) => {
  return (
    <div className="gap">
      {props.startOfBar && <div className="bar-start" />}
      {props.endOfLastBar && <div className="bar-end" />}
    </div>
  );
};
