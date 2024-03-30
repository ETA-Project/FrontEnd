import imgLogo from "../elevator.png";
import axios from "axios";
import { useState, useEffect } from "react";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { PiElevatorDuotone } from "react-icons/pi";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function Elevator({ floor }) {
  const navigate = useNavigate();
  const [data, setData] = useState("1");
  const [prevData, setPrevData] = useState("1");
  const baseUrl = process.env.REACT_APP_BASE_URL;

  async function callApi() {
    try {
      const response = await axios.get(baseUrl + `/eta/check/${floor}`);
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
    <div className={"flex flex-col justify-center items-center gap-5 h-screen"}>
      <div
        className={"w-full fixed top-4 flex justify-between items-center px-4"}
      >
        <IoIosArrowBack
          size={40}
          onClick={() => {
            navigate("/");
          }}
        />
        <p className={"text-[#0d57a7] font-extrabold text-3xl"}>{floor}호기</p>
        <div className={"w-10"} />
      </div>
      <PiElevatorDuotone size={350} color="008fd3" />
      <div className={"flex justify-center gap-2"}>
        {prevData >= data && <FaRegArrowAltCircleDown size={40} />}
        {prevData < data && <FaRegArrowAltCircleUp size={40} />}
        <h1 className={"inline-block text-4xl"}>{data}</h1>
      </div>
    </div>
  );
}
