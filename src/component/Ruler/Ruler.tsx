export default function Ruler({
  orientation,
  width,
  height,
}: {
  orientation: string;
  width: number;
  height: number;
}) {
  const bigIntervals: number = 100;
  const smallIntervals: number = 5;

  return (
    <div>
      <canvas></canvas>
    </div>
  );
}
