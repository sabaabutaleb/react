import "./index.css";
import React, { useState } from "react";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [showAddFriendForm, setShowAddFriendForm] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleFormAddFriend() {
    setShowAddFriendForm((show) => !showAddFriendForm);
  }
  function handleAddFriend(newFriend) {
    setFriends((friends) => [...friends, newFriend]);
    setShowAddFriendForm(false);
  }
  function handleSelectFriend(friend) {
    setSelectedFriend((currentFriend) =>
      currentFriend?.id === friend.id ? null : friend
    );
    setShowAddFriendForm(false);
  }
  function handleSplit(value) {
    setFriends(
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <ListOfFriendes
          friends={friends}
          onSelectFriend={handleSelectFriend}
          selectedFriend={selectedFriend}
        />
        {showAddFriendForm && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleFormAddFriend}>
          {showAddFriendForm ? "Close" : "ADD FRIEND"}
        </Button>
      </div>
      {selectedFriend && (
        <ShareAMeal
          selectedFriend={selectedFriend}
          onSplit={handleSplit}
          key={selectedFriend.id}
        />
      )}
    </div>
  );
}
function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
function ListOfFriendes({
  friends,
  onSelectFriend,
  selectedFriend,
  bill,
  myExpense,
  friendExpense,
  whoIsPaying,
  onSplit,
}) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelectFriend={onSelectFriend}
          selectedFriend={selectedFriend}
          bill={bill}
          myExpense={myExpense}
          friendExpense={friendExpense}
          whoIsPaying={whoIsPaying}
          onSplit={onSplit}
        />
      ))}
    </ul>
  );
}
function Friend({ friend, onSelectFriend, selectedFriend }) {
  const isSelected = friend.id === selectedFriend?.id;
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)} $
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {" "}
          {friend.name} owes you {Math.abs(friend.balance)} $
        </p>
      )}
      {friend.balance === 0 && <p> You and {friend.name} are even</p>}
      <Button onClick={() => onSelectFriend(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}
function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();
    let id = crypto.randomUUID();
    if (!name || !image) return;
    const newFriend = {
      id,
      name,
      image: `${image}?u=${id}`,
      balance: "0",
    };
    onAddFriend(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <>
      <form className="form-add-friend" onSubmit={handleSubmit}>
        <h2>Add New Friend</h2>
        <label>Frist Name</label>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <label>Image URL</label>
        <input
          type="text"
          value={image}
          placeholder="Image url"
          onChange={(e) => setImage(e.target.value)}
        />
        <Button>ADD</Button>
      </form>
    </>
  );
}
function ShareAMeal({ selectedFriend, onSplit }) {
  const [bill, setBill] = useState("");
  const [myExpense, setMyExpense] = useState(0);
  let friendExpense = bill ? bill - myExpense : "";
  const [whoIsPaying, setWhoIsPaying] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !myExpense) return;
    onSplit(whoIsPaying === "friend" ? -myExpense : friendExpense);
  }
  return (
    <form className="form-split-bill" onSubmit={(e) => handleSubmit(e)}>
      <h2>split the meal with {selectedFriend.name}</h2>

      <label>💵Bill value</label>
      <input
        placeholder="Enter bill value"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>💸Your expense</label>
      <input
        value={myExpense}
        onChange={(e) =>
          setMyExpense(
            Number(e.target.value) > bill ? myExpense : Number(e.target.value)
          )
        }
      />

      <label>😮{selectedFriend.name} expense</label>
      <input value={friendExpense} disabled />

      <label>🫰Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="you">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <button className="button">Split bill</button>
    </form>
  );
}
export default App;
