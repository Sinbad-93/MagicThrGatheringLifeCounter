import style from "./style.module.css"

export function SquareInput(props) {
    return (
      <>
      {/* 2 composants parents différent avec onChange différent */}

        {props.parent_1 &&
            <input className={style.input_parent1} type="number" 
        onChange={(e) => props.setPlayerNumber(e.target.value,"manualSet")}
         />} 

        {props.parent_2 &&
            <input disabled className={style.input_parent2} type="number" 
        value={props.life}
    
         />}
      </>
    );
  }