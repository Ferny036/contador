import { useState } from "react";
import Button from "./components/button/button.component";
import React from 'react'
import "./app.scss"

function App() {

  const defaultValue: number = 0;
  const [salto, setSalto] = useState(defaultValue);
  const [count, setCount] = useState(defaultValue);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSalto(parseInt(e.target.value.length > 0 ? e.target.value : "0"));
  }

  const plusIcon: JSX.Element = <i className="fa fa-plus" aria-hidden="true"></i>
  const dashIcon: JSX.Element = <i className="fa fa-minus" aria-hidden="true"></i>
  const resetIcon: JSX.Element = <i className="fas fa-redo-alt"></i>

  return (
    <>
      <h1 id="count">Cuenta: {count}</h1>
      <section className='container'>
        <Button style="btn-primary" text={plusIcon} value="Sumar" update={() => { setCount(count + salto) }}></Button>
        <Button style="btn-primary" text={dashIcon} value="Restar" update={() => { setCount(count - salto) }}></Button>
        <input type="number" onChange={handleInput} value={salto} />
        <Button style="btn-secondary" text={resetIcon} value="Reset" update={() => { setCount(defaultValue); setSalto(defaultValue) }}></Button>
      </section>
    </>
  );
}

export default App;
