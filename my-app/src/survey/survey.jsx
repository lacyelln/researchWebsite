import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getUser } from '../../services/apiService';
import { sendSurvey  } from "../../services/apiService";

export function Survey() {
    const [user, setUser] = useState(null);
    const location = useLocation();
    const { userId } = location.state || {}; //the userId is passed from the previous 
    // page although i need to double check and make sure this is still working
    const [answer, setAnswer] = useState([]);
    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");
    const [third, setThird] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const inputRef = useRef();

    async function handleClick(updated){
    try {
        const result = await sendSurvey(user.name, updated);
        console.log(result.message);
        console.log(JSON.stringify(result.d)); //so it doesnt print out as objects 
        setFirst("");
        setSecond("");
        setThird("");
        
    } catch (error) {
      setError(error.message);
    }  
    };

    //gets the user from service to access roomnumber and name sets the useState setUser as that user.
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

    //handles click when the enter button is pressed
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
        e.preventDefault();
        if (first && second && third) {
            const updated = [...answer, { first, second, third }];
            setAnswer(updated);
            handleClick(updated);
            } else {
            alert("Please fill in both answers before submitting!");
            }
        }
    };


    return (
        //survey using dumby questions and dumby data that will be sent.
        <div className="survey-container">
            {user ? (
                <p>{user.name} please complete the following survey of your experience from room {user.roomCode}!</p> 
            ) : ( <p>User info is loading...</p> )}
            <p>do you like tacos?</p>
            <input 
            type="text"
            value={first} 
            ref={inputRef}
            onChange={(e) => setFirst(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="of course"
            required
            />
            
            <p>do you prefer crunchy or soft tacos?</p>
            <input 
            type="text"
            value={second} //idk if i can set the value to the same name
            ref={inputRef}
            onChange={(e) => setSecond(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="crunchy of course"
            required
            />

            <p>are you having a good day?</p>
            <input 
            type="text"
            value={third} //idk if i can set the value to the same name
            ref={inputRef}
            onChange={(e) => setThird(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="absolutely!"
            required
            />

            {/* i dont want to move on until every box is submitted */}
            <div className="button-group"> 
                <button
                    onClick={() => {
                    // Only add to answers once both fields are filled
                    if (first && second && third) {
                        setAnswer((prevAnswers) => {
                            const updated = [...prevAnswers, { first, second, third }]; // build the new array
                            handleClick(updated); // do something with it immediately
                            return updated; // give React the new array to store
                            }); // Move on to next page
                    } else {
                        alert("Please fill in both answers before submitting!");
                    }
                    }}
                >
                    Submit
                </button>
            </div>

        </div>
    )
}

export default Survey;