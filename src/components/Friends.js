import React, { Component } from 'react'
import axios from 'axios';
import '../css/Users.css';

class Users extends Component {

  state = {
    resultat : [],
    success : false
  } 

  handleClick = (e) => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
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
         this.state.resultat.map((e, i) => 
         <button key={i} type="button" data-toggle="modal" data-target=".bd-example-modal-sm" className="button-list" >
         <p> {e.name} {e.username}</p>
         <p> Email: {e.email}</p><br />
         <p> Address: {e.address.street} {e.address.suit} {e.address.zipcode} {e.address.city}</p><br />
         <p> Phone: {e.phone}</p>
         </button>) : "" }
      </div>
    )
  }
}

export default Users;