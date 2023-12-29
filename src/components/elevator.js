import imgLogo from "../elevator.png";

export default function Elevator() {
  return (
    <div
      style={{
        width: "390px",
        height: "844px",
        background: "#ffffff",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <h1>elevator</h1>
      <img
        className="elevatorPicture"
        src={imgLogo}
        width="300px"
        height="300px"
        style={{ display: "block", margin: "0 auto" }}
        alt="Elevator Logo"
      />
    </div>
  );
}
