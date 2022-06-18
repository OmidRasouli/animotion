import { useState } from "react";
import TimeLine from "./component/TimeLine/TimeLine";
import style from "./App.module.scss";
import SideBar from "./component/SideBar/SideBar";
import AnimationConfig from "./component/AnimationConfig/AnimationConfig";
import Output from "./component/Output/Output";
import { Config } from "./PublicFiles/Interfaces";

export default function App() {
  const [animationTimer, setAnimationTimer] = useState<number>(0);
  const [animationConfig, setAnimationConfig] = useState<Config>({
    duration: 0,
  });

  return (
    <div className={style.container}>
      <div className={style.viewport}>
        <AnimationConfig SetAnimationConfig={setAnimationConfig} />
        <div className={style.result}>
          <Output config={animationConfig} time={animationTimer} />
        </div>
        <SideBar />
      </div>
      <TimeLine SetAnimationTimer={setAnimationTimer} />
    </div>
  );
}
