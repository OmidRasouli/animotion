import style from "./PropertyBox.module.scss";

export default function PropertyBox({ items }: { items: Array<number> }) {
  return (
    <div className={style.propertyBox}>
      <div className={style.title}>Properties</div>
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
