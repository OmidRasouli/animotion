import { useState, RefObject, ChangeEvent } from "react";
import style from "./FrameTimer.module.scss";

export default function FrameTimer({
  parent,
}: {
  parent: RefObject<HTMLDivElement>;
}) {
  const width: number = 15;
  const margin: number = 7;
  const [timeSlider, setTimeSlider] = useState<number>(margin);
  const percent: Array<number> = Array.from({ length: 101 }, (_, i) => i);

  const TimerSliderPosition = (event: ChangeEvent<HTMLInputElement>) => {
    setTimeSlider(+event.currentTarget.value * width + margin);
  };

  return (
    <div className={style.frames} ref={parent}>
      <div className={style["timer-slider"]} style={{ left: timeSlider }}></div>
      <div className={style.timer}>
        {percent.map((x, key) => (
          <div key={key}>
            <span className={`${style.numbers} ${style.numbered}`}>
              <i>{x % 5 === 0 ? x : ""}</i>
            </span>
            <span
              className={`${style.lines} ${
                x % 5 === 0 ? style["bold-line"] : ""
              }`}
            ></span>
          </div>
        ))}
      </div>
      <input
        type="range"
        className={style["timer-slider-input"]}
        min={0}
        max={100}
        onChange={TimerSliderPosition}
      />
    </div>
  );
}
