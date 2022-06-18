import { useState } from "react";
import TimeLine from "./component/TimeLine/TimeLine";
import style from "./App.module.scss";
import SideBar from "./component/SideBar/SideBar";
import AnimationConfig from "./component/AnimationConfig/AnimationConfig";
import Output from "./component/Output/Output";
import { Config } from "./PublicFiles/Interfaces";

export default function App() {
  const [animationConfig, setAnimationConfig] = useState<Config>({
    delay: 0,
    direction: "",
    duration: 0,
    iteration: 0,
    name: "",
  });

  return (
    <div className={style.container}>
      <div className={style.viewport}>
        <AnimationConfig SetAnimationConfig={setAnimationConfig} />
        <div className={style.result}>
          <Output config={animationConfig} />
        </div>
        <SideBar />
      </div>
      <TimeLine />
    </div>
  );
}
