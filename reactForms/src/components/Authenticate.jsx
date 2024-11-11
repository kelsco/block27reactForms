import React, { useState } from "react";

export default function Authenticate({ token, setUsername }) {
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    async function handleClick({token}) {
        console.log('token: ', token);
        try {
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate",
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                }
            );
            const result = await response.json();
            setSuccessMessage(result.message);

        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div>
        <h2>Authenticate</h2>
            {error && <p>{error}</p>}
            {successMessage && <p>{successMessage}</p>}
            <button onClick={ () => {handleClick({token});}}>Authenticate Token</button>
        </div>
    );
}