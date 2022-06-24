import { useState } from "react";
import style from "./PropertyBox.module.scss";

export default function PropertyBox({ items }: { items: Array<number> }) {
  const [menuState, setMenuState] = useState<string>("");

  return (
    <div className={style.propertyBox}>
      <div className={style.title}>
        <span>Properties</span>
        <div className={style.addContainer}>
          <button
            className={style.addButton}
            onFocus={() => setMenuState("active")}
            onBlur={() =>
              setTimeout(function () {
                setMenuState("");
              }, 200)
            }
          >
            +
          </button>
          <ul className={`${style.propertyList} ${style[menuState]}`}>
            <li>
              <button onClick={(e) => console.log(e.currentTarget.value)}>
                Background color
              </button>
            </li>
            <li>
              <button onClick={(e) => console.log("omid")}>
                Border radius
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className={style.items}>
        {items.map((x, i) => (
          <div className={style.item} key={i}>
            {x}
          </div>
        ))}
      </div>
    </div>
  );
}
