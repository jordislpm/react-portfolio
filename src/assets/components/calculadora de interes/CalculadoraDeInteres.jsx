import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './Form';
import Tabla from './Tabla';
import Notas from './Notas';
import Foot from './Foot';
import InteresFijo from './InteresFijo';
import './calculadoraDeInteres.css'



function CalculadoraDeInteres (){
    
    const arr = [];
    const[notas,setNotas] = useState([
      {nota:"Los resultados de esta simulación son aproximados.",
        },{
          nota:"Se consideran meses de 30 días y años de 360 días."  
        },{
          nota:"No se contempló período de gracia y el primer vencimiento es a 30 días."
        },{
          nota:"En caso de préstamos hipotecarios, la cuota mensual aumentaría producto del seguro de vida y de propiedad, no incluidos en el cálculo.",
        }
    ])

    function separator(numb) {
      var str = numb.toString().split(".");
      str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return str.join(".");
  }

    const [interesFijo, setInteresFijo] = useState('0')

    const [monto, setMonto] = useState(0)
    
      const handleMonto = (e)=>{
        setMonto(e.target.value)
      };
    
    const [interesAnual,setInteresAnual] = useState(0)

     const handleInteresAnual = (e)=>{
        setInteresAnual(e.target.value)
      };
    
    const [cuota,setCuota] = useState(0)
    
      const handleCuota = (e)=>{
        setCuota(e.target.value)
      };

    const [meses,setMeses] = useState([...arr]);

    const createMes = (e)=>{

      if(monto > 0 && cuota > 0 && interesAnual > 0){



     
      setMeses([])
      e.preventDefault()
        let V = monto;
        let N = cuota
        let I = (interesAnual/12)/100;
        let interesMensual = (V * I);
        let C = (interesMensual/ (1-(1 + I)**(N * -1))).toFixed(2)
        let capital = (C - interesMensual).toFixed(2);
        let balance = (V - capital).toFixed(2);
        let interes = interesMensual.toFixed(2);
        const interesPorc = (interesMensual * 0.01);
   
       
        
  for (let i = 0; i < cuota; i++) {


    const newMes ={
    id: `${i +1}`,
    key: `clave${i+1}`,
    Mes:`${i+1}`,
    Cuota: `${separator(C)}`,
    Capital: separator(capital),
    Interes: separator(interes),
    Balance: separator(balance)
     };
  
  

  interes = (balance * I).toFixed(2);
  capital = (C-interes).toFixed(2);
  balance = (balance - capital).toFixed(2);
  if(balance < 1){
    balance = 0
  }
  arr.push(newMes)
      }
      setMeses([...arr])
      setInteresAnual(0)
      setMonto(0)
      setCuota(0)
      setInteresFijo(`${C}`)

    } else(
      alert("Para hacer el calculo todos los campos deben tener valores.")
    )
      
    }
       

    

    return(
    <div className="header row justify-content-lg-center bg-light text-dark pt-4">
      <div>
      <h2 className="h2 text-center">Calculadora Financiera de Cuotas de prestamos</h2>
      </div>
      <div className="row mt-3 mb-4 px-0 mx-0">
        <div className="form-container col my-2 mx-4 bg-dark text-white border border-primary rounded" >
        <Form 
          cuota={cuota}
          monto={monto} 
          interesAnual={interesAnual}
          createMes={createMes}
          handleMonto={handleMonto} 
          handleCuota={handleCuota}
          handleInteresAnual={handleInteresAnual}/>
        </div>
        <div className="col mx-4 bg-light text-dark pt-2">
        <Notas notas={notas}/>
        {meses.length > 0 && <InteresFijo interesFijo={meses[0].Cuota}/>}
        </div>
    </div>
    <div className="justify-content-center me-0 px-5 mt-2 pb-4">
   {meses.length > 0 && <Tabla meses={meses}/>}
   {meses.length <= 0 && <Foot/>}
     </div>
    </div>
    )


}

export default CalculadoraDeInteres