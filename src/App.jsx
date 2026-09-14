function App() {

  const name = "Fadri"
  const city = "Argatha"
  const hobbies = ["Playing Guitar", "Reading Book", "Playing Games"]

  return (
    <div className="profil">
      <h1>Hello my name is {name}</h1>
      <p>I'm from {city}</p>
      <p>My favorite hobby is {hobbies[2]}</p>
      <p>Distance from Argatha to Rohngawi is {meterConvert(17)}m</p>
    </div>
  );
}

function meterConvert(km) {
  return km * 1000
}

export default App;
