import React from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
    <div
      className={
        "flex flex-col justify-center items-start h-screen px-5 gap-10"
      }
    >
      <div className={"flex flex-col gap-5"}>
        <p className={"text-5xl"}>정문</p>
        <div className={"text-3xl flex gap-5 text-[#0d57a7]"}>
          <p
            onClick={() => {
              navigate("/elevator1");
            }}
          >
            홀수층
          </p>
          <p
            onClick={() => {
              navigate("/elevator2");
            }}
          >
            짝수층
          </p>
        </div>
      </div>
      <div className={"flex flex-col gap-5"}>
        <p className={"text-5xl"}>후문</p>
        <div className={"text-3xl flex gap-5 text-[#0d57a7]"}>
          <p
            onClick={() => {
              navigate("/elevator4");
            }}
          >
            홀수층
          </p>
          <p
            onClick={() => {
              navigate("/elevator3");
            }}
          >
            짝수층
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
