import React from 'react';
import { useState } from 'react';

function App() {
  const [billAmount, setBillAmount] = useState(0);
  const [yourTip, setYourTip] = useState(10);
  const [otherTip, setOtherTip] = useState(10);

  return (
    <form>
      <BillAmount billAmount={billAmount} setBillAmount={setBillAmount} />
      <YourTip yourTip={yourTip} setYourTip={setYourTip}/>
      <OtherTip otherTip={otherTip} setOtherTip={setOtherTip} />
      <FinalAmount />
      <Button />
    </form>
  );
}

export default App;

function BillAmount({ billAmount, setBillAmount }) {
  const handleBillAmountChange = (event) => {
    setBillAmount(event.target.value);
    alert(event.target.value);
  };

  return (
    <div>
      <label htmlFor="amount">How much was the bill?</label>
      <input
        type="text"
        name="amount"
        id="amount"
        required
        value={billAmount} // Używamy wartości przekazanej jako props
        onChange={handleBillAmountChange}
      />
    </div>
  );
}


function YourTip({ yourTip, setYourTip }) {
  const handleYourTipChange = (evnt) => {
    setYourTip(evnt.target.value);
    alert(evnt.target.value);
  }

  return (
    <div>
      <label htmlFor="you">How did you like the service?</label>
      <select 
        name="you" 
        id="you"
        onChange={handleYourTipChange}
        value={yourTip}
      >
        <option value="0">Weak 0%</option>
        <option value="5">Average 5%</option>
        <option value="10">Good 10%</option>
        <option value="15">Very Good 15%</option>
        <option value="20">Amazing 20%</option>
      </select>
    </div>
  );
}

function OtherTip({ otherTip, setOtherTip }) {
  const handleOtherTipChange = (evnt) => {
    setOtherTip(evnt.target.value);
    alert(evnt.target.value);
  }

  return (
    <div>
      <label htmlFor="you">How did you like the service?</label>
      <select 
        name="you" 
        id="you"
        onChange={handleOtherTipChange}
        value={otherTip}
      >
        <option value="0">Weak 0%</option>
        <option value="5">Average 5%</option>
        <option value="10">Good 10%</option>
        <option value="15">Very Good 15%</option>
        <option value="20">Amazing 20%</option>
      </select>
    </div>
  );
}

function FinalAmount() {
  return (
    <div>
      <strong>You pay X$ ($X + $Y tip)</strong>
    </div>
  );
}

function Button() {
  return (
    <button type="reset">Reset</button>
  );
}
