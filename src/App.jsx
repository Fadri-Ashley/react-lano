import { useState } from "react";

function App() {
  const [item, setItem] = useState([
    { id: 1, name: "Learn usestate" },
    { id: 2, name: "Build simple CRUD" },
  ]);

  const [newItem, setNewItem] = useState("");

  function handleAdd() {
    if (newItem.trim() === "") return;

    const newData = {
      id: Date.now(),
      name: newItem,
    };

    setItem([...item, newData]);
    setNewItem("");
  }

  return (
    <div>
      <h1>Simple CRUD</h1>

      <input 
      type="text"
      value={newItem}
      onChange={(e) => setNewItem(e.target.value)}
      placeholder="Write new item"
      />

      <button onClick={handleAdd}>Add</button>

      <ul>
        {item.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
