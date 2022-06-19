import { useState } from "react";
import style from "./AnimationConfig.module.scss";
import { Config } from "../../PublicFiles/Interfaces";

export default function AnimationConfig({
  SetAnimationConfig,
}: {
  SetAnimationConfig: Function;
}) {
  const [animationConfigState, setAnimationConfigState] = useState<Config>({
    duration: 0,
    width: 100,
    height: 100,
  });

  const SetConfig = ({ config }: { config: Config }) => {
    SetAnimationConfig({ ...config });
    setAnimationConfigState({ ...config });
  };

  return (
    <div className={style["animation-config"]}>
      <div>
        <label htmlFor="width">Width:</label>
        <input
          type={"range"}
          min={1}
          max={500}
          value={animationConfigState.width}
          onChange={(e) =>
            SetConfig({
              config: {
                ...animationConfigState,
                width: parseInt(e.target.value),
              },
            })
          }
        />
        <input
          type={"number"}
          min={1}
          max={500}
          id={"width"}
          value={animationConfigState.width}
          onChange={(e) =>
            SetConfig({
              config: {
                ...animationConfigState,
                width: parseInt(e.target.value),
              },
            })
          }
        />
      </div>
      <div>
        <label htmlFor="height">Height:</label>
        <input
          type={"range"}
          min={1}
          max={500}
          value={animationConfigState.height}
          onChange={(e) =>
            SetConfig({
              config: {
                ...animationConfigState,
                height: parseInt(e.target.value),
              },
            })
          }
        />
        <input
          type={"number"}
          min={1}
          max={500}
          value={animationConfigState.height}
          id={"height"}
          onChange={(e) =>
            SetConfig({
              config: {
                ...animationConfigState,
                height: parseInt(e.target.value),
              },
            })
          }
        />
      </div>
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
