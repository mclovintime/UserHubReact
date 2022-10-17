import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { getUsers } from './api';




import {
  Header
} from './components';

const App = () => {
  const [userList, setUserList] = useState([]);
  const [currentUser, setCurrentUser] = useState(null); 

 // this is new
  useEffect(() => {
    getUsers()
      .then(users => {
        setUserList(users)
      })
      .catch(error => {
        // something something errors
      });
  }, []);

  return (
    <div id="App">
      <Header userList={ userList } />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);