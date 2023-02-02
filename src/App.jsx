import style from "./style.module.css"
import { LifeContainer } from "./components/LifeContainer/LifeContainer";
import { NumberOfPlayers } from "./components/NumberOfPlayers/NumberOfPlayers";
import { useEffect, useState } from "react";

function App() {

  useEffect(() => {
    if(JSON.parse(localStorage.getItem("nbPlayer"))){
      setPlayerNumber(JSON.parse(localStorage.getItem("nbPlayer")),"automaticSet");
    }
  }, []);

  const [numberOfPlayers,setNumberOfPlayers] = useState(2);

  const [arrayOfPlayers,setArrayOfPlayers] = useState([1,2]);

  function setPlayerNumber(number,action){
    //alert(number);
    if(number > 1 && number < 9 ){
      if(action === "manualSet"){
        localStorage.clear();
        document.location.reload();
      }

      setNumberOfPlayers(number);
      let arr = [];
      for(let i=1;  i <= number;i++){
        arr.push(i);
      }
      setArrayOfPlayers(arr);
      // if not in storage
      intializePlayer(arr);

      localStorage.setItem('nbPlayer',JSON.stringify(number));
    }
    
  }

  function intializePlayer(arr){
    
    // si les joueurs ne sont pas enregistrés, le faire
    if(!JSON.parse(localStorage.getItem("Player 1"))){

      let obj = {
        "life" : 20,
        "color" : "white",
        "name" : ""
      };
      for(let i in arr){
        localStorage.setItem('Player '+arr[i],JSON.stringify(obj));
      };
    }
    
    }

  

  console.log(arrayOfPlayers);

  return (
    <div className={style.main}>
      <h1 className={style.title}>Magic counter</h1>
      <div>
      <NumberOfPlayers numberOfPlayers={numberOfPlayers}
      setPlayerNumber={setPlayerNumber}></NumberOfPlayers> 
      </div>
      
      {arrayOfPlayers.map((player,index) => (
    <LifeContainer
    key={index} player={player}>
    </LifeContainer>
    ))}

    </div>
  );
}

export default App;
