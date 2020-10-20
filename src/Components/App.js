import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import SearchField from "./Search/SearchField";
import CardList from "./Card/CardList";
import Blog from "./Blog";
import {filterMovieName} from "../utils/filterMovie";
import {Navbar} from "./Layout/Navbar";
import Dashboard from "./Dashboard/Dashboard";
import ProjectDetails from "./Projects/ProjectDetails";
import SignIn from "./Auth/SignIn";
import SignUp from "./Auth/SignUp";
import CreateProject from "./Projects/CreateProject";

class App extends Component {
  state = {
    filter: '',
  };

  //Public class field:  https://youtu.be/cUPZFk_wbks?t=1655
  handleFilter = event => {
    this.setState({
      filter: event.target.value,
    });
  };
  
  render() {
    const {filter} = this.state;
    const filterMovies = filterMovieName(filter);
    return (
      <>
        <Navbar/>
        <SearchField filterProp={filter}
                     onChangeFilterProp={this.handleFilter}
        />
        <Switch>
          <Route exact path='/' render={() => <CardList moviesProp={filterMovies}/>}/>
          {/*<Route path='/:id' component={Movie}/>*/}
          <Route path='/blog' component={Blog}/>
          <Route exact path='/dashboard' component={Dashboard}/>
          <Route path='/project/:id' component={ProjectDetails}/>
          <Route path='/signin' component={SignIn}/>
          <Route path='/signup' component={SignUp}/>
          <Route path='/create' component={CreateProject}/>
        </Switch>
      </>
    );
  }
}


export default (App);
