import React from "react";
import { useState, useEffect } from "react";

export default function SignUpForm({ setToken }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    async function handleSubmit(event) {
        event.preventDefault();
        console.log("Short Message");
        try{
            const response = await fetch(`https://fsa-jwt-practice.herokuapp.com/signup`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({username, password})
            });
            const data = await response.json();
            console.log(data);
            setToken(result.token);

        } catch(error){setError(error.message);

        }
    }

    return (
        <>
            <h2>Sign Up!</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>Username:
                    <input onChange={(e) => {
                        setUsername(e.target.value)
                    }
                    }
                    /></label><br />
                <label>Password:<input onChange={(e) => {
                    setPassword(e.target.value)
                }} /></label><br />
                <button>Submit</button>
            </form>
        </>
    )
}