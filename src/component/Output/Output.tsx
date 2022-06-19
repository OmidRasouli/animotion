import style from "./Output.module.scss";
import { Config } from "../../PublicFiles/Interfaces";

export default function Output({
  config,
  time,
  width,
  height,
}: {
  config: Config;
  time: number;
  width: number;
  height: number;
}) {
  return (
    <div
      className={style.output}
      style={{
        animationDuration: `${config.duration}ms`,
        animationDelay: `${-(config.duration * time) / 100}ms`,
        width: width,
        height: height,
      }}
    ></div>
  );
}
