import { useEffect } from "react";
import { useRef } from "react";
import style from "./Canvas.module.scss";

export default function Canvas({ orientation }: { orientation: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const width: number = 3000;
  const bigIntervals: number = 100;
  const smallIntervals: number = 10;
  const margin: number = 30;

  useEffect(() => {
    draw();
  }, []);

  function draw() {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    context?.clearRect(0, 0, width, width);

    if (canvas) {
      canvas.width = orientation === "horizontal" ? width : margin;
      canvas.height = orientation === "vertical" ? width : margin;
    }

    if (context) {
      for (let i = 0; i < width; i += smallIntervals) {
        context.beginPath();
        context.strokeStyle = "#fff";
        if (i === 0) {
          if (orientation === "horizontal") {
            context.moveTo(0, margin - 1);
            context.lineTo(width, margin - 1);
          } else {
            context.moveTo(margin - 1, 0);
            context.lineTo(margin - 1, width);
          }
          context.stroke();
          context.stroke();
          context.stroke();
        }
        const distance: number = i % bigIntervals === 0 ? 0 : margin / 2;
        context.fillStyle = "#fff";
        if (orientation === "horizontal") {
          if (i % bigIntervals === 0) {
            context.fillText(i.toString(), i + 5, margin / 3);
            context.fillText(i.toString(), i + 5, margin / 3);
          }
          context.moveTo(i + 1, margin);
          context.lineTo(i + 1, distance);
        } else if (orientation === "vertical") {
          context.moveTo(margin, i + 1);
          context.lineTo(distance, i + 1);
          if (i % bigIntervals === 0) {
            context.save();
            context.rotate(Math.PI / 2);
            context.fillText(i.toString(), i + 5, -5);
            context.fillText(i.toString(), i + 5, -5);
            context.restore();
          }
        }
        context.stroke();
        context.stroke();
        context.stroke();
      }
    }
  }

  return (
    <canvas
      className={style[orientation]}
      ref={canvasRef}
      width={orientation === "horizontal" ? width : margin}
      height={orientation === "vertical" ? width : margin}
    ></canvas>
  );
}
