import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Registration() {
  const [option, setOption] = useState("athlete");
  return (
    <div>
      <Navbar />
      <div className="flex justify-evenly mt-12 text-center text-xl font-bold">
        <div
          className={
            option === "athlete"
              ? "border-2 w-[20%] p-4 rounded-4xl border-white shadow-lg text-white bg-blue-700 hover:bg-blue-600 cursor-pointer"
              : "border w-[20%] p-4 rounded-4xl border-white shadow-lg cursor-pointer hover:bg-gray-300"
          }
          onClick={() => {
            setOption("athlete");
          }}
        >
          Register as Athlete
        </div>
        <div
          className={
            option === "trainer"
              ? "border-2 w-[20%] p-4 rounded-4xl border-white shadow-lg text-white bg-blue-700 hover:bg-blue-600 cursor-pointer"
              : "border w-[20%] p-4 rounded-4xl border-white shadow-lg cursor-pointer hover:bg-gray-300"
          }
          onClick={() => {
            setOption("trainer");
          }}
        >
          Register as Trainer
        </div>
        <div
          className={
            option === "sponsor"
              ? "border-2 w-[20%] p-4 rounded-4xl border-white shadow-lg text-white bg-blue-700 hover:bg-blue-600 cursor-pointer"
              : "border w-[20%] p-4 rounded-4xl border-white shadow-lg cursor-pointer hover:bg-gray-300"
          }
          onClick={() => {
            setOption("sponsor");
          }}
        >
          Register as Sponsor
        </div>
      </div>

      {option === "athlete" && (
        <div className="mt-15 w-[79%] mx-auto flex p-4 rounded-3xl shadow-2xl">
          <div className="w-[35%]">
            <img
              src="./pushups.jpeg"
              alt=""
              className="rounded-2xl h-68 w-96"
            />
          </div>
          <div className="w-[65%] ml-10 mt-10">
            <div className="text-5xl font-bold">Athlete</div>
            <div className="text-2xl font-semibold mt-1">
              Showcase your skills, connect with teams, and advance your sports
              career.
            </div>
          </div>
        </div>
      )}

      {option === "trainer" && (
        <div className="mt-15 w-[79%] mx-auto flex p-4 rounded-3xl shadow-2xl">
          <div className="w-[35%]">
            <img src="./gym.jpeg" alt="" className="rounded-2xl h-68 w-96" />
          </div>
          <div className="w-[65%] ml-10 mt-10">
            <div className="text-5xl font-bold">Trainer</div>
            <div className="text-2xl font-semibold mt-1">
              Share your expertise, coach athletes, and build your professional
              network.
            </div>
          </div>
        </div>
      )}

      {option === "sponsor" && (
        <div className="mt-15 w-[79%] mx-auto flex p-4 rounded-3xl shadow-2xl">
          <div className="w-[35%]">
            <img src="./phone.jpeg" alt="" className="rounded-2xl h-68 w-96" />
          </div>
          <div className="w-[65%] ml-10 mt-10">
            <div className="text-5xl font-bold">Sponsor</div>
            <div className="text-2xl font-semibold mt-1">
              Support talented athletes, increase brand visibility, and
              contribute to sports development.
            </div>
          </div>
        </div>
      )}

      <div className="border-2 w-[20%] p-4 rounded-4xl border-white shadow-lg text-white bg-blue-700 hover:bg-blue-600 cursor-pointer mx-auto mt-10 text-center font-semibold text-2xl">
        Register Now
      </div>

      <Footer />
    </div>
  );
}

export default Registration;
