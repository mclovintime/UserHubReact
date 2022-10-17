import React from 'react';
import { getTodosByUser } from '../api';

import './UserTodos.css';

const UserTodos = ({
  currentUser,
  userTodos,
  setUserTodos,

}) => {

  

    getTodosByUser(currentUser.id)
      .then(todos => {
        setUserTodos(todos);
      })
      .catch(error => {
        // something something errors
      });
    
  return (
    <div className="user-todos">
      <h2>Todos By { currentUser.username }</h2>
      {userTodos.map(({ id, title, completed }) => (
        <div key={ id } className="todo">
          <h3 style={{
            textDecoration: completed ? 'line-through' : 'none'
          }}>{ title }</h3>
        </div>
      ))}
    </div>
  );
}

export default UserTodos;