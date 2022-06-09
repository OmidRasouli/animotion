import { MouseEvent, useRef, useState } from "react";
import FrameTimer from "../FrameTimer/FrameTimer";
import PropertyBox from "../PropertyBox/PropertyBox";
import style from "./TimeLine.module.scss";

export default function TimeLine(): JSX.Element {
  const parent = useRef<HTMLDivElement>(null);
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
    <div className={style.test} style={{ height: timelineHeight }}>
      <div
        className={`${style.overlay} ${draggable && style.active}`}
        style={{
          height: draggable ? window.innerHeight : timelineHeight,
          top: draggable ? 0 : "auto",
          bottom: draggable ? "auto" : 0,
        }}
        onMouseMove={ResizeTimeLine}
        onMouseUp={() => setDraggable(false)}
      >
        <div className={style.timeline} style={{ height: timelineHeight }}>
          <div
            className={style.resizer}
            onMouseDown={() => setDraggable(true)}
            onMouseUp={() => setDraggable(false)}
          />

          <PropertyBox
            items={[]} //[0, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]}
          ></PropertyBox>
          <FrameTimer parent={parent} />
        </div>
      </div>
    </div>
  );
}
