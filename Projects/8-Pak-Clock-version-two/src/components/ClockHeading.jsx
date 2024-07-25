import { IoMdClock } from "react-icons/io";

function ClockHeading() {
  return (
    <div className="heading">
      <h1 style={{ color: "black", fontSize: "3.5rem" }} className="fw-bolder">
        Pak Clock
      </h1>
      <IoMdClock style={{ fontSize: "100px" }} />
    </div>
  );
}

export default ClockHeading;
