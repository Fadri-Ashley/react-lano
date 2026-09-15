function Card({name, age, hobby, city}) {
  return(
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h2>Hello, my name is {name}</h2>
      <p>Age: {age}</p>
      <p>My hobby is {hobby}</p>
      <p>I'm from {city}</p>
    </div>
  )
}

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Card name="Fadri" age={21} hobby="Playing game" city="Oslo" />
      <Card name="Rusdi" age={35} hobby="Welding" city="Manhattan" />
      <Card name="Amba" age={33} hobby="Streaming" city="Ohio" />
    </div>
  );
}

export default App;
