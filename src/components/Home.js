import React, { Component } from 'react';
import '../css/Home.css';
import Todo from './Todo';
import Photos from './Photos';
import Users from './Users';


class Home extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
            <h1>TODO List</h1>
            </div>
          </div>
          <div className="row">
            <div className=" col-md-4">
              <h2>TODO</h2>
                <Todo />
            </div>
            <div className=" col-md-4">
              <h2>Photos</h2>
                <Photos />
            </div>
            <div className="col-md-4">
              <h2>Amis</h2>
              <Users />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;




          //       
          // <div id="todo_list">
          //   <h2>ToDo</h2>
          //   <input placeholder="Ajouter..."></input><br />
          //   <button type="button" class="btn btn-outline-primary">Choisir</button>
          // </div>
       