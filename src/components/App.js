import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Navigation } from "./Navigation/Navigation";
import { Movies } from "../pages/Movies/Movies";
import { Movie } from "../pages/Movies/Movie";
import { CreateNotes } from "../pages/Notes/CreateNotes";
import { AllCryptos } from '../pages/Cryptos/AllCryptos';
import { ProtectedRoute } from "./ProtectedRoute";
import { LoginPage } from "./LoginPage/LoginPage";
// import { HomePage } from "./HomePage/HomePage";

export const App = () => {
  const [user, setUser] = useState(null);
  
  const handleLogin = () =>
    setUser({
      id: '1',
      name: 'robin',
      permissions: ['analyze'],
      roles: ['admin'],
    });
  
  const handleLogout = () => setUser(null);
  
  console.log('user:', user, '!!user', !!user);
  
  return (
    <>
      <Navigation/>
      {user ? (
        <button onClick={handleLogout}>Sign Out</button>
      ) : (
        <button onClick={handleLogin}>Sign In</button>
      )}
      
      <Routes>
        <Route index element={<LoginPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route element={<ProtectedRoute isAllowed={!!user}/>}>
          <Route path="/movies" element={<Movies/>}/>
        </Route>
        
        <Route
          path="/notes"
          element={
            <ProtectedRoute
              redirectPath="/login"
              isAllowed={!!user && user.permissions.includes('analyze' && user.roles.includes('admin'))}
            >
              <CreateNotes/>
            </ProtectedRoute>
          }
        />
        <Route path="/movie/:id" element={<Movie/>}/>
        <Route path="/crypto" element={<AllCryptos/>}/>
        <Route path="*" element={<p>There's nothing here: 404!</p>}/>
      </Routes>
    </>
  );
};