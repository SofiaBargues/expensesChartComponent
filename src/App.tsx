// import { useState } from "react";
import data from "./data.json";
import logo from "./assets/logo.svg";
import { useState } from "react";
// import viteLogo from "/vite.svg";

function App() {
  const [day, setDay] = useState("");

  const selectedDay = (selectedDay) => {
    setDay(selectedDay);
  };
  console.log(day);
  return (
    <div className="bg-[#f7e9dc] h-screen flex flex-col justify-center">
      <div className="m-auto flex gap-[24px] flex-col">
        <div className="bg-[#ec755d] text-[#f7e9dc] w-[538px] h-[123px] rounded-3xl flex  justify-between p-[34px]">
          <div className="">
            <h3 className="text-xl font-semibold">My balance</h3>
            <h1 className="text-4xl font-semibold">$921.48</h1>
          </div>
          <img src={logo} alt="logo" />
        </div>
        <div className="bg-[#fffcf7] w-[538px] h-[511px] rounded-3xl p-[41px] flex flex-col justify-between">
          <div className="text-[#321b10] text-4xl font-bold">
            Spending - Last 7 days
          </div>
          <div className="flex flex-row m-auto gap-7 items-end">
            {/* map loquito  */}
            {data.map((currentDay, index) => (
              <div>
                <button
                  onClick={() => selectedDay(currentDay.day)}
                  className={`w-10 ${
                    day === currentDay.day
                      ? "bg-[#9cc7cc] hover:bg-[#76979b]"
                      : "bg-[#ec755d] hover:bg-[#ff9b87]"
                  } `}
                  style={{ height: currentDay.amount * 4 }}
                ></button>
                <div className="flex justify-center">{currentDay.day}</div>
              </div>
            ))}
          </div>
          <hr></hr>
          <div>
            <div>Total this month</div>
            <div>$478.33</div>
            <div>
              <div>+2.4%</div>
              <div>from last month</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
