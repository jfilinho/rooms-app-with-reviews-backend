import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "../context/autContext";

function ProtectedRoute({ component: Component }) {
    const { loggedInUser } = useContext(AuthContext);

    if (loggedInUser.token) {
        return <Component />;
    } else {
        return <Navigate to="/login" />;
    }
}

export default ProtectedRoute;