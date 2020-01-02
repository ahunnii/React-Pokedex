import React, { Component } from 'react';
import './App.css';
import {EntryList} from './components/entry-list/entry-list.component.jsx';



class App extends Component{
constructor(){
  super();

  this.state = {
    pokemon: []
  };
}

componentDidMount(){
  fetch('https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json')
  .then(response => response.json())
  .then(pokes => this.setState({pokemon:pokes}))

}

  render(){
    return(
    <div className="App">
    <EntryList pokemon ={this.state.pokemon}>        

    </EntryList>

    </div>
    );
  }
}

export default App;
