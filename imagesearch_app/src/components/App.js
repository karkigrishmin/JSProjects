import React from "react";
import axios from "axios";
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

  // request to the unsplash api
  getInputValue = async (inputValue) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: inputValue },
      headers: {
        Authorization: "Client-ID gv1oUKcWSKzw6Y0DVIm42Uti2f_A13cETK-cpUoBZJ0",
      },
    });
    console.log(response.data.results);
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
