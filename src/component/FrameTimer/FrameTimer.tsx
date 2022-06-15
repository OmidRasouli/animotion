import { useState, useRef, RefObject, ChangeEvent, MouseEvent } from "react";
import style from "./FrameTimer.module.scss";

export default function FrameTimer({
  parent,
}: {
  parent: RefObject<HTMLDivElement>;
}) {
  const width: number = 15;
  const margin: number = 7;
  const [lastTimeSliderIndex, setLastTimeSliderIndex] = useState<number>(0);
  const [timeSlider, setTimeSlider] = useState<number>(margin);
  const percent: Array<number> = Array.from({ length: 101 }, (_, i) => i);
  const timerDiv = useRef<HTMLDivElement>(null);

  const TimerSliderPosition = (event: ChangeEvent<HTMLInputElement>) => {
    setTimeSlider(+event.currentTarget.value * width + margin);
  };

  const TimerSliderMouseOver = (event: MouseEvent) => {
    const left = event.currentTarget.getBoundingClientRect().x;
    const child = Math.max(0, Math.floor((event.clientX - left) / width));
    const children = timerDiv.current?.querySelectorAll(
      `.${style.timerSliderHover}`
    );
    children?.forEach((x) => x.classList.remove(style.timerSliderHover));
    timerDiv.current?.children
      .item(child)
      ?.classList.add(style.timerSliderHover);
  };

  return (
    <div
      className={style.frames}
      ref={parent}
      onMouseMove={TimerSliderMouseOver}
    >
      <div className={style["timer-slider"]} style={{ left: timeSlider }}></div>
      <div className={style.timer} ref={timerDiv}>
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
