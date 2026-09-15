import { useState } from "react";

function Card({ name, age, hobby, city }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h2>Hello, my name is {name}</h2>
      <p>Age: {age}</p>
      <p>My hobby is {hobby}</p>
      <p>I'm from {city}</p>
    </div>
  );
}

function App() {
  function Greeting(cust) {
    alert(`Hello, ${cust}`);
  }

  function handleChange(e) {
    console.log(e.target.value);
  }

  return (
    <div>
      <h1>Hello World</h1>
      <Card name="Fadri" age={21} hobby="Playing game" city="Oslo" />
      <Card name="Rusdi" age={35} hobby="Welding" city="Manhattan" />
      <Card name="Amba" age={33} hobby="Streaming" city="Ohio" />
      <Counter />

      <FormTest />
    </div>
  );
}

function FormTest() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Thx for submit, ${name}`);
    setName("");
    setEmail("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

function Counter() {
  const [amount, setAmount] = useState(0);

  return (
    <div>
      <p>Count: {amount}</p>
      <button onClick={() => setAmount(amount + 1)}>Add</button>
      <button onClick={() => setAmount(amount - 1)}>Sub</button>
      <button onClick={() => setAmount(0)}>Reset</button>
    </div>
  );
}

export default App;
