import React, { useState, useEffect } from 'react'
import { db } from './Firebase';
import { ref, set } from "firebase/database";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Dashboard = ({ removeButton, testDB, button, buttonText, setIsDisplayed, isDisplayed, hasPlayer, hasChat }) => {
    const auth = getAuth();
    const [signedUser, setSignedUser] = useState(auth.currentUser);
    const [signinError, setSigninError] = useState("");

    useEffect(() => {

    }, [signedUser]);

    useEffect(() => {

    }, [signinError])




    const setDisplay = () => {

        if (isDisplayed) {

            set(ref(db, "displayed"), false);
        } else {

            set(ref(db, "displayed"), true);
        }


    };

    const setPlayer = () => {
        if (hasPlayer) {
            set(ref(db, "hasPlayer"), false);
        } else {
            set(ref(db, "hasPlayer"), true);
        }
    };

    const setChat = () => {
        if (hasChat) {
            set(ref(db, "hasChat"), false);
        } else {
            set(ref(db, "hasChat"), true);
        }
    }

    const mainDashboard = () => {
        return (

            <section className="dashboard">

                <div className="dashboard-element">
                    <i className="lni lni-website"></i>
                    <h3>Botón</h3>
                    <form action="" onSubmit={testDB}>

                        <div className="input">
                            <label htmlFor="text">Texto del Botón</label>
                            <input type="text" name="text" id="text" placeholder="Ej. Clic aquí para conocer más" required />
                        </div>

                        <div className="input">
                            <label htmlFor="url">Vínculo del botón</label>
                            <input type="text" name="url" id="url" placeholder="Ej. https:/www.google.com" required />
                        </div>

                        <button type="submit" className="create"><i className="lni lni-circle-plus"></i> Crear Botón</button>
                    </form>

                    <button onClick={removeButton} className="not-view" > <i className="lni lni-circle-minus"></i> Borrar Botón</button>
                    <button onClick={setDisplay} className={isDisplayed ? "remove" : "view"}> <i className={isDisplayed ? "lni lni-cross-circle" : "lni lni-checkmark-circle"}></i> {isDisplayed ? "Quitar Botón" : "Mostrar Botón"} </button>

                    {buttonPreview()}

                </div>

                <div className="dashboard-element">
                    <i className="lni lni-display"></i>
                    <h3>Player</h3>
                    <button onClick={setPlayer} className={hasPlayer ? "remove" : "view"}> <i className={hasPlayer ? "lni lni-cross-circle" : "lni lni-checkmark-circle"}></i>   {hasPlayer ? "Quitar Player" : "Mostrar Player"}</button>
                </div>
                <div className="dashboard-element">

                    <i className="lni lni-comments-alt"></i>
                    <h3>Chat</h3>
                    <button onClick={setChat} className={hasChat ? "remove" : "view"}> <i className={hasChat ? "lni lni-cross-circle" : "lni lni-checkmark-circle"}></i>   {hasChat ? "Quitar Chat" : "Mostrar Chat"}</button>
                </div>





            </section>

        )

    };

    const login = () => {
        return (
            <section className="dashboard">
                <div className="login-form">
                    <h3>Login</h3>
                    <span className={signinError ? "error show" : "error"}> {signinError ? signinError : null} </span>

                    <form action="" onSubmit={signIn}>

                        <div className="input">
                            <label htmlFor="user" >Usuario</label>
                            <input type="text" id="user" name="user" required />
                        </div>

                        <div className="input">
                            <label htmlFor="pass" >Password</label>
                            <input type="password" id="pass" name="pass" required />
                        </div>
                        <button type="submit"> Login </button>
                    </form>
                </div>


            </section>
        )
    };



    const signIn = (e) => {
        e.preventDefault();

        const email = e.target.user.value;
        const password = e.target.pass.value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                e.target.reset();
                setSignedUser(user);

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                if (errorCode === "auth/invalid-email") {
                    setSigninError("Usuario invalido");
                } else if (errorCode === "auth/wrong-password") {
                    setSigninError("Password Equivocado");
                }
            });

    }

    const buttonPreview = () => {

        if (buttonText.text) {
            return (
                <div className="button-preview">
                    <h4>¿Quieres saber más?</h4>
                    {button}
                </div>
            )
        }

    };




    if (signedUser) {
        return mainDashboard();
    } else {
        return login();
    }




}


export default Dashboard;