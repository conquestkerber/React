import React from "react";
import CardList from "./CardList";
import SearchBox from "./SearcBox";
import { robots } from "./robots";

const state = {
  robots: robots,
  searchField: "",
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => this.setState({ robots: user }))
      .catch((err) => alert(err));
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };
  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    if (this.state.robots === 0) {
      return <h3>Loading...</h3>;
    } else {
      return (
        <div>
          <h1>Robots</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <CardList robots={filteredRobots} />
        </div>
      );
    }
  }
}

export default App;
