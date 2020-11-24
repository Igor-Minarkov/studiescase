import React from "react";
import "./App.css";
import Wrapper from "./Components/Wrapper/Wrapper";
import { UsersContextProvider } from "./Context/userContext";
function App(props) {
  return (
    <UsersContextProvider>
      <div className="App">
        <Wrapper />
      </div>
    </UsersContextProvider>
  );
}

export default App;
