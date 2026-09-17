import { useState } from "react";

function App() {

  const [items, setItems] = useState([
    {id: 1, name: "Learn UseState"},
    {id: 2, name: "Create Simple CRUD"}
  ])

  return (
    <div>
      <h1>Simple CRUD</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App;