import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <form>
      <label for="amount">
        How much was the bill?
      </label>

      <input
        type="text"
        name="amount"
        id="amunt"
        required
      ></input>

      <br></br>

      <label for="you">
        How did you like the service?
      </label>

      <select name="you" id="you">
        <option value="0">Week 0%</option>
        <option value="1">Average 5%</option>
        <option value="2">Good 10%</option>
        <option value="3">Very Good 15%</option>
        <option value="4">Amazing 20%</option>
      </select>

      <br></br>

      <label for="friend">
        How did your friend like the service?
      </label>

      <select name="friend" id="you">
        <option value="0">Week 0%</option>
        <option value="1">Average 5%</option>
        <option value="2">Good 10%</option>
        <option value="3">Very Good 15%</option>
        <option value="4">Amazing 20%</option>
      </select>

      <br></br>

      <div>
        <strong>You pay X$ ($X + $Y tip)</strong>
      </div>

      <br></br>

      <button>
        Reset
      </button>
    </form>
  );
}

export default App;
