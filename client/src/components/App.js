import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navigation } from "./layout/Navigation/Navigation";
import { Movies } from "../pages/Movies/Movies";
import { Movie } from "../pages/Movies/Movie";
import { CreateNotes } from "../pages/Notes/CreateNotes";
import { AllCryptos } from '../pages/Cryptos/AllCryptos';
import { ProtectedRoute } from "./private-route/ProtectedRoute";
import { Landing } from "./layout/Landing";
import { Register } from "./auth/Register";
import { Login } from "./auth/Login";
import { Dashboard } from "./dashboard/Dashboard";

export const App = () => {
  const { isAuthenticated } = useSelector(state => state?.authUser);
  
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/logIn" element={<Login/>}/>
        <Route path="/crypto" element={<AllCryptos/>}/>
        
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
      </Routes>
    </>
  );
};