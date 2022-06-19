import { useState } from "react";
import TimeLine from "./component/TimeLine/TimeLine";
import style from "./App.module.scss";
import SideBar from "./component/SideBar/SideBar";
import AnimationConfig from "./component/AnimationConfig/AnimationConfig";
import Output from "./component/Output/Output";
import { Config } from "./PublicFiles/Interfaces";
import Ruler from "./component/Ruler/Ruler";

export default function App() {
  const [animationTimer, setAnimationTimer] = useState<number>(0);
  const [animationConfig, setAnimationConfig] = useState<Config>({
    duration: 0,
    width: 100,
    height: 100,
  });

  return (
    <div className={style.container}>
      <div className={style.viewport}>
        <AnimationConfig SetAnimationConfig={setAnimationConfig} />
        <div className={style.result}>
          <Ruler orientation="horizontal" />
          <Ruler orientation="vertical" />
          <Output
            config={animationConfig}
            time={animationTimer}
            width={animationConfig.width}
            height={animationConfig.height}
          />
        </div>
        <SideBar />
      </div>
      <TimeLine SetAnimationTimer={setAnimationTimer} />
    </div>
  );
}
