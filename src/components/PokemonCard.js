import React,{useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({poke}) {
  const {name,hp,sprites}=poke;
  const [show, setShow] = useState(true)

  function handleClick(){
    setShow(!show)
  }
  return (
    <Card>
      <div>
        <div className="image" onClick={handleClick}>
          <img src={show? sprites.front: sprites.back} alt={name} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
