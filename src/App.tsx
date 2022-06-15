import TimeLine from "./component/TimeLine/TimeLine";
import style from "./App.module.scss";
import SideBar from "./component/SideBar/SideBar";
import AnimationConfig from "./component/AnimationConfig/AnimationConfig";

export default function App() {
  return (
    <div className={style.container}>
      <div className={style.viewport}>
        <AnimationConfig />
        <div className={style.result}>
          <div className={style.output}></div>
        </div>
        <SideBar />
      </div>
      <TimeLine />
    </div>
  );
}
