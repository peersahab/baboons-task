import {
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Login from '../pages/Login.jsx';
import Dashboard from '../pages/Dashboard.jsx';
const AppRoutes = ({ user, setUser }) => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to={user ? "/dashboard" : "/login"} />} />
      {user ? (
        <Route path="/dashboard" element={<Dashboard user={user} />} />
      ) : (
        <Route path="/login" element={<Login setUser={setUser} />} />
      )}
    </Routes>
  );
};

export default AppRoutes
