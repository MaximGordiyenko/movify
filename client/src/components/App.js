import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navigation } from "./layout/Navigation/Navigation";
import { Movies } from "../pages/Movies/Movies";
import { Movie } from "../pages/Movies/Movie";
import { CreateNotes } from "../pages/Notes/CreateNotes";
import { AllCryptos } from '../pages/Cryptos/AllCryptos';
import { ProtectedRoute } from "./ProtectedRoute";
import { Landing } from "./layout/Landing";
import { Register } from "./auth/Register";
import { Login } from "./auth/Login";

export const App = () => {
  const { user } = useSelector(state => state?.authentication);
  
  return (
    <>
      <Navigation isAllowed={!!user?.username}/>
      <Routes>
        {/*<Route path="/home" element={<HomePage/>}/>*/}
        {/*<Route path="/login" element={<LoginPage/>}/>*/}
        <Route path="/" element={<Landing/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/logIn" element={<Login/>}/>
        <Route element={<ProtectedRoute isAllowed={!!user?.username}/>}>
          <Route path="/crypto" element={<AllCryptos/>}/>
        
        </Route>
        
        <Route
          path="/notes"
          element={
            <ProtectedRoute
              redirectPath="/login"
              // isAllowed={!!user && user.permissions.includes('analyze' && user.roles.includes('admin'))}
              isAllowed={user?.username && user?.password}
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