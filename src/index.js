import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyARSiN4lTe6sURv4idqcLoP8qMH0nmbfHo",
  authDomain: "hostel-allocation-bc66b.firebaseapp.com",
  projectId: "hostel-allocation-bc66b",
  storageBucket: "hostel-allocation-bc66b.appspot.com",
  messagingSenderId: "56906080149",
  appId: "1:56906080149:web:604b000e0ac4fd60f0209c",
  measurementId: "G-1LYR52HS5K"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

