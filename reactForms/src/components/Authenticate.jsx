import { useState } from "react";

export default function Authenticate({ token }) {
   const [error, setError] = useState(null);
//    const [successMessage, setSuccessMessage] = useState(null);

    async function handleClick() {
        try{
            // const response = await fetch(`https://fsa-jwt-practice.herokuapp.com/authenticate`,
            //     method: "GET",
            //     headers:{
            //         "Content-Type": "application/json",
            //         "Authorization"; `Bearer ${token}`
            //     }
            // )
            // const data = await response.json();

        } catch(error) {
            // setError(error.message);
        }
    }
    
    return (
       <><h2>Authenticate</h2>
    {/* //    {succesMessage && <p>{successMessage}</p>}
    //    {error && <p>{error}</p>} */}
        <button onClick={() =>{
            handleClick({token});
        }} >Authenticate Token</button>
        </>
    )
}