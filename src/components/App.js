import { Route, Routes } from "react-router-dom";
import { Navigation } from "./Navigation/Navigation";
import { Movies } from "../pages/Movies/Movies";
import { Movie } from "../pages/Movies/Movie";
import { CreateNotes } from "../pages/Notes/CreateNotes";
import { AllCryptos } from '../pages/Cryptos/AllCryptos';
import { ProtectedRoute } from "./ProtectedRoute";
import { LoginPage } from "./LoginPage/LoginPage";
import { useSelector } from "react-redux";
// import { HomePage } from "./HomePage/HomePage";

export const App = () => {
  
  const { user } = useSelector(state => state?.authentication);
  
  return (
    <>
      <Navigation isAllowed={!!user?.username}/>
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
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
        <Route path="movies" element={<Movies/>}/>
        <Route path="movies/:id" element={<Movie/>}/>
        <Route path="*" element={<p>There's nothing here: 404!</p>}/>
      </Routes>
    </>
  );
};