import style from "./StyleBox.module.scss";

export default function StyleBox() {
  return (
    <div className={style.box}>
      <div className={style.title}>Style box</div>
    </div>
  );
}
