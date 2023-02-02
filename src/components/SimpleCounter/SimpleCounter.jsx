import { SquareInput } from "../SquareInput/SquareInput";
import style from "./style.module.css"

export function SimpleCounter(props) {
    return (
      <div >
        <button className={style.counter} onClick={() => props.modifyLife('subtract',props.player)}>&minus;</button>
        <SquareInput life={props.life} parent_2={true} />
        <button className={style.counter} onClick={() => props.modifyLife('add',props.player)}>+</button>
      </div>
    );
  }