import React, { Component } from 'react';
import './App.css';
import {EntryList} from './components/entry-list/entry-list.component';
import {SearchBox} from './components/search-box/search-box.component'
class App extends Component{
constructor(){
  super();

  this.state = {
    pokemon: [],
    searchText: ""
  };

this.handleChange = this.handleChange.bind(this);
}


componentDidMount(){
  fetch('https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json')
  .then(response => response.json())
  .then(pokes => this.setState({pokemon:pokes}))

}
handleChange = (e) =>  {
  this.setState({searchText: e.target.value})
}

  render(){
    const { pokemon, searchText } = this.state;
    const filteredPokemons = pokemon.filter(poke => poke.name.english.toLowerCase().includes(searchText.toLowerCase()))
    return(
    <div className="App">

      <SearchBox placeholder="Search Pokemon" 
      handleChange={this.handleChange}/>
      <EntryList pokemon ={filteredPokemons}/>

    </div>
    );
  }
}

export default App;
