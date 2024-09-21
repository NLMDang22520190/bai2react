import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";

function App() {
  return (
    <>
      <div className="grid grid-cols-5 grid-rows-3 h-screen">
        <div>
          <div className="bg-bluetittlebar mt-20 h-12 "></div>
        </div>

        <div className=" col-start-2 col-span-3 ">
          <div className="flex items-center content-start h-20 ">
            <img className="h-20 w-30" src={reactLogo}></img>
            <div className="relative w-2/3 ml-16">
              <input
                type="text"
                class="w-full pl-3 pr-10 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-lg border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Nội dung tìm kiếm"
              />
              <svg
                className="svg-icon absolute w-8 h-8 top-2.5 right-2.5 text-slate-600"
                viewBox="0 0 20 20"
              >
                <path d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"></path>
              </svg>
            </div>
            <div className="flex flex-auto item-center justify-end ">
              <svg className="svg-icon h-8 text-slate-600" viewBox="0 0 20 20">
                <path d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"></path>
              </svg>
              <svg
                className="ml-3 svg-icon h-8 text-slate-600"
                viewBox="0 0 20 20"
              >
                <path d="M2.25,12.584c-0.713,0-1.292,0.578-1.292,1.291s0.579,1.291,1.292,1.291c0.713,0,1.292-0.578,1.292-1.291S2.963,12.584,2.25,12.584z M2.25,14.307c-0.238,0-0.43-0.193-0.43-0.432s0.192-0.432,0.43-0.432c0.238,0,0.431,0.193,0.431,0.432S2.488,14.307,2.25,14.307z M5.694,6.555H18.61c0.237,0,0.431-0.191,0.431-0.43s-0.193-0.431-0.431-0.431H5.694c-0.238,0-0.43,0.192-0.43,0.431S5.457,6.555,5.694,6.555z M2.25,8.708c-0.713,0-1.292,0.578-1.292,1.291c0,0.715,0.579,1.292,1.292,1.292c0.713,0,1.292-0.577,1.292-1.292C3.542,9.287,2.963,8.708,2.25,8.708z M2.25,10.43c-0.238,0-0.43-0.192-0.43-0.431c0-0.237,0.192-0.43,0.43-0.43c0.238,0,0.431,0.192,0.431,0.43C2.681,10.238,2.488,10.43,2.25,10.43z M18.61,9.57H5.694c-0.238,0-0.43,0.192-0.43,0.43c0,0.238,0.192,0.431,0.43,0.431H18.61c0.237,0,0.431-0.192,0.431-0.431C19.041,9.762,18.848,9.57,18.61,9.57z M18.61,13.443H5.694c-0.238,0-0.43,0.193-0.43,0.432s0.192,0.432,0.43,0.432H18.61c0.237,0,0.431-0.193,0.431-0.432S18.848,13.443,18.61,13.443z M2.25,4.833c-0.713,0-1.292,0.578-1.292,1.292c0,0.713,0.579,1.291,1.292,1.291c0.713,0,1.292-0.578,1.292-1.291C3.542,5.412,2.963,4.833,2.25,4.833z M2.25,6.555c-0.238,0-0.43-0.191-0.43-0.43s0.192-0.431,0.43-0.431c0.238,0,0.431,0.192,0.431,0.431S2.488,6.555,2.25,6.555z"></path>
              </svg>
            </div>
          </div>

          <div className="bg-bluetittlebar h-12 flex item-center content-center">
            <button className="text-xl text-white bg-transparent w-1/12 border border-x-white">
              NÓNG
            </button>
            <button className="text-xl text-white bg-transparent w-1/12 border border-x-white">
              MỚI
            </button>
            <button className="text-xl text-white bg-transparent w-1/12 border border-x-white">
              VIDEO
            </button>
            <button className="text-xl text-white bg-transparent w-1/12 border border-x-gray-300">
              CHỦ ĐỀ
            </button>
            <button className="h-10 ml-8 border-white border text-white rounded-full self-center">
              # Năng lượng tích cực
            </button>
            <button className="h-10 ml-4 border-white border text-white rounded-full self-center">
              # Khám phá Việt Nam
            </button>
            <button className="h-10 ml-4 border-white border text-white rounded-full self-center">
              # Khám phá Thế giới
            </button>
          </div>

          <div className="flex items-center bg-bluetittlebar h-screen">
            <div className="w-3/5 bg-bubble-gum h-full"></div>
          </div>
        </div>
        <div>
          <div className="bg-bluetittlebar mt-20 h-12 "></div>
        </div>
      </div>
    </>
  );
}

export default App;
