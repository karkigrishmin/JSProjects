import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = {
    searchTerm: "",
  };

  inputHandler = (e) => {
    console.log(e.target.value);
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    return (
      <div>
        App:- {this.state.searchTerm}
        <SearchBar change={this.inputHandler} />
      </div>
    );
  }
}

export default App;
