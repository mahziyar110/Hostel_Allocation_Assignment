import React, { useEffect, useState } from "react";
import "./App.css";
import firebase from "firebase";
import Nav from "./components/Nav";
import Booking from "./components/Booking";
import Page1 from "./components/Page1";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [name, setName] = useState("");
  const [dp, setDP] = useState("");

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        if (user) {
          // User is signed in.
          setName(user.displayName);
          setDP(user.photoURL);
        }
        setIsSignedIn(!!user);
      });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  return (
    <div className="App">
      <Nav dp={dp} isSignedIn={isSignedIn} />
      {isSignedIn ? <Booking name={name} /> : <Page1 />}
    </div>
  );
}

export default App;
