import { useState } from "react";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";
import Page6 from "./Page6";

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
      room: room,
    };
    localStorage.setItem("booking", JSON.stringify(booking));
  };

  const handleRoom = (num) => {
    setRoom(num);
    setShow(true);
  };

  const handleFloor = (num) => {
    setFloor(num);
  };

  const handleHostel = (num) => {
    setHostelNo(num);
    setPage(5);
  };

  const handleGender = (g) => {
    setGender(g);
    setPage(4);
  };

  if (localBooking && page === 3) {
    return (
      <Page2
        name={props.name}
        gender={localBooking.gender}
        hostelNo={localBooking.hostelNo}
        floor={localBooking.floor}
        room={localBooking.room}
      />
    );
  } else if (page === 3) {
    return <Page3 handleGender={handleGender} />;
  } else if (page === 4) {
    return <Page4 gender={gender} handleHostel={handleHostel} />;
  } else if (page === 5) {
    return (
      <Page5
        handleFloor={handleFloor}
        handleRoom={handleRoom}
        showFinalBtn={showFinalBtn}
        handleFinalBtn={handleFinalBtn}
      />
    );
  } else if (page === 6) {
    return (
      <Page6 gender={gender} hostelNo={hostelNo} floor={floor} room={room} />
    );
  }
}

export default Booking;
