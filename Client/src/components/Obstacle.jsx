import React, { forwardRef } from "react";

const Obstacle = forwardRef(({ left }, ref) => {
  return (
    <div
      ref={ref}
      className="absolute bottom-0 w-10 h-10 bg-gray-700 rounded-md"
      style={{ left }}
    />
  );
});

export default Obstacle;
