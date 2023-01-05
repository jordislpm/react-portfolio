import React, { useState } from 'react'



export default function Form({monto,cuota,interesAnual,handleMonto,handleInteresAnual,handleCuota,createMes}){
    
  
  
  
  return(
        <div className="row d-flex justify-content-between mx-2 pt-3">
        <form onSubmit={createMes}>
        <div className="mb-3">
        
          <label className="form-label">Monto</label>
          <input 
          value={monto} 
          type="number" 
          className="form-control" 
          id="exampleInputEmail1" 
          aria-describedby="emailHelp"
          onChange={handleMonto}/>
        
          <label className="form-label">Cuota</label>
          <input 
          value={cuota} 
          type="number" 
          className="form-control" 
          id="exampleInputPassword1"
          onChange={handleCuota}/>
      
          <label className="form-label">interes Anual</label>
          <input 
          value={interesAnual} 
          type="number" 
          className="form-control" 
          id="exampleInputPassword1"
          onChange={handleInteresAnual}/>
         
        <input
         value="Calcular"
         type="submit" 
         className="btn btn-primary mt-3 m"
        />
        </div>
      </form>
      </div>
    )

}

