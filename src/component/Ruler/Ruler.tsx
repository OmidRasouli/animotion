import { useEffect, useRef } from "react";
import Canvas from "./Canvas";
import style from "./Ruler.module.scss";

export default function Ruler({ orientation }: { orientation: string }) {
  const ruler = useRef<HTMLDivElement>(null);

  return (
    <div
      className={`${style.ruler} ${
        orientation === "vertical"
          ? style["center-canvas-vertical"]
          : style["center-canvas-horizontal"]
      }`}
      ref={ruler}
    >
      <Canvas orientation={orientation} />
    </div>
  );
}
