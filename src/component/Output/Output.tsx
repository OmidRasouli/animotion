import style from "./Output.module.scss";
import { Config } from "../../PublicFiles/Interfaces";

export default function Output({
  config,
  time,
  width,
  height,
  css,
}: {
  config: Config;
  time: number;
  width: number;
  height: number;
  css?: string;
}) {
  return (
    <>
      <style>{`.custom-style {${css
        ?.replaceAll("{", "")
        .replaceAll("}", "")}}`}</style>
      <div
        className={`${style.output} custom-style`}
        style={{
          animationDuration: `${config.duration}s`,
          animationDelay: `${-(config.duration * time) / 100}ms`,
          width: width,
          height: height,
        }}
      ></div>
    </>
  );
}
