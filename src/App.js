import contacts from "./contacts.json";
import './App.css';
import Contact from "./component/contact";
import { useState } from "react";

function App() {
  let actors = contacts.slice(0, 5)
  const [state, addStatus] = useState(actors);
  console.log(actors)

  let handleAdd = () => {
    let random = Math.floor(Math.random() * contacts.length);

    let total = [...state]
    let randomActor = contacts[random];
    if(!total.includes(randomActor)){
      total.push(randomActor)
    }
    addStatus(total)
  }

  let handleSortName = () => {
    let byName = [...state].sort((a,b) => a.name.charCodeAt(0)-b.name.charCodeAt(0))
    addStatus(byName)
  }

  let handleSortPopulatiry = () => {
    let byPopularity = [...state].sort((a,b) => a.popularity-b.popularity)
    addStatus(byPopularity)
  }

  let handleDelete = (id) => {
    let total = [...state]
    let removedContact = total.filter(contact => contact.id !== id)
    addStatus(removedContact);
  }

  return (
    <div className="App">
      <button onClick={handleAdd}>Add Contact</button>
      <br></br>
      <button onClick={handleSortName}>sort by Name</button>
      <button onClick={handleSortPopulatiry}>Sort by Popularity</button>
      <div>
        {state.map((contact, i) => {
          return (
            <Contact key={i} id={contact.id} pictureUrl={contact.pictureUrl} name={contact.name} popularity={contact.popularity} wonOscar={contact.wonOscar} wonEmmy={contact.wonEmmy} onDelete={handleDelete}/>
          )
        })}
      </div>
    </div>
  );
}

export default App;
