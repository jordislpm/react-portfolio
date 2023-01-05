import React from 'react';
import Nota from './Nota';


export default function Notas (props){
return(
<ul className="list-group list-group-flush bg-light text-dark border border-dark">
{props.notas.map((note,i)=>{
        return <Nota key={`${note}${i}`} nota={note.nota}
        />
    })}
  
</ul>
)
}



