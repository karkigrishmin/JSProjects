import React from "react";
import unsplash from "../components/api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = {
    searchTerm: "",
    images: [],
  };

  //it gets called when we provide input
  inputHandler = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  //when search result is submitted, its gets called
  submitHandler = (e) => {
    e.preventDefault();
    this.getInputValue(this.state.searchTerm);
    this.setState({ searchTerm: "" });
  };

  // request to the unsplash api
  getInputValue = async (inputValue) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: inputValue },
    });
    this.setState({ images: response.data.results });
  };

  render() {
    const { images } = this.state;
    return (
      <div>
        <SearchBar
          change={this.inputHandler}
          submitSearch={this.submitHandler}
          inputValue={this.state.searchTerm}
        />
        <ImageList images={images} />
      </div>
    );
  }
}

export default App;
