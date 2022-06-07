import TimeLine from "./component/TimeLine/TimeLine";
import style from "./App.module.scss";

export default function App() {
  return (
    <div className={style.container}>
      <div className={style.viewport}></div>
      <TimeLine />
    </div>
  );
}
