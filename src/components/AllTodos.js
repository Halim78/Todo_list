import React, { Component } from 'react'
import axios from 'axios';
import '../css/Todo.css';
import '../css/AllTodos.css';


class AllTodos extends Component {

  state = {
    item : '',
    newResult : [],
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
    this.state.newResult.filter(f => (f.title.indexOf(this.state.item) !== -1));

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
                {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button><br /> */}
            </form>
          </nav>
        </div>
        {/* <div className="container-fluid">
            <div className="row">
                <div className="col-md-4">
                    <form className="input">
                        <button 
                        type="button" 
                        className="btn btn-outline-info"
                        onClick={this.handleClick}
                        >View
                        </button>
                    </form>
                </div>
            </div>
         </div> 
         */}
         {todoSearch.map((e, i) => 
         <button 
          key={i} 
          type="button" 
          data-toggle="modal" 
          data-target=".bd-example-modal-sm" 
          className="button-list" >
          <h3>To Do {e.id}</h3><br />
          Title : {e.title}<br /><br />
          Completed : {e.completed.toString()}
          </button>
         )}
      </div>
    )
  }
}

export default AllTodos;








        // <button 
        //  key={i} 
        //  type="button" 
        //  data-toggle="modal" 
        //  data-target=".bd-example-modal-sm" 
        //  className="button-list" >
        //  <h3>To Do {e.id}</h3><br />
        //  Title : {e.title}<br /><br />
        //  Completed : {e.completed.toString()}
        //  </button>