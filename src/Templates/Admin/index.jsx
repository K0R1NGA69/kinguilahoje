import React, { useEffect, useState } from "react";
import "./index.css"
import { Button } from "bootstrap";
import Register from "../../Components/Register";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export function Admin() {
    const auth = getAuth();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loggedIn, setLoggedIn] = useState(false)


    const handleChange = {
        email: (e) => { setEmail(e.target.value); },
        password: (e) => { setPassword(e.target.value); }
    }
    const handleSignIn = () => {
        console.log("oi" + email, password)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setLoggedIn(true)
                console.log("ok")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
                console.log(errorMessage)
            });
    }
    console.log(auth.currentUser)
    if (auth.currentUser) {
        return <Register />;
    }
    return (
        <div className="bg-dark">
            <div className='body bg-dark'>
                <div className="form-signin mt-5">
                    <div>
                        <h1 className="h3 mb-3 text-info fw-normal">Please sign in</h1>

                        <div className="form-floating">
                            <input type="email" onChange={handleChange.email} className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label>Email address</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" onChange={handleChange.password} className="form-control" id="floatingPassword" placeholder="Password" />
                            <label >Password</label>
                        </div>


                        <button className="w-100 btn btn-lg btn-info" onClick={handleSignIn}>Sign in</button>
                        
                    </div>
                </div>
            </div>
        </div>

    );
}


