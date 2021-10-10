import React from 'react'

const Login = ({ signIn, signinError }) => {
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
}

export default Login;
