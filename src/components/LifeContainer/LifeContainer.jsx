import { PlayerIdentity } from "../PlayerIdentity/PlayerIdentity";
import { SimpleCounter } from "../SimpleCounter/SimpleCounter";
import style from "./style.module.css"
import { useEffect,useState } from "react";

export function LifeContainer(props) {

    const [life,setLife] = useState(20);
    const [choosedBackground,setChoosedBackground] = useState('white');
    const [name,setName] = useState('');

    useEffect(() => {
        //si le joueur existe dans le localStorage récupérer données
    if(JSON.parse(localStorage.getItem("Player "+props.player))){
        const player = JSON.parse(localStorage.getItem("Player "+props.player))
        setLife(player.life);
        setChoosedBackground(player.color);
        setName(player.name);
    }
      }, []);

    

    function modifyBackground(color,player){
        setChoosedBackground(color);
        storagePlayer("color",player,color);
    }

    function modifyName(str, player){
        setName(str);
        storagePlayer("name",player,str);
    }

    function modifyLife(action,player){
        var currentLife = life;
        if(action === 'subtract'){
            currentLife = life-1;
            setLife(currentLife);
        }
        else{
            currentLife = life+1;
            setLife(currentLife);
        }
        storagePlayer("life",player,currentLife);
    }

    function storagePlayer(action,player, value){
        switch (action) {
            case "life":
                var playerObj = JSON.parse(localStorage.getItem(player));
                playerObj.life = value;
                localStorage.setItem(player,JSON.stringify(playerObj));

                break;
            case "name":
                var playerObj = JSON.parse(localStorage.getItem(player));
                playerObj.name = value;
                localStorage.setItem(player,JSON.stringify(playerObj));

                break;
            case "color":
                var playerObj = JSON.parse(localStorage.getItem(player));
                playerObj.color = value;
                localStorage.setItem(player,JSON.stringify(playerObj));
                
                break;
        
            default:
                break;
        }
        
      }

    return (
      <div className={style.life_container}
      style={{backgroundColor : choosedBackground}}>
        <PlayerIdentity player={"Player "+props.player} name={name}
        modifyName={modifyName}
        modifyBackground={modifyBackground}></PlayerIdentity>
        <SimpleCounter modifyLife={modifyLife} life={life}
        player={"Player "+props.player}
        ></SimpleCounter>
      </div>
    );
  }