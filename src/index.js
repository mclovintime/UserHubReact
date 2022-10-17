import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { getUsers } from "./api"
import {
  Header, UserPosts
} from "./components";const App = () => {
  const [userList, setUserList] = useState([]);  useEffect(() => {
    getUsers()
      .then(users => {
        setUserList(users)
      })
      .catch(error => {
        // something something errors
      });
  }, []);  return (
    <div id='App'>
      <Header userList={ userList } />
    </div>
  );
}
const element = document.getElementById("root")
const root = ReactDOM.createRoot(element)
root.render(
  <App />);