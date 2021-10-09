import React from 'react'
import Player from './Player';


const Transmision = ({ button, isDisplayed, hasPlayer, hasChat }) => {

    return (
        <section className="transmision">

            <div className="logos">
                <img src="./indextv_logo.svg" alt="logo index nacional e index tv" />
            </div>

            <div className="player">
                {hasPlayer ? <Player /> : null}
                {hasChat ? <iframe title="chat" src='https://go.arena.im/embed/chat/cg/65ov'></iframe> : null}

            </div>

            <div className={isDisplayed ? "anuncio roll-up" : "anuncio"}>
                {isDisplayed ? <h3>¿Quieres saber más?</h3> : null}
                {isDisplayed ? button : null}
            </div>





        </section>
    )

}

export default Transmision;