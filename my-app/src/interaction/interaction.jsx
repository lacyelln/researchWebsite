import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getUser } from '../../services/apiService';

export function interaction(){
    const [user, setUser] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();
    const { userId } = location.state || {};
    const [error, setError] = useState("");

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

    async function handleClick(){
    try {
        //const userId = await loginUser(name, roomCode); //probably change this to pass user information grabbed 
        // from LLM interaction and pass certain variables to the survey
        navigate("/survey", { state: { userId } }); //change this to LLM page when added
    } catch (error) {
        setError(error.message);
        console.log("no movist");
        console.log(error.message);
    }
        
    };

    return (
        <>
        <div className="welcome-center">
            {user ? <h2>Welcome, {user.name}!</h2> : <p>Loading...</p>}
        </div>

        <div className="room-top-right">
            {user ? <p>Room: {user.roomCode}</p> : null}
        </div>

        <div className="next-bottom-left">
            <button onClick={handleClick}>Next</button>
        </div>
        </>
    )

}

export default interaction;