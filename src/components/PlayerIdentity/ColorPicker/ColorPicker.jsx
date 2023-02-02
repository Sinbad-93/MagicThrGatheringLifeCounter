import style from "./style.module.css"

export function ColorPicker(props) {
    return (
          <div className={style.colorPicker}
          onClick={()=> props.modifyBackground(props.color,props.player)}
          style={{backgroundColor : props.color}}></div>
    );
  }