import { MouseEvent, useRef, useState } from "react";
import PropertyBox from "../PropertyBox/PropertyBox";
import style from "./TimeLine.module.scss";

export default function TimeLine(): JSX.Element {
  const parent = useRef<HTMLDivElement>(null);
  const [draggable, setDraggable] = useState<boolean>(false);
  const [timeSliderGhost, setTimeSliderGhost] = useState<number>(8);
  const [timeSlider, setTimeSlider] = useState<number>(8);
  const [timelineHeight, setTimelineHeight] = useState<number>(
    window.innerHeight * 0.3
  );
  const percent: Array<number> = Array.from({ length: 101 }, (_, i) => i);

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

  const TimerSliderPositionPrev = (event: MouseEvent<HTMLSpanElement>) => {
    const parentLeft: number =
      parent?.current?.getBoundingClientRect().left ?? 0;
    //Remove property box from left and padding
    setTimeSliderGhost(
      event.currentTarget.getBoundingClientRect().left - parentLeft
    );
  };

  const TimerSliderPosition = (event: MouseEvent<HTMLSpanElement>) => {
    const parentLeft: number =
      parent?.current?.getBoundingClientRect().left ?? 0;
    //Remove property box from left and padding
    setTimeSlider(
      event.currentTarget.getBoundingClientRect().left - parentLeft
    );
  };

  return (
    <div
      className={`${style.overlay} ${draggable && style.active}`}
      style={{ height: draggable ? "100vh" : timelineHeight }}
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
        <div className={style.frames} ref={parent}>
          <div
            className={style["timer-slider"]}
            style={{ left: timeSlider }}
          ></div>
          <div
            className={`${style["timer-slider"]} ${style["ghost"]}`}
            style={{ left: timeSliderGhost }}
          ></div>
          <div className={style.timer}>
            {percent.map((x) =>
              x % 5 === 0 ? (
                <span
                  key={x}
                  className={style.numbered}
                  onMouseOver={TimerSliderPositionPrev}
                  onClick={TimerSliderPosition}
                  onMouseDown={TimerSliderPosition}
                >
                  {x}
                </span>
              ) : (
                <span
                  key={x}
                  onMouseOver={TimerSliderPositionPrev}
                  onClick={TimerSliderPosition}
                  onMouseDown={TimerSliderPosition}
                ></span>
              )
            )}
          </div>
          <div className={style.keyframes}>
            {percent.map((x) => (
              <span
                key={x}
                onMouseOver={TimerSliderPositionPrev}
                onClick={TimerSliderPosition}
                onMouseDown={TimerSliderPosition}
                className={x % 5 === 0 ? style["bold-line"] : ""}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
