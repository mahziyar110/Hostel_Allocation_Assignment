function Page4(props) {
  return (
    <>
      <section className="hostel">
        <h1>Choose a Hostel</h1>
        <div className="main">
          <div>
            <button onClick={() => props.handleHostel(1)}>
              {props.gender}1
            </button>
            <button onClick={() => props.handleHostel(2)}>
              {props.gender}2
            </button>
            <button onClick={() => props.handleHostel(3)}>
              {props.gender}3
            </button>
          </div>
          <div>
            <button onClick={() => props.handleHostel(4)}>
              {props.gender}4
            </button>
            <button onClick={() => props.handleHostel(5)}>
              {props.gender}5
            </button>
            <button onClick={() => props.handleHostel(6)}>
              {props.gender}6
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Page4;
