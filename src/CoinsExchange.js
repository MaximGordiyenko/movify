import { useState } from "react";

export const CoinsExchange = () => {
  const [input, setInput] = useState('');
  let coins = [];
  let remainder = 0;
  console.log(remainder);
  coins[0] = [1, 2, 3];
  coins[1] = {1: 1, 2: 2};
  
  console.log('coins', coins);
  
  const change = (event) => {
    setInput(event.target.value);
  };
  
  const submit = (event) => {
    event.preventDefault();
    const total = Math.round(Number(input));
    console.log(typeof total, total);
  };
  
  return (
    <>
      <form onSubmit={submit}>
        <label>
          <input type="number" value={input} onChange={change} style={{color: '#fff'}}/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
      <div style={{color: '#fff'}}>{input}</div>
    </>
  );
};