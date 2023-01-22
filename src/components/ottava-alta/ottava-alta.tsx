import React from "react";
import "./ottava-alta.css";

interface IProps {
  length: number;
}

export const OttavaAlta = (props: IProps) => {
  return (
    <div className="ottava-alta">
      <div className="start">
        <div className="eight">8</div>
        <div className="dashed-line" />
      </div>
      <div
        className="middle"
        style={{ width: `${props.length * 90 - 90}px` }}
      />
      <div className="end" style={{ left: `${props.length * 90 - 45}px` }}>
        <div className="end-line" />
      </div>
    </div>
  );
};
