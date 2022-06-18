import { useState } from "react";
import style from "./AnimationConfig.module.scss";
import { Config } from "../../PublicFiles/Interfaces";

export default function AnimationConfig({
  SetAnimationConfig,
}: {
  SetAnimationConfig: Function;
}) {
  const [animationConfigState, setAnimationConfigState] = useState<Config>({
    name: "",
    duration: 0,
    delay: 0,
    iteration: -1,
    direction: "",
  });

  const SetConfig = ({ config }: { config: Config }) => {
    SetAnimationConfig({ ...config });
    setAnimationConfigState({ ...config });
  };

  return (
    <div className={style["animation-config"]}>
      <div>
        <label htmlFor="duration">Duration:</label>
        <input
          type={"number"}
          id={"duration"}
          onChange={(e) =>
            SetConfig({
              config: {
                ...animationConfigState,
                duration: parseInt(e.target.value),
              },
            })
          }
        />
      </div>
    </div>
  );
}
