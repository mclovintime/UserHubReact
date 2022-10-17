import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { getUsers, getPostsByUser } from "./api";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { Header, UserPosts, UserTodos } from "./components";

import {
  getCurrentUser
} from './auth';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userPosts, setUserPosts] = useState([]);
  const [userTodos, setUserTodos] = useState([]);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    getUsers()
      .then((users) => {
        setUserList(users);
      })
      .catch((error) => {
        // something something errors
      });
  }, []);
  return (
    <Router>
      <div id="App">
        <Header
          userList={userList}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
        {currentUser ? (
          <>
            <Switch>
              <Route path="/posts">
                <UserPosts
                  userPosts={userPosts}
                  currentUser={currentUser}
                  setUserPosts={setUserPosts}
                  />
              </Route>
              <Route path="/todos">
                <UserTodos 
                userTodos={userTodos} 
                currentUser={currentUser} 
                setUserTodos={setUserTodos} />
              </Route>
              <Route exact path="/">
                <h2
                  style={{
                    padding: ".5em",
                  }}
                >
                  Welcome, {currentUser.username}!
                </h2>
              </Route>
              <Redirect to="/" />
            </Switch>
          </>
        ) : (
          <>
            <Switch>
              <Route exact path="/">
                <h2
                  style={{
                    padding: ".5em",
                  }}
                >
                  Please log in, above.
                </h2>
              </Route>
              <Redirect to="/" />
            </Switch>
          </>
        )}
      </div>
    </Router>
  );
};
const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);
root.render(<App />);

//   return (
//     <Router>

//     <div id="App">
//       <Header
//         userList={ userList }
//         currentUser={ currentUser }
//         setCurrentUser={ setCurrentUser } />
//       {
//         currentUser
//         ? <>
//         <Switch>
//         <UserPosts
//             setUserPosts = {setUserPosts}
//             userPosts={ userPosts }
//             currentUser={ currentUser } />
//             <UserTodos
//             userTodos = {userTodos}
//             currentUser = {currentUser}
//             setUserTodos = {setUserTodos} />
//       </Switch>
//             </>
//         : null
//       }

//     </div>
//             </Router>

//   );
// }