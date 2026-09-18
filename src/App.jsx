import { useState } from "react";

function App() {
  const [items, setItems] = useState([
    { id: 1, name: "Learn useState" },
    { id: 2, name: "Build simple CRUD" },
  ]);

  const [newItem, setNewItem] = useState("");

  function handleAdd() {
    if (newItem.trim() === "") return;

    const newData = {
      id: Date.now(),
      name: newItem,
    };

    setItems([...items, newData]);
    setNewItem("");
  }

  function handleDelete(id) {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  }

  return (
    <div>
      <h1>Simple CRUD</h1>

      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Add New Item"
      />

      <button onClick={handleAdd}>Add</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
