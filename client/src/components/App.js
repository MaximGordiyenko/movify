import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navigation } from "./layout/Navigation/Navigation";
import { Movies } from "../pages/movies/Movies";
import { Movie } from "../pages/movies/Movie";
import { CreateNotes } from "../pages/notes/CreateNotes";
import { Cryptos } from '../pages/cryptos/Cryptos';
import { ProtectedRoute } from "./private-route/ProtectedRoute";
import { Landing } from "./layout/Landing";
import { Register } from "./auth/Register";
import { Login } from "./auth/Login";
import { Dashboard } from "./dashboard/Dashboard";

export const App = () => {
  const { isAuthenticated } = useSelector(state => state?.auth);
  
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/logIn" element={<Login/>}/>
        <Route path="/crypto" element={<Cryptos/>}/>
        
        <Route element={<ProtectedRoute auth={isAuthenticated}/>}>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Route>
        
        <Route
          path="/notes"
          element={
            <ProtectedRoute
              redirectPath="/login"
              auth={isAuthenticated}
              // isAllow={!!user && user.permissions.includes('analyze' && user.roles.includes('admin'))}
            >
              <CreateNotes/>
            </ProtectedRoute>
          }
        />
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/movies/:id" element={<Movie/>}/>
        <Route path="*" element={<p>There's nothing here: 404!</p>}/>
        <Route path="/error" element={<p>{}</p>}/>
      </Routes>
    </>
  );
};