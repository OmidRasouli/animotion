import style from "./TimeLine.module.scss";

export default function TimeLine(): JSX.Element {
  return (
    <div className={style.timeline}>
      <div className={style.resizer} />
    </div>
  );
}
