import React, { Component } from 'react';
import '../css/Route.css';


 class Route extends Component {

    state = {
        result : "",
        put : undefined,
        delete : undefined
    }

    //Ajouter un élément (visible sur la console)
    handlePost = (e) => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
            title: this.state.result,
            body: 'bar',
            userId: 1
            }),
            headers: {
            "Content-type": "application/json; charset=UTF-8"
            }
            })
            .then(response => response.json())
            .then(json => console.log(json))
            this.setState({
                result : ""
            })
        }

    //Modifier un élément (le id)    
    handlePut = (e) => {
        const id = this.state.put
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
            id : this.state.put,
            title: this.state.result,
            body: 'bar',
            userId: 1
            }),
            headers: {
            "Content-type": "application/json; charset=UTF-8"
            }
            })
            .then(response => response.json())
            .then(json => console.log(json))
            this.setState({
                put : ""
            })
        }

    //Supprimer un élément avec un id    
    handleDelete = () => {
        const id = this.state.delete
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
            body: JSON.stringify({
                id : this.state.put,
                title: this.state.result,
                body: 'bar',
                userId: 1
                }),
                headers: {
                "Content-type": "application/json; charset=UTF-8"
                }
                })
                .then(response => response.json())
                .then(json => console.log(json))
                this.setState({
                    delete : ""
          })
        }   

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
  render() {
    return (
      <div className="inputs">
        <div className="duble-button">
            <input 
            className="form-control" 
            name="result" 
            onChange={this.handleChange} 
            value={this.state.result} 
            placeholder="title"/>
            <input 
            className="form-button" 
            type="submit" 
            value="Post" 
            onClick={this.handlePost}/> <br />
        </div>
        
        <div className="duble-button">
            <input 
            className="form-control" 
            name="put" 
            onChange={this.handleChange} 
            value={this.state.put} 
            placeholder="id"/>
            <input 
            className="form-button" 
            type="submit" 
            value="Put" 
            onClick={this.handlePut}/> 
        </div>

        <div className="duble-button">
            <input 
            className="form-control" 
            name="delete" onChange={this.handleChange} 
            value={this.state.delete} 
            placeholder="id"/>
            <input 
            className="form-button" 
            type="submit" 
            value="Delete" 
            onClick={this.handleDelete}/> 
        </div>
      </div>
    )
  }
}

export default Route;


































