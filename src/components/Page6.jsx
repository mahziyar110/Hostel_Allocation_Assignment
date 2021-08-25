function Page6(props) {
  return (
    <>
      <section className="modal">
        <h1>Success</h1>
        <h3>Your room has been booked successfully.</h3>
        <h3>Your room details are as follows:</h3>
        <h4>
          Hostel No.: {props.gender}
          {props.hostelNo}
        </h4>
        <h4>Floor: {props.floor}</h4>
        <h4>Room No.: {props.room}</h4>
      </section>
    </>
  );
}

export default Page6;
