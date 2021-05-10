import React from "react";
import Header from "./../Header/Header";
import SearchBox from "../SearchBox/SearchBox";
import "./App.css";

class App extends React.Component {
    state ={
        headerText: "Find Project Name it!",
        headerExpanded: true,
    }

    handleInputChange = (inputText) => {
        this.setState({headerExpanded : inputText.length > 0 ? false : true})
        
        
    }

  render() {
    return (
      <div>
        <Header headerExpanded ={this.state.headerExpanded} headerTitle={this.state.headerText} />
        <SearchBox handleInputChange ={this.handleInputChange} />
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
