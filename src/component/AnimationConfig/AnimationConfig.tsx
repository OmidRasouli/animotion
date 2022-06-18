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
        <label htmlFor="name">Name:</label>
        <input
          type={"text"}
          id={"name"}
          onChange={(e) =>
            SetConfig({
              config: { ...animationConfigState, name: e.target.value },
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
      <div>
        <label htmlFor="delay">Delay:</label>
        <input
          type={"number"}
          id={"delay"}
          onChange={(e) =>
            SetConfig({
              config: {
                ...animationConfigState,
                delay: parseInt(e.target.value),
              },
            })
          }
        />
      </div>
      <div>
        <label htmlFor="iteration">Iteration:</label>
        <input
          type={"number"}
          min={-1}
          id={"iteration"}
          onChange={(e) =>
            SetConfig({
              config: {
                ...animationConfigState,
                iteration: parseInt(e.target.value),
              },
            })
          }
        />
      </div>
      <div>
        <label htmlFor="direction">Direction:</label>
        <select
          id={"direction"}
          onChange={(e) =>
            SetConfig({
              config: {
                ...animationConfigState,
                direction: e.target.value,
              },
            })
          }
        >
          <option value={"normal"}>Normal</option>
          <option value={"reverse"}>Reversse</option>
          <option value={"alternate"}>Alternate</option>
          <option value={"alternate-reverse"}>Alternate-Reverse</option>
        </select>
      </div>
    </div>
  );
}
