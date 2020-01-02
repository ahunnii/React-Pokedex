import React, { Component } from 'react';
import './App.css';




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
        {
          this.state.pokemon.slice(0, 19).map(pokemon => 
            (<h1 key={pokemon.id }> {pokemon.name.english}</h1>)
          )
        }
    </div>
    );
  }
}

export default App;
