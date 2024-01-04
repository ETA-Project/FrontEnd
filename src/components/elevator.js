import imgLogo from "../elevator.png";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Elevator(props) {
  const [data, setData] = useState("0");
  const baseUrl =
    "http://ec2-13-124-153-108.ap-northeast-2.compute.amazonaws.com:8080";

  async function callApi() {
    try {
      const response = await axios.get(baseUrl + `/eta/check/${props.floor}`);
      console.log(response.data);
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    callApi();
  }, [data]);

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
      <h1>{data}</h1>
    </div>
  );
}
