import { useState } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SearchField from "./Search/SearchField";
import { Navbar } from "./Layout/Navbar";
import Dashboard from "./Dashboard/Dashboard";
import ProjectDetails from "./Projects/ProjectDetails";
import SignIn from "./Auth/SignIn";
import SignUp from "./Auth/SignUp";
import CreateProject from "./Projects/CreateProject";
import { Movies } from "./Movies";
import { Movie } from "./Movie";
import { CreateNote } from "../pages/CreateNote";

export const App = () => {
  const [filter, setFilter] = useState('');
  
  const handleFilter = event => {
    setFilter(event.target.value);
  };
  
  // const filterMovies = filterMovieName(filter);
  return (
    <BrowserRouter>
      <Navbar/>
      <SearchField filterProp={filter} onChangeFilterProp={handleFilter}/>
      <Switch>
        <Route path="/movies" component={Movies}/>
        <Route path="/movie/:id" children={<Movie/>}/>
        <Route path="/create" component={CreateNote}/>
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route path="/project/:id" component={ProjectDetails}/>
        <Route path="/signin" component={SignIn}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/create" component={CreateProject}/>
      </Switch>
    </BrowserRouter>
  );
};
