import { useState } from "react";
import PackingList from "./components/PackingList"
import Stats from "./components/Stats";
import Form from "./components/Form";
import Logo from "./components/Logo";
// const initialItems = [
//     { id: 1, description: "Passports", quantity: 2, packed: false },
//     { id: 2, description: "Socks", quantity: 12, packed: true },
//     { id: 3, description: "Charger", quantity: 7, packed: true },

//   ];
export default function App() {
  const [items, setNewItem] = useState([]);

  function handleAddItem(item) {
    setNewItem([...items, item]);
  }
  function handleDelete(id) {
    setNewItem((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setNewItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleclear(){
    const confirmed=window.confirm("Are u sure u want to delete all the items?");
    if(confirmed)setNewItem([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form handleAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDelete={handleDelete}
        onToggleItems={handleToggleItem}
        onClear={handleclear}
      />
      <Stats items={items} />
    </div>
  );
}





