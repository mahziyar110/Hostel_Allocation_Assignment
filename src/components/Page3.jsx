function Page3(props) {
  return (
    <>
      <section className="gender">
        <h1>Choose your Hostel</h1>
        <div className="main">
          <div>
            <button
              onClick={() => props.handleGender("G")}
              style={{ backgroundColor: "lightpink" }}
            >
              Girls Hostel
            </button>
            <button
              onClick={() => props.handleGender("B")}
              style={{ backgroundColor: "lightblue" }}
            >
              Boys Hostel
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Page3;
