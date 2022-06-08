import React, { MouseEvent, useRef, useState } from "react";
import style from "./TimeLine.module.scss";

export default function TimeLine(): JSX.Element {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [draggable, setDraggable] = useState<boolean>(false);
  const [timelineHeight, setTimelineHeight] = useState<number>(
    window.innerHeight * 0.3
  );

  const ResizeTimeLine = (event: MouseEvent<HTMLDivElement>) => {
    if (!draggable) return;

    let mousePosition: number = event.clientY;
    const screenSize = window.innerHeight;
    const height = Math.min(
      Math.max(screenSize * 0.3, screenSize - mousePosition),
      screenSize * 0.5
    );
    setTimelineHeight(height);
  };

  return (
    <div
      className={`${style.overlay} ${draggable && style.active}`}
      style={{ height: draggable ? "100vh" : timelineHeight }}
      onMouseMove={ResizeTimeLine}
      onMouseUp={() => setDraggable(false)}
    >
      <div
        className={style.timeline}
        ref={timelineRef}
        style={{ height: timelineHeight }}
      >
        <div
          className={style.resizer}
          onMouseDown={() => setDraggable(true)}
          onMouseUp={() => setDraggable(false)}
        />
      </div>
    </div>
  );
}
