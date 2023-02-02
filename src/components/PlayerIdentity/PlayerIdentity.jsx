import style from "./style.module.css"
import { ColorPicker } from "./ColorPicker/ColorPicker";

import { useState } from "react";

export function PlayerIdentity(props) {

  const colorList = ["red","blue","violet","yellow","green","grey","black","cyan"]
  
  const [showOption,setShowOption] = useState(false);

    return (
      <div className={style.playerIdentity}>
        <div className={style.playerName}>
          <span> {props.name || props.player}</span>
        <button onClick={()=> setShowOption(!showOption) }>&#9997;</button>
        </div>
        { showOption &&
        <input className={style.inp} type="text" onChange={(e)=> props.modifyName(e.target.value,props.player)} />
        }
        { showOption &&
        <div className={style.colorContainer}>
        {colorList.map((color,index) => (
    <ColorPicker
    modifyBackground={props.modifyBackground} player={props.player}
    key={index} color={color}>
    </ColorPicker>
    ))}</div>}
      </div>
    );
  }