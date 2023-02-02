import { useState } from "react";
import { SquareInput } from "../SquareInput/SquareInput";

export function NumberOfPlayers(props) {
    
    const [pickNumber,setPickNumber] = useState(false)
    
    return (
      < >
      
      {/* Button de masquage de l'option pour eviter missclick en partie */}
      <button onClick={() => setPickNumber(!pickNumber)}>Nombre de joueurs : {props.numberOfPlayers}</button>
        
        {/* Option mettre à jour nombre de joueurs*/}
       { pickNumber && 
       < SquareInput parent_1={true} setPlayerNumber={props.setPlayerNumber} />
       }
      </>
    );
  }