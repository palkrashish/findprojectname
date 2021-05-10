import React from 'react';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import './App.css';



class App extends React.Component{
    state ={
        headerText: "Find Project Name!"
    }

    render(){
        return (
            <div>
                <Header />
               {/* <h3>{this.state.headerText}</h3>  */}
               <SearchBox />
            </div>
        )
    }
}

// function App() {
//     return (
        
//             <h1>This is my first Functional Component Based file</h1>
       
//     )
// }

export default App
