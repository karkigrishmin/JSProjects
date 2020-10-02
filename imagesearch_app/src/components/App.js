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

  submitHandler = (e) => {
    e.preventDefault();
    this.getInputValue(this.state.searchTerm);
    this.setState({ searchTerm: "" });
  };

  getInputValue = (inputValue) => {
    console.log(inputValue);
  };

  render() {
    return (
      <div>
        App:- {this.state.searchTerm}
        <SearchBar
          change={this.inputHandler}
          submitSearch={this.submitHandler}
          inputValue={this.state.searchTerm}
        />
      </div>
    );
  }
}

export default App;
