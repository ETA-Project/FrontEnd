import imgLogo from "../elevator.png";
import axios from "axios";
import { useState, useEffect } from "react";
import up from "../up.png";
import down from "../down.png";

export default function Elevator(props) {
  const [data, setData] = useState("1");
  const [prevData, setPrevData] = useState("1");
  const baseUrl = process.env.REACT_APP_BASE_URL;

  async function callApi() {
    try {
      const response = await axios.get(baseUrl + `/eta/check/${props.floor}`);
      console.log(response.data);
      setPrevData(data);
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    callApi();
  }, []);

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
      <div style={{ display: "flex", justifyContent: "center" }}>
        {prevData > data && <img className="arrow" src={down} alt="down" />}
        {prevData < data && <img className="arrow" src={up} alt="up" />}
        <h1 style={{ display: "inline-block" }}>{data}</h1>
      </div>
    </div>
  );
}
