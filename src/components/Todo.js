import React, { Component } from 'react'
import axios from 'axios';
import '../css/Todo.css';


class Todo extends Component {

  state = {
    resultat : [],
    success : false
  } 

  handleClick = (e) => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then(res => 
        this.setState({
          resultat : res.data,
          success : !this.state.success
        })
      )

  }


  render() {
    if(this.state.resultat === []){ 
     return  <p>Loading...</p>
    }
    return (
      <div>
          <div className="container-fluid">
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
         {this.state.success ? 
         this.state.resultat.slice(0,20).map((e, i) =>  
         <button key={i} type="button" data-toggle="modal" data-target=".bd-example-modal-sm" className="button-list" >
         <h3>To Do {e.id}</h3><br />
         Title : {e.title}<br /><br />
         Completed : {e.completed.toString()}
         </button>) : ""}
      </div>
    )
  }
}

export default Todo;