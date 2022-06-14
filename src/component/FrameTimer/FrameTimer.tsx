import { useState, RefObject, MouseEvent } from "react";
import style from "./FrameTimer.module.scss";

export default function FrameTimer({
  parent,
}: {
  parent: RefObject<HTMLDivElement>;
}) {
  const width: number = 15;
  const margin: number = 7;
  const percent: Array<number> = Array.from({ length: 101 }, (_, i) => i);

  const TimerSliderPosition = (event: MouseEvent<HTMLSpanElement>) => {
    const parentLeft: number =
      parent?.current?.getBoundingClientRect().left ?? 0;
    //Remove property box from left and padding
    setTimeSlider(
      event.currentTarget.getBoundingClientRect().left -
        parentLeft +
        event.currentTarget.clientWidth * 0.5
    );
  };

  return (
    <div className={style.frames} ref={parent}>
      <div
        className={style["timer-slider"]}
        style={{ left: timeSlider }}
        onScrollCapture={(e) => console.log(e)}
      ></div>
      <div className={style.timer}>
        {percent.map((x) => (
          <div>
            <span
              key={x}
              className={`${style.numbers} ${style.numbered}`}
              // onClick={TimerSliderPosition}
            >
              <i>{x % 5 === 0 ? x : ""}</i>
            </span>
            <span
              key={x}
              //onClick={TimerSliderPosition}
              className={`${style.lines} ${
                x % 5 === 0 ? style["bold-line"] : ""
              }`}
            ></span>
          </div>
        ))}
      </div>
    </div>
  );
}
