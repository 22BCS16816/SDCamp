import { useState } from "react";
import "./App.css";
function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [shipping, setShipping] = useState('');
  const [payment, setPayment] = useState('');

  return (
    <div className="form-container">
      <form className="card">
        <h2>Checkout Form</h2>

        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <p>Name: {name}</p>

        <label>Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter your age"
        />
        <p>Age: {age}</p>

        <label>Shipping Method:</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="shipping"
              value="Pickup"
              checked={shipping === 'Pickup'}
              onChange={(e) => setShipping(e.target.value)}
            />
            Pickup
          </label>
          <label>
            <input
              type="radio"
              name="shipping"
              value="Delivery"
              checked={shipping === 'Delivery'}
              onChange={(e) => setShipping(e.target.value)}
            />
            Delivery
          </label>
        </div>
        <p>Shipping: {shipping}</p>

        <label>Payment Method:</label>
        <select
          value={payment}
          onChange={(e) => setPayment(e.target.value)}
        >
          <option value="">--Select Payment--</option>
          <option value="Visa">Visa</option>
          <option value="Master Card">Master Card</option>
          <option value="Gift Card">Gift Card</option>
        </select>
        <p>Payment: {payment}</p>
      </form>
    </div>
  );
}

 export default App;