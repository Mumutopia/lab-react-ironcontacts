import logo from "./logo.svg";
import "./App.css";
import React from "react";
import contact from "./contacts.json";
const fiveContacts = contact.slice(0, 5);

class App extends React.Component {
  state = {
    contacts: fiveContacts,
  };

handleClick = (evt) => {

  const actualState = [...this.state.contacts]
  actualState.push(contact[Math.floor(Math.random()*contact.length)])
  this.setState(
    {
      
      contacts : actualState
      
    }
    
  )
}

deleteStar = (targetId) => {
  console.log(targetId)
  const actualState = [...this.state.contacts]
this.setState (
  {
    contacts : actualState.filter((contact)=>contact.id !== targetId)
  }
) 
};


handleSortName = ()=> {
  
  const actualState = [...this.state.contacts];
  actualState.sort((userA,userB) => {
    return userA.name.localeCompare(userB.name)
  }
       
      )
  this.setState(
    {
      
      contacts : actualState
      
    })
};
handleSortPopularity = ()=> {
  console.log("hello")
  const actualState = [...this.state.contacts];
  actualState.sort((userA,userB) => 
        userA.popularity - userB.popularity
      )
  this.setState(
    {
      
      contacts : actualState
      
    })
};

  render() {
    console.log(this.state.contacts)
    return (
      <div className="App">
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((contact) => {
              return (
                <tr key={contact.id}>
                  <td>{contact.pictureUrl}</td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                  <button onClick={() => this.deleteStar(contact.id)}>remove</button>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button onClick={() => this.handleClick()}>Add random</button>
        <button onClick={() => this.handleSortPopularity()}>Sort by Popularity</button>
        <button onClick={() => this.handleSortName()}>Sort by Name</button>
      </div>
    );
  }
}

export default App;
