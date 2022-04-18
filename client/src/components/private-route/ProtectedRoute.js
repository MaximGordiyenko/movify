import { Navigate, Outlet } from 'react-router-dom';

/**
 * @param auth
 * @param redirectPath redirect to '/login' by default if not passed path from Parent component via props
 * @param children
 * @returns {JSX.Element|*}
 */
export const ProtectedRoute = ({ redirectPath = '/login', children, auth }) => {
  if (auth) {
    return children ? children : <Outlet/>;
  }
  return <Navigate to={redirectPath} replace/>;
};