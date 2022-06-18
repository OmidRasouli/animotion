import style from "./Output.module.scss";
import { Config } from "../../PublicFiles/Interfaces";

export default function Output({ config }: { config: Config }) {
  return <div className={style.output}></div>;
}
