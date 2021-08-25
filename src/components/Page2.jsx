function Page2(props) {
  return (
    <>
      <section className="welcome">
        <h1>Welcome {props.name}</h1>
        <h4>You have already booked a room.</h4>
        <h2>Your room details are as follows:</h2>
        <h3>
          Hostel No.: {props.gender}
          {props.hostelNo}{" "}
        </h3>
        <h3>Floor: {props.floor} </h3>
        <h3>Room No.: {props.room} </h3>
      </section>
    </>
  );
}

export default Page2;
