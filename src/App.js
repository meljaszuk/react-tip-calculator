import React from 'react';

function App() {
  return (
    <form>
      <BillAmount />
      <YourTip />
      <FriendsTip />
      <FinalAmount />
      <Button />
    </form>
  );
}

export default App;

function BillAmount() {
  return (
    <div>
      <label htmlFor="amount">How much was the bill?</label>
      <input type="text" name="amount" id="amount" required />
    </div>
  );
}

function YourTip() {
  return (
    <div>
      <label htmlFor="you">How did you like the service?</label>
      <select name="you" id="you">
        <option value="0">Weak 0%</option>
        <option value="1">Average 5%</option>
        <option value="2">Good 10%</option>
        <option value="3">Very Good 15%</option>
        <option value="4">Amazing 20%</option>
      </select>
    </div>
  );
}

function FriendsTip() {
  return (
    <div>
      <label htmlFor="friend">How did your friend like the service?</label>
      <select name="friend" id="friend">
        <option value="0">Weak 0%</option>
        <option value="1">Average 5%</option>
        <option value="2">Good 10%</option>
        <option value="3">Very Good 15%</option>
        <option value="4">Amazing 20%</option>
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
