import React from "react";
import Header from "./../Header/Header";
import SearchBox from "../SearchBox/SearchBox";
import "./App.css";
import ResultsContainer from "../ResultsContainer/ResultsContainer";

const name = require("@rstacruz/startup-name-generator");

class App extends React.Component {
  state = {
    headerText: "Find Project Name it!",
    headerExpanded: true,
    suggestedNames: [],
  };

  handleInputChange = (inputText) => {
    this.setState({
      headerExpanded: inputText.length > 0 ? false : true,
      suggestedNames: inputText ? name (inputText): [],
    });
  };

  render() {
    //   This is hard code to see all Suggestion related to cloud
    // console.log(name('cloud'))
    return (
      <div>
        <Header
          headerExpanded={this.state.headerExpanded}
          headerTitle={this.state.headerText}
        />
        <SearchBox handleInputChange={this.handleInputChange} />
        <ResultsContainer suggestedNames ={this.state.suggestedNames} />
      </div>
    );
  }
}

// function App() {
//     return (

//             <h1>This is my first Functional Component Based file</h1>

//     )
// }

export default App;
