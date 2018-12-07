import React, { Component } from 'react';
import '../css/Home.css';
import Todo from './Todo';
import Photos from './Photos';
import Friends from './Friends';
import { NavLink } from 'react-router-dom';



class Home extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
            <NavLink exact to='/allTodos'><button className="all-todo">All To Do</button></NavLink>
            <h1>TO DO List User 1</h1>
            </div>
          </div>
          <div className="row">
            <div className=" col-md-4">
              <h2>TO DO</h2>
                <Todo />
            </div>
            <div className=" col-md-4">
              <h2>Photos</h2>
                <Photos />
            </div>
            <div className="col-md-4">
              <h2>Friends</h2>
              <Friends />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;



