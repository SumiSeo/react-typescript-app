import React from "react";

const Event = (): JSX.Element => {
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };
  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("I am being dragged");
  };
  return (
    <div>
      <input onChange={onInputChange} />
      <div draggable onDragStart={onDragStart}>
        Drag ME!
      </div>
    </div>
  );
};

export default Event;
