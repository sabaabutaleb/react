import { useState } from "react";
import Form from "./componant/form";
import Logo from "./componant/logo";
import PackingList from "./componant/packingList";
import Status from "./componant/status";
// import "./index.css";
function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggle(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClear() {
    const confirmed = window.confirm("Are you sure?");
    if (confirmed) setItems([]);
  }

  return (
    <div className="App">
      <Logo />
      <Form onAddItem={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onHandleToggle={handleToggle}
        onHandleClear={handleClear}
      />
      <Status items={items} />
    </div>
  );
}

export default App;
