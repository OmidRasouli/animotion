import { useState, RefObject, MouseEvent } from "react";
import style from "./FrameTimer.module.scss";

export default function FrameTimer({
  parent,
}: {
  parent: RefObject<HTMLDivElement>;
}) {
  const [timeSliderGhost, setTimeSliderGhost] = useState<number>(7);
  const [timeSlider, setTimeSlider] = useState<number>(7);
  const percent: Array<number> = Array.from({ length: 101 }, (_, i) => i);

  const TimerSliderPositionPrev = (event: MouseEvent<HTMLSpanElement>) => {
    const parentLeft: number =
      parent?.current?.getBoundingClientRect().left ?? 0;
    //Remove property box from left and padding
    setTimeSliderGhost(
      event.currentTarget.getBoundingClientRect().left -
        parentLeft +
        event.currentTarget.clientWidth * 0.5
    );
  };

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
            >
              <i>{x}</i>
            </span>
          ) : (
            <span
              key={x}
              onMouseOver={TimerSliderPositionPrev}
              onClick={TimerSliderPosition}
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
            className={x % 5 === 0 ? style["bold-line"] : ""}
          ></span>
        ))}
      </div>
    </div>
  );
}
