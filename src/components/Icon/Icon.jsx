import React from "react";

export const Icon = ({ name, width, height }) => {
  // console.log(width);
  return (
    <svg className={`icon icon-${name}`} style={{ minWidth: width, minHeight:height }}>
      <use
        xlinkHref={`/images/sprite.svg#${name}`}
      ></use>
    </svg>
  );
}
