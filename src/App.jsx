function App() {
  const name = "Fadri";
  const city = "Argatha";
  const hobbies = ["Playing Guitar", "Reading Book", "Playing Games"];
  
  const mystyles = {
    color: "red",
    fontSize: "20px",
    backgroundColor: "lightyellow",
  };

  const x = 10;
  let y = "Banana"
  if (x < 5) {
    y = "Apple"
  }

  const myfunc = () => {
    alert(y);
  };

  return (
    <div className="profil">
      <h1 style={mystyles}>Hello my name is {name}</h1>
      <p>I'm from {city}</p>
      <p>My favorite hobby is {hobbies[2]}</p>
      <p>60 + 7 = {addNumber(60, 7)}</p>
      <h2>{y}</h2>
      <button onClick={myfunc}>Click Me</button>
    </div>
  );
}

function addNumber(num1, num2) {
  return num1 + num2;
}

export default App;
