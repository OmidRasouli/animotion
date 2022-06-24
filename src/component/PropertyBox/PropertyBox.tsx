import { useState } from "react";
import style from "./PropertyBox.module.scss";
import data from "./properties.json";

export default function PropertyBox({ items }: { items: Array<number> }) {
  const [menuState, setMenuState] = useState<string>("");
  const properties: Array<string> = data.properties;
  const [search, setSearch] = useState<Array<string>>(properties);

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
          <div className={`${style.propertiesContainer} ${style[menuState]}`}>
            <input
              type={"search"}
              id="propertySearch"
              className={style.searchInput}
              placeholder="Search"
              onChange={(e) => {
                setSearch(
                  properties.filter((x) => x.includes(e.currentTarget.value))
                );
              }}
            />
            <ul className={style.propertyList}>
              {search.map((d, key) => (
                <li key={key}>
                  <button
                    onClick={(e) => console.log(e.currentTarget.innerHTML)}
                  >
                    {d}
                  </button>
                </li>
              ))}
            </ul>
          </div>
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
