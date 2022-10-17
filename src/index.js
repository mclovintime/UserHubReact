import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { getUsers } from './api'
import { UserPosts } from './components';
import {
  Header
} from './components';const App = () => {

  const [currentUser, setCurrentUser] = useState(null);
  const [userPosts, setUserPosts] = useState([]);
  const [userTodos, setUserTodos] = useState([]);

  const [userList, setUserList] = useState([]);  useEffect(() => {
    getUsers()
      .then(users => {
        setUserList(users)
      })
      .catch(error => {
        // something something errors
      });
      
  }, []);  return (
    // <div id='App'>
    //   <Header userList={ userList }
    //    currentUser={ currentUser }
    //    setCurrentUser={ setCurrentUser } />
    // </div>
    <div id="App">
      <Header
        userList={ userList }
        currentUser={ currentUser }
        setCurrentUser={ setCurrentUser } />
      {
        currentUser
        ? <UserPosts
            userPosts={ userPosts }
            currentUser={ currentUser } />
        : null
      }

    </div>

  );
}
const element = document.getElementById('root')
const root = ReactDOM.createRoot(element)
root.render(
  <App />);