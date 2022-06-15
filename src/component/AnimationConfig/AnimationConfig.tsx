import { useState } from "react";
import style from "./AnimationConfig.module.scss";

interface Config {
  name: string;
  duration: number;
  delay: number;
  iteration: number;
  direction: string;
}

export default function AnimationConfig() {
  const [animationConfig, setAnimationConfig] = useState<Config>({
    name: "",
    duration: 0,
    delay: 0,
    iteration: -1,
    direction: "",
  });

  return (
    <div className={style["animation-config"]}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type={"text"}
          id={"name"}
          onChange={(e) =>
            setAnimationConfig({ ...animationConfig, name: e.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="duration">Duration:</label>
        <input
          type={"number"}
          id={"duration"}
          onChange={(e) =>
            setAnimationConfig({
              ...animationConfig,
              duration: parseInt(e.target.value),
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
            setAnimationConfig({
              ...animationConfig,
              delay: parseInt(e.target.value),
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
            setAnimationConfig({
              ...animationConfig,
              iteration: parseInt(e.target.value),
            })
          }
        />
      </div>
      <div>
        <label htmlFor="direction">Direction:</label>
        <select
          id={"direction"}
          onChange={(e) =>
            setAnimationConfig({
              ...animationConfig,
              direction: e.target.value,
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
