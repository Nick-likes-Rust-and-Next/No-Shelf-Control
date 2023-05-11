import { Navigate } from 'react-router-dom';
import Auth from '../../utils/auth';

export const ProtectedRoute = ({ children }) => {

    const isLoggedIn = Auth.loggedIn();

    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }
    return children;
};