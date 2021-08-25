function Page5(props) {
  return (
    <>
      <section className="floor">
        <h1>Choose a Floor</h1>
        <div className="main">
          <select onChange={(ev) => props.handleFloor(ev.target.value)}>
            <option value="1">1st Floor</option>
            <option value="2">2nd Floor</option>
            <option value="3">3rd Floor</option>
            <option value="4">4th Floor</option>
            <option value="5">5th Floor</option>
          </select>
          <div className="rooms">
            <div>
              <button
                onClick={(ev) => props.handleRoom(ev.target.value)}
                value="1"
              >
                1
              </button>
              <button
                onClick={(ev) => props.handleRoom(ev.target.value)}
                value="2"
              >
                2
              </button>
              <button
                onClick={(ev) => props.handleRoom(ev.target.value)}
                value="3"
              >
                3
              </button>
              <button
                onClick={(ev) => props.handleRoom(ev.target.value)}
                value="4"
              >
                4
              </button>
            </div>
            <div>
              <button
                onClick={(ev) => props.handleRoom(ev.target.value)}
                value="5"
              >
                5
              </button>
              <button
                onClick={(ev) => props.handleRoom(ev.target.value)}
                value="6"
              >
                6
              </button>
            </div>
            <div>
              <button
                onClick={(ev) => props.handleRoom(ev.target.value)}
                value="7"
              >
                7
              </button>
              <button
                onClick={(ev) => props.handleRoom(ev.target.value)}
                value="8"
              >
                8
              </button>
              <button
                onClick={(ev) => props.handleRoom(ev.target.value)}
                value="9"
              >
                9
              </button>
              <button
                onClick={(ev) => props.handleRoom(ev.target.value)}
                value="10"
              >
                10
              </button>
            </div>
          </div>
          {props.showFinalBtn && (
            <button onClick={() => props.handleFinalBtn()} className="book">
              Book Room
            </button>
          )}
        </div>
      </section>
    </>
  );
}

export default Page5;
