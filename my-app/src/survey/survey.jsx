import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getUser } from '../../services/apiService';

export function Survey() {
    const [user, setUser] = useState(null);
    const location = useLocation();
    const { userId } = location.state || {};

    useEffect(() => {
        async function fetchUser() {
            try {
                const data = await getUser(userId);
                setUser(data);
            } catch (err) {
                console.error("Failed to fetch user:", err);
            }
        }
        fetchUser();
    }, []);


    return (
        <div className="survey-container">
            {user ? (
                <h2>{user.name} please take the survey from room {user.roomCode}!</h2> 
            ) : ( <p>User info is loading...</p> )}
        </div>
    )
}

export default Survey;