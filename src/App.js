import logo from './logo192.png';
import React, { useEffect, useState } from 'react';
import './App.css';
import firebase from "firebase";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

function Nav(props) {
  return (
    <>
      <header>
        <div className="logo">
          <img src={logo} alt="logo"></img>
          <p>Hostel Allocation</p>
        </div>
        {props.isSignedIn &&
          <div className="dp">
            <img src={props.dp} alt="DP"></img>
            <a onClick={() => firebase.auth().signOut()}>Logout</a>
          </div>}
      </header>
    </>
  )
}

function Page1() {

  const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
  };

  return (
    <section className="sign-in">
      <h1>Hostel Allocation</h1>
      <p>Please sign-in:</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </section>
  );
}

function Page2(props) {
  return (
    <>
      <section className="welcome">
        <h1>Welcome {props.name}</h1>
        <h4>You have already booked a room.</h4>
        <h2>Your room details are as follows:</h2>
        <h3>Hostel No.: {props.gender}{props.hostelNo} </h3>
        <h3>Floor: {props.floor} </h3>
        <h3>Room No.: {props.room} </h3>
      </section>
    </>
  )
}

function Page3(props) {
  return (
    <>
      <section className="gender">
        <h1>Choose your Hostel</h1>
        <div className="main">
          <div>
            <button onClick={() => props.handleGender("G")} style={{ backgroundColor: "lightpink" }}>Girls Hostel</button>
            <button onClick={() => props.handleGender("B")} style={{ backgroundColor: "lightblue" }}>Boys Hostel</button>
          </div>
        </div>
      </section>
    </>
  )
}

function Page4(props) {
  return (
    <>
      <section className="hostel">
        <h1>Choose a Hostel</h1>
        <div className="main">
          <div>
            <button onClick={() => props.handleHostel(1)}>{props.gender}1</button>
            <button onClick={() => props.handleHostel(2)}>{props.gender}2</button>
            <button onClick={() => props.handleHostel(3)}>{props.gender}3</button>
          </div>
          <div>
            <button onClick={() => props.handleHostel(4)}>{props.gender}4</button>
            <button onClick={() => props.handleHostel(5)}>{props.gender}5</button>
            <button onClick={() => props.handleHostel(6)}>{props.gender}6</button>
          </div>
        </div>
      </section>
    </>
  )
}

function Page5(props) {
  return (
    <>
      <section className="floor">
        <h1>Choose a Floor</h1>
        <div className="main">
          <select onChange={ev => props.handleFloor(ev.target.value)}>
            <option value="1">1st Floor</option>
            <option value="2">2nd Floor</option>
            <option value="3">3rd Floor</option>
            <option value="4">4th Floor</option>
            <option value="5">5th Floor</option>
          </select>
          <div className="rooms">
            <div>
              <button onClick={ev => props.handleRoom(ev.target.value)} value="1">1</button>
              <button onClick={ev => props.handleRoom(ev.target.value)} value="2">2</button>
              <button onClick={ev => props.handleRoom(ev.target.value)} value="3">3</button>
              <button onClick={ev => props.handleRoom(ev.target.value)} value="4">4</button>
            </div>
            <div>
              <button onClick={ev => props.handleRoom(ev.target.value)} value="5">5</button>
              <button onClick={ev => props.handleRoom(ev.target.value)} value="6">6</button>
            </div>
            <div>
              <button onClick={ev => props.handleRoom(ev.target.value)} value="7">7</button>
              <button onClick={ev => props.handleRoom(ev.target.value)} value="8">8</button>
              <button onClick={ev => props.handleRoom(ev.target.value)} value="9">9</button>
              <button onClick={ev => props.handleRoom(ev.target.value)} value="10">10</button>
            </div>
          </div>
          {props.showFinalBtn && <button onClick={() => props.handleFinalBtn()} className="book">Book Room</button>}
        </div>
      </section>
    </>
  )
}

function Page6(props) {
  return (
    <>
      <section className="modal">
        <h1>Success</h1>
        <h3>Your room has been booked successfully.</h3>
        <h3>Your room details are as follows:</h3>
        <h4>Hostel No.: {props.gender}{props.hostelNo}</h4>
        <h4>Floor: {props.floor}</h4>
        <h4>Room No.: {props.room}</h4>
      </section>
    </>
  )
}

function Booking(props) {
  const [page, setPage] = useState(3);
  const [gender, setGender] = useState("");
  const [hostelNo, setHostelNo] = useState(0);
  const [floor, setFloor] = useState(1);
  const [room, setRoom] = useState(0);
  const [showFinalBtn, setShow] = useState(false);
  const localBooking = JSON.parse(localStorage.getItem("booking"));

  const handleFinalBtn = () => {
    setPage(6);
    const booking = {
      gender: gender,
      hostelNo: hostelNo,
      floor: floor,
      room: room
    }
    localStorage.setItem("booking", JSON.stringify(booking));
  }

  const handleRoom = (num) => {
    setRoom(num);
    setShow(true);
  }

  const handleFloor = (num) => {
    setFloor(num);
  }

  const handleHostel = (num) => {
    setHostelNo(num);
    setPage(5);
  }

  const handleGender = (g) => {
    setGender(g);
    setPage(4);
  }

  if (localBooking && page === 3) {


    return <Page2 name={props.name} gender={localBooking.gender} hostelNo={localBooking.hostelNo} floor={localBooking.floor} room={localBooking.room} />;
  }

  else if (page === 3) {
    return (
      <Page3 handleGender={handleGender} />
    );
  }
  else if (page === 4) {
    return (
      <Page4 gender={gender} handleHostel={handleHostel} />
    );
  }
  else if (page === 5) {
    return (
      <Page5 handleFloor={handleFloor} handleRoom={handleRoom} showFinalBtn={showFinalBtn} handleFinalBtn={handleFinalBtn} />
    );
  }
  else if (page === 6) {
    return (
      <Page6 gender={gender} hostelNo={hostelNo} floor={floor} room={room} />
    )
  }


}

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [name, setName] = useState("");
  const [dp, setDP] = useState("");

  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
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
