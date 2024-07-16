import React, { useState } from 'react'
import './bmi.css'

const Bmicalculator = () => {

  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmistatus, setBmistatus] = useState("");
  const [errormessage, setErrormessage] = useState("");

  function calculatebmi() {
    const isvalidheight = /^\d+$/.test(height) // to valid the height user has to enter the value
    const isvalidweight = /^\d+$/.test(weight)
    if (isvalidheight && isvalidweight) {  // if the height,weight is not empty then procede
      const heightmtr = height / 100;  //convert height cm --> meters
      const bmivalue = weight / (heightmtr + heightmtr);  // bmi=w/h+h
      setBmi(bmivalue.toFixed(2));
      if (bmivalue < 18.5) {
        setBmistatus("Under Weight");
      }
      else if (bmivalue >= 18 && bmivalue < 24.9) {
        setBmistatus("Normal Weight");
      } else if (bmivalue >= 25 && bmivalue < 29.9) {
        setBmistatus("Over Weight");
      } else {
        setBmistatus("Obese!!YOU NEED TO FOCUS ON YOUR HEALTH");
      }
      setErrormessage("");
    }
    else {
      setBmi(null);
      setBmistatus("");
      setErrormessage("Enter Valid height and weight")
    }
  }
  function ClearAll() { // After clicking on the clear button  
    setHeight("");      //  u should clear all the values to empty so use the useState() functions
    setWeight("");     // to set empty
    setBmi(null);
    setBmistatus("");
  }
  return (
    <>
      <div className='bmi-container'>
        <div className="data">
          <h1>BMI Calculator</h1>
          {errormessage && (<p className='error'>{errormessage}</p>)}
          <div className="input-coniner">
            <label htmlFor="height">Height (CM)</label>
            <input type="text"
              value={height}
              onChange={(e) => setHeight(e.target.value)} id="height" />
          </div>

          <div className="input-coniner">
            <label htmlFor="weight">Weight (KG)</label>
            <input type="text"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              id="weight" />
          </div>

          <button onClick={calculatebmi}>Calculate BMI</button>
          <button onClick={ClearAll}>Clear</button>

          {bmi !== null && (         // Condio=tional rendering
            <div className="result">
              <p>Your BMI is : {bmi}</p>
              <p>Status is : {bmistatus}</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Bmicalculator
