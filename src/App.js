import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.comp";
import ExerciseList from "./components/exercise-list.comp";
import EditExercise from "./components/edit-exercise.comp";
import CreateExercise from "./components/create-exercise.comp";
import CreateUser from "./components/create-user.comp";

function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Route path="/" exact component={ExerciseList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} /> 
    </Router>
  );
}

export default App;
