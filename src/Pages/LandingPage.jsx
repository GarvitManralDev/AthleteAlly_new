import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Video Background Section */}
        <div className="relative w-[95%] mt-4 mx-auto bg-black text-white rounded-xl h-[570px] overflow-hidden">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="/bg-vid1.mp4"
            autoPlay
            loop
            muted
          />
          <div className="relative z-10 text-center mt-25 h-full text-white text-2xl">
            <div className="text-8xl font-bold">
              Empowering Athletes Worldwide
            </div>
            <div className="mt-5">
              Your ultimate destination for sports news, gear and community.
            </div>
            <div className="mt-5 rounded-4xl bg-black w-35 mx-auto p-3 cursor-pointer">
              Join Now
            </div>
          </div>
        </div>
        <div className="text-2xl w-[95%] mt-5 mx-auto text-center">
          <div className=" font-bold text-6xl">
            Empowering Athletes Worldwide
          </div>
          <div className="mt-5 font-semibold">
            Your ultimate destination for sports news, gear and community.
          </div>
          <div
            className="mt-5 rounded-4xl w-35 mx-auto p-3 cursor-pointer text-white"
            style={{ backgroundColor: "#948D8D" }}
          >
            Join Now
          </div>
        </div>

        {/*Services Section*/}
        <div className="relative mt-4 w-[95%] mx-auto">
          <div
            className="text-5xl font-semibold flex ml-1"
            style={{ color: "#3B4651" }}
          >
            <div>Our Services</div>
            <div className="border-b-4 w-[79%] ml-4 "></div>
          </div>
          <div className="flex justify-between gap-4 w-[98%] ml-3">
            {/* Service 1 */}
            <div className="relative mt-4 h-58 w-86 overflow-hidden rounded-lg">
              <img
                src="/service1.jpg"
                alt="Training Programs"
                className="w-full h-full object-cover "
              />
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
                Training Programs
              </div>
            </div>

            {/* Service 2 */}
            <div className="relative mt-4 h-58 w-86 overflow-hidden rounded-lg">
              <img
                src="/service2.jpg"
                alt="Nutrition Advice"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
                Nutrition Advice
              </div>
            </div>

            {/* Service 3 */}
            <div className="relative mt-4 h-58 w-86 overflow-hidden rounded-lg">
              <img
                src="/service3.jpg"
                alt="Performance Analytics"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
                Performance Analytics
              </div>
            </div>
          </div>

          <div className="h-[570px] overflow-hidden mt-4">
            <video
              src="/bg-vid2.mp4"
              autoPlay
              loop
              muted
              className="mt-4 rounded-xl w-[98%] ml-3  h-full object-cover"
            />
          </div>
        </div>

        {/*News Section*/}
        <div className="bg-white mt-6 w-[94%] mx-auto rounded-xl p-4 relative">
          <div className="w-[98%] mx-auto space-y-4">
            <div className="h-80 overflow-hidden rounded-lg">
              <img
                src="/goal.jpg"
                alt="Goal"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-lg font-medium">
              UEFA Champions League 2024-25: News, Schedule, Scores, Results,
              Points table
            </div>
            <div>11h - David Guetta in USA</div>
          </div>

          <div className="flex mt-6 mx-auto rounded-xl w-[98%] bg-[#ADADAD] p-10 text-white ">
            <div className="w-[65%] border-r-1 pt-6">
              <div className="flex">
                <div>
                  <img src="/team1.png" alt="" className="h-10 w-10" />
                </div>
                <div className="ml-2 text-3xl">Leicester</div>
              </div>
              <div className="flex mt-7">
                <div>
                  <img src="/team2.png" alt="" className="h-10 w-10" />
                </div>
                <div className="ml-2 text-3xl">Middlesbrough</div>
              </div>
            </div>
            <div className="mx-auto text-center">
              <div className="text-xl font-semibold p-1 flex flex-col items-center">
                <span>Tomorrow</span>
                <span>6:30pm</span>
              </div>
              <div className="mt-1 relative">
                <img
                  src="/highlights.jpeg"
                  alt=""
                  className="h-25 w-50 rounded-sm"
                />
                <div className="absolute top-1 left-13 font-semibold">
                  HIGHLIGHTS
                </div>
              </div>
            </div>
          </div>

          <div className="flex mt-6 mx-auto rounded-xl w-[98%] bg-[#ADADAD] p-10 text-white ">
            <div className="w-[65%] border-r-1 pt-6">
              <div className="flex">
                <div>
                  <img src="/team1.png" alt="" className="h-10 w-10" />
                </div>
                <div className="ml-2 text-3xl">Leicester</div>
              </div>
              <div className="flex mt-7">
                <div>
                  <img src="/team2.png" alt="" className="h-10 w-10" />
                </div>
                <div className="ml-2 text-3xl">Middlesbrough</div>
              </div>
            </div>
            <div className="mx-auto text-center">
              <div className="text-xl font-semibold p-1 flex flex-col items-center">
                <span>FT</span>
                <span>Thu, 30 Jan</span>
              </div>
              <div className="mt-1 relative bg-[#D9D9D9] p-4 rounded-sm">
                <div className="font-semibold">GAME PREVIEW</div>
                <div className="flex justify-between mt-1">
                  {" "}
                  <img src="team1.png" alt="" className="h-10 w-10" />
                  <img src="team2.png" alt="" className="h-10 w-10" />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute left-[42%] bottom-1 p-4 text-lg font-bold bg-blue-700 text-white rounded-4xl cursor-pointer hover:bg-blue-600 w-[250px] text-center">
            See more matches
          </div>
        </div>

        {/*Upcoming Events Section*/}
        <div className="relative mt-10 w-[95%] mx-auto">
          <div
            className="text-5xl font-semibold flex ml-2"
            style={{ color: "#3B4651" }}
          >
            <div>Upcoming Events</div>
            <div className="border-b-4 w-[70%] ml-4 "></div>
          </div>
          <div className="flex justify-between gap-4 w-[98%] ml-3 text-white pt-14 p-6">
            <div className="bg-[#ADADAD] border relative h-68 w-78 shadow-lg rounded-2xl p-4">
              <div className="absolute left-[30%] bottom-44">
                <img
                  src="/basketball.jpeg"
                  alt=""
                  className="h-30 w-30 rounded-3xl "
                />
              </div>
              <div className="mt-22 ml-3 text-lg font-semibold">
                <div>3x3 Basketball Tournament</div>
                <div className="mt-2">Date: 11 June 2025</div>
                <div>Location: Karnataka</div>
              </div>
              <div className="bg-blue-700 rounded-4xl text-center w-[60%] mx-auto mt-6 p-2 hover:bg-blue-600 font-semibold cursor-pointer">
                Register now
              </div>
            </div>
            <div className="bg-[#ADADAD] border relative h-68 w-78 shadow-lg rounded-2xl p-4">
              <div className="absolute left-[30%] bottom-44">
                <img
                  src="/swimming.jpeg"
                  alt=""
                  className="h-30 w-30 rounded-3xl "
                />
              </div>
              <div className="mt-22 ml-3 text-lg font-semibold">
                <div>Swimming Championship</div>
                <div className="mt-2">Date: 11 June 2025</div>
                <div>Location: Karnataka</div>
              </div>
              <div className="bg-blue-700 rounded-4xl text-center w-[60%] mx-auto mt-6 p-2 hover:bg-blue-600 font-semibold cursor-pointer">
                Register now
              </div>
            </div>
            <div className="bg-[#ADADAD] border relative h-68 w-78 shadow-lg rounded-2xl p-4">
              <div className="absolute left-[30%] bottom-44">
                <img
                  src="/marathon.jpeg"
                  alt=""
                  className="h-30 w-30 rounded-3xl "
                />
              </div>
              <div className="mt-22 ml-3 text-lg font-semibold">
                <div>Marathon City Run</div>
                <div className="mt-2">Date: 11 June 2025</div>
                <div>Location: Karnataka</div>
              </div>
              <div className="bg-blue-700 rounded-4xl text-center w-[60%] mx-auto mt-6 p-2 hover:bg-blue-600 font-semibold cursor-pointer">
                Register now
              </div>
            </div>
          </div>
        </div>

        {/*Community Section*/}
        <div className="relative mt-10 w-[95%] mx-auto">
          <div
            className="text-5xl font-semibold flex items-center ml-2"
            style={{ color: "#3B4651" }}
          >
            <div className="border-b-4 w-[35%] ml-4"></div>
            <div className="mx-3">Our Community</div>
            <div className="border-b-4 w-[33%] ml-4"></div>
          </div>
          <div className="flex justify-between gap-4 w-[98%] ml-3 text-white pt-14 p-6">
            <div className="bg-[#ADADAD] border relative h-36 w-78 shadow-lg rounded-2xl p-4 text-center text-3xl pt-8 font-semibold">
              <div>500+</div>
              <div>Athletes connected</div>
            </div>
            <div className="bg-[#ADADAD] border relative h-36 w-78 shadow-lg rounded-2xl p-4 text-center text-3xl pt-8 font-semibold">
              <div>200+</div>
              <div>Trainers Available</div>
            </div>
            <div className="bg-[#ADADAD] border relative h-36 w-78 shadow-lg rounded-2xl p-4 text-center text-3xl pt-8 font-semibold">
              <div>100+</div>
              <div>Sponsors Engaged</div>
            </div>
          </div>
        </div>

        <div className="relative mt-10 w-[95%] mx-auto text-center ">
          <div className="font-bold text-5xl">Ready to Elevate Your Game?</div>
          <div className="mt-4 text-2xl font-semibold">
            Join AthleteAlly today and take your athletic journey to new
            heights!
          </div>
          <div className="bg-blue-700 rounded-4xl text-center w-[15%] mx-auto mt-6 p-2 hover:bg-blue-600 font-semibold cursor-pointer text-white">
            Get Started Now
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}

export default LandingPage;
