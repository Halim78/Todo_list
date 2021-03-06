import React, { Component } from 'react'
import axios from 'axios';
import '../css/Photos.css';

class Photos extends Component {

  state = {
    resultat : [],
    success: false
  } 

  handleClick = (e) => {
    axios
      .get('https://jsonplaceholder.typicode.com/photos')
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
         <p><img key={i} src={e.url} alt="souvenirs"/></p>)
         : ""}
      </div>
    )
  }
}

export default Photos;