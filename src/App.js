import React, { useState, useEffect } from 'react'
import { db } from './components/Firebase';
import { ref, set, onValue } from "firebase/database";
//import { collection, getDocs, doc, getDoc, setDoc, onSnapshot } from "firebase/firestore";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Transmision from './components/Transmision';
import Dashboard from './components/Dashboard';








function App() {

  const [buttonText, setButtonText] = useState({ text: "", url: "" });
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [hasPlayer, setHasPlayer] = useState(false);
  const [hasChat, setHasChat] = useState(false);

  useEffect(() => {
    let button;

    onValue(ref(db, "button"), (snapshot) => {
      button = { text: snapshot.val().text, url: snapshot.val().url }
      setButtonText(button);
    });


  }, [setButtonText]);


  useEffect(() => {

    onValue(ref(db, "displayed"), (snapshot) => {
      setIsDisplayed(snapshot.val())
    });


  }, [isDisplayed]);

  useEffect(() => {

    onValue(ref(db, "hasPlayer"), (snapshot) => {
      setHasPlayer(snapshot.val())
    })

  }, [hasPlayer]);

  useEffect(() => {
    onValue(ref(db, "hasChat"), (snapshot) => {
      setHasChat(snapshot.val())
    })
  }, [hasChat]);




  const testDB = (e) => {
    e.preventDefault();
    const button = { text: e.target.text.value, url: e.target.url.value };
    set(ref(db, "button"), button);

  }

  const removeButton = () => {
    set(ref(db, "button"), { text: "", url: "" });
    set(ref(db, "displayed"), false);
  }

  const button = <a href={buttonText.url} target="_blank" rel="noreferrer"><button>{buttonText.text}</button></a>;




  return (

    <Router>
      <main>
        <Switch>


          <Route exact path="/">

            <Transmision
              button={button}
              isDisplayed={isDisplayed}
              hasPlayer={hasPlayer}
              hasChat={hasChat}
            />

          </Route>


          <Route path="/dash">

            <Dashboard
              isDisplayed={isDisplayed}
              hasPlayer={hasPlayer}
              testDB={testDB}
              removeButton={removeButton}
              button={button}
              buttonText={buttonText}
              hasChat={hasChat}
            />


          </Route>



        </Switch>

      </main>

    </Router>


  )
}

export default App;
