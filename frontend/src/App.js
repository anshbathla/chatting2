
import "./App.css";
import Homepage from "./Pages/HomePage.js";
import { Route } from "react-router-dom";
import Chatspage from "./Pages/ChatsPage.js";

function App() {
  return (
    <div className="App" >
    
      < Route path="/"  component={Homepage} exact />
      <Route path="/chats" component={Chatspage} />
      
    </div>
  );
}

export default App;
