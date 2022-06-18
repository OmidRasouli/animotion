import style from "./Output.module.scss";
import { Config } from "../../PublicFiles/Interfaces";

export default function Output({
  config,
  time,
}: {
  config: Config;
  time: number;
}) {
  return (
    <div
      className={style.output}
      style={{
        animationDuration: `${config.duration}ms`,
        animationDelay: `${-(config.duration * time) / 100}ms`,
      }}
    ></div>
  );
}
