import { useState } from "react";
export default function Form({ handleAddItem }) {
    const [quantity, setQuantity] = useState(4);
    const [description, setDescription] = useState("");
  
    function handleSubmit(e) {
      e.preventDefault();
      if (!description) return;
      const newItem = { description, quantity, packed: false, id: Date.now() };
      
      handleAddItem(newItem);
      setDescription("");
      setQuantity(4);
    }
  
    function handleInput(e) {
      setDescription(e.target.value);
    }
    function handleSelect(e) {
      setQuantity(e.target.value);
    }
  
    return (
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do u need for ur trip?</h3>
        <select value={quantity} onChange={handleSelect}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item..."
          value={description}
          onChange={handleInput}
        />
        <button>Add</button>
      </form>
    );
  }