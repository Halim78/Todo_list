
import React, { Component } from 'react';

 class Route extends Component {
    state = {
        result : ""
    }


    handleClick = () => {
        fetch('https://jsonplaceholder.typicode.com/posts'
        , {
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
    }

    handleChange = (e) => {
        this.setState({
            result : e.target.value
        })
    }

    
  render() {
    return (
      <div>
        <input onChange={this.handleChange} ></input><br />
        <input type="submit" onClick={this.handleClick}/> 
      </div>
    )
  }
}

export default Route;



















// app.get('/api/movie', (req, res) => {
//   connection.query('SELECT name FROM movie', (err, results) => {
//     if (err) {
//       res.status(500).send('Erreur lors de la récupération des films');
//     } else {
//       res.json(results);
//     }
//   });
// });

// app.get('/api/movies/names', (req, res) => {
//     connection.query('SELECT names FROM movie', (err, results) => {
//     if (err) {
//       res.status(500).send('Erreur lors de la récupération des noms de films');
//     } else {
//       res.json(results); 
//     }
//   });
// });  


// app.post('/api/employees', (req, res) => {

//   // récupération des données envoyées
//   const formData = req.body;

//   // connexion à la base de données, et insertion de l'employé
//   connection.query('INSERT INTO employee SET ?', formData, (err, results) => {

//     if (err) {
//       // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
//       console.log(err);
//       res.status(500).send("Erreur lors de la sauvegarde d'un employé");
//     } else {
//       // Si tout s'est bien passé, on envoie un statut "ok".
//       res.sendStatus(200).send("ok");
//     }
//   });
// });

 
// app.post('/api/movies', (req, res) => {
//   const formData = req.body;
//   connection.query('INSERT INTO movie SET ?', formData, (err, results) => {
//     if (err) {
//       console.log(err);
//       res.status(500).send("Erreur lors de la sauvegarde d'un film");
//     } else {
//       res.sendStatus(200).send("ok");
//     }
//   });
// });


// app.put('/api/movies/:id', (req, res) => {
//   const idEmployee = req.params.id;
//   const formData = req.body;
//   connection.query('UPDATE employee SET ? WHERE id = ?', [formData, idEmployee], err => {
//     if (err) {
//       console.log(err);
//       res.status(500).send("Erreur lors de la modification d'un film");
//     } else {
//       res.sendStatus(200);
//     }
//   });
// });


// app.delete('/api/movies/:id', (req, res) => {
//   const idMovie = req.params.id;
//   connection.query('DELETE FROM movie WHERE id = ?', [idMovie], err => {
//     if (err) {
//       console.log(err);
//       res.status(500).send("Erreur lors de la suppression d'un film");
//     } else {
//       res.sendStatus(200);
//     }
//   });
// });





// app.listen(3000, (err) => {
//   if (err) {
//     throw new Error('Something bad happened...');
//   }

//   console.log(`Server is listening on 3000`);
// });

































