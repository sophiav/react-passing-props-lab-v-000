import React from 'react';

import FruitBasket from './FruitBasket';

// const App = () => <FruitBasket />;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      filters: [],
      currentFilter: null,
      fruit: []
    };
  }

  componentWillMount() {
    this.fetchFilters();
    this.fetchFruits();
  }

  fetchFruits = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(items => this.setState({ fruit: items }));
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value});
  }

  render() {
    return (
      <div>
        <FruitBasket handleFilterChange={this.handleFilterChange} currentFilter={this.state.currentFilter} filters={this.state.filters} fruit={this.state.fruit} filter={this.state.currentFilter}/>
      </div>
    )
  }
}

export default App;
