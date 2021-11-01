import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navbar } from "./Layout/Navbar";
import SignIn from "./Auth/SignIn";
import SignUp from "./Auth/SignUp";
import { Movies } from "../pages/Movies/Movies";
import { Movie } from "../pages/Movies/Movie";
import { CreateNotes } from "../pages/Notes/CreateNotes";
import { Home } from "./Home";
import { AllCryptos } from '../pages/Cryptos/AllCryptos'

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/movies" component={Movies}/>
        <Route exact path="/movie/:id" children={<Movie/>}/>
        <Route exact path="/create" component={CreateNotes}/>
        <Route exact path="/crypto" component={AllCryptos}/>
        <Route path="/signin" component={SignIn}/>
        <Route path="/signup" component={SignUp}/>
      </Switch>
    </BrowserRouter>
  );
};