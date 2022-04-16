import { Navigate, Outlet } from 'react-router-dom';

/**
 * @param isAllowed
 * @param redirectPath redirect to '/login' by default if not passed path from Parent component via props
 * @param children
 * @returns {JSX.Element|*}
 */
export const ProtectedRoute = ({ isAllowed, redirectPath = '/login', children }) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace/>;
  }
  
  return children ? children : <Outlet/>;
};