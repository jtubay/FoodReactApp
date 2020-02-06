import React, { Component } from 'react';
import './App.css';
import BusinessList from "../BusinessList/BusinessList.jsx"
import SearchBar from "../SearchBar/SearchBar.jsx"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Get Food</h1>
        <SearchBar />
        <BusinessList />
      </div>
    )
  }
}

export default App;
