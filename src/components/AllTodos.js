import React, { Component } from 'react'
import axios from 'axios';
import '../css/Todo.css';
import '../css/AllTodos.css';
import Route from './Route';



class AllTodos extends Component {

  state = {
    item : '',
    newResult : []
  } 


  handleChange = (e) => {
    this.setState({
        item : e.target.value
    })
  }

  componentDidMount = () => {
    axios
    .get('https://jsonplaceholder.typicode.com/todos')
    .then(res => 
      this.setState({
        newResult : res.data
      })
    )
  }

 
  render() {
    const todoSearch = 
    this.state.newResult.filter(f => 
     (f.title.indexOf(this.state.item) !== -1) ||
     (f.id.toString().indexOf(this.state.item) !== -1) ||
     (f.completed.toString().indexOf(this.state.item) !== -1));
    return (
      <div className="container-fluid">
        <div className="row">
          <nav className="navbar navbar-light">
            <form className="form-inline">
                <input 
                className="form-control mr-sm-2" 
                type="search" 
                placeholder="Search" 
                aria-label="Search"
                onChange={this.handleChange} 
                />
            </form>
        <Route />
          </nav>
        </div>
          {todoSearch.map((e, i) => 
          <button 
            key={i} 
            type="button" 
            data-toggle="modal" 
            data-target=".bd-example-modal-sm" 
            className="button-list" >
            <h3>To Do {e.id}</h3><br />
            Title : {e.title}<br /><br />
            UserId : {e.userId}<br /><br />
            Completed : {e.completed.toString()}
            </button>
          )}
      </div>
    )
  }
}

export default AllTodos;


