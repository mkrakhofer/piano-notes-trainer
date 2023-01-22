import React from "react";
import "./ottava-bassa.css";

interface IProps {
  length: number;
}

export const OttavaBassa = (props: IProps) => {
  return (
    <div className="ottava-bassa">
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
