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

  return (
    <div className="App">
      <Logo />
      <Form onAddItem={handleAddItems} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} />
      <Status />
    </div>
  );
}

export default App;
