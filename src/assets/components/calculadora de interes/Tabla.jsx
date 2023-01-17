import { useState } from 'react'
import React from 'react';
import Mes from './Mes';
function Tabla(props){

 

    return(<div className='tabla-container'><h2 className='titulo-tabla'>Tabla de amortizacion</h2>
    <table className="table table-dark table-striped border border-primary">
            <thead id="tabla-indice-id" className='tabla-indice'>
              <tr>
                <th scope="col">#Mes No.</th>
                <th scope="col">Cuota</th>
                <th scope="col">Capital</th>
                <th scope="col">Interes</th>
                <th scope="col">Balance</th>
              </tr>
            </thead>
            <tbody>
            {props.meses.map((me) => {
              return <Mes 
              key={`${me.key}`}
              id={me.id}
              Cuota={me.Cuota}
              Capital={me.Capital}
              Interes={me.Interes}
              Balance={me.Balance}/>
            })}
          </tbody>
          </table></div>
        )
    
}





export default Tabla