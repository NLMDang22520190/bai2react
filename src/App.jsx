import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import pictureSample1 from "./assets/36.jpg";
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
          {/* NavBtn */}
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

          <div className="flex items-center h-screen">
            <div className="w-3/5  h-full">
              {/* Main article */}
              <div className="mt-4">
                <img
                  className="mb-2 h-64 w-full rounded-md"
                  src={pictureSample1}
                ></img>
                <label className="text-bluetext text-wrap text-2xl">
                  'Rốn lũ' Tân Hoá ngập tới 2m, hàng trăm hộ dân lên nhà phao
                  tránh trú
                </label>
                <div className="flex items-center h-6 mt-2 gap-2">
                  <img className="h-6" src={reactLogo}></img>
                  <label>1 giờ</label>
                  <label>8 liên quan</label>
                </div>
              </div>
              {/* Secondary article */}
              <div className="grid grid-cols-3 h-48 mt-2 gap-2">
                <div>
                  <img className="h-1/2 rounded" src={pictureSample1}></img>
                  <label className="text-warp text-sm">
                    Thống nhất phương án trình Chính phủ lịch nghĩ lễ, Tết năm
                    2025
                  </label>
                  <div className="flex items-center gap-2 mt-1">
                    <img className="h-4" src={reactLogo}></img>
                    <label className="text-xs">1 giờ</label>
                  </div>
                </div>
                <div>
                  <img className="h-1/2 rounded" src={pictureSample1}></img>
                  <label className="text-warp text-sm">
                    Thống nhất phương án trình Chính phủ lịch nghĩ lễ, Tết năm
                    2025
                  </label>
                  <div className="flex items-center gap-2 mt-1">
                    <img className="h-4" src={reactLogo}></img>
                    <label className="text-xs">1 giờ</label>
                  </div>
                </div>
                <div>
                  <img className="h-1/2 rounded" src={pictureSample1}></img>
                  <label className="text-warp text-sm">
                    Thống nhất phương án trình Chính phủ lịch nghĩ lễ, Tết năm
                    2025
                  </label>
                  <div className="flex items-center gap-2 mt-1">
                    <img className="h-4" src={reactLogo}></img>
                    <label className="text-xs">1 giờ</label>
                  </div>
                </div>
              </div>
              {/* third article */}
              <div className="flex mt-2 flex-col gap-2">
                <div className="border border-metal border-opacity-15 h-0"></div>
                <div className="flex items-center h-20 gap-2 ">
                  <img className="h-full rounded" src={pictureSample1}></img>
                  <div className="h-full">
                    <lable className="text-warp text-sm">
                      Kê biên, thu giữ bộ sưu tập đồng hồ xa xỉ và khối tài sản
                      "khủng" của cựu Bí thư Tình uỷ Bến Tre.
                    </lable>
                    <div className="flex items-center gap-2 mt-1">
                      <img className="h-4" src={reactLogo}></img>
                      <lable className="text-xs">6 giờ</lable>
                      <lable className="text-xs">20 liên quan</lable>
                    </div>
                  </div>
                </div>
                <div className="border border-metal border-opacity-15 h-0"></div>

                <div className="flex items-center h-20 gap-2 ">
                  <img className="h-full rounded" src={pictureSample1}></img>
                  <div className="h-full">
                    <lable className="text-warp text-sm">
                      Kê biên, thu giữ bộ sưu tập đồng hồ xa xỉ và khối tài sản
                      "khủng" của cựu Bí thư Tình uỷ Bến Tre.
                    </lable>
                    <div className="flex items-center gap-2 mt-1">
                      <img className="h-4" src={reactLogo}></img>
                      <lable className="text-xs">6 giờ</lable>
                      <lable className="text-xs">20 liên quan</lable>
                    </div>
                  </div>
                </div>
                <div className="border border-metal border-opacity-15 h-0"></div>

                <div className="flex items-center h-20 gap-2 ">
                  <img className="h-full rounded" src={pictureSample1}></img>
                  <div className="h-full">
                    <lable className="text-warp text-sm">
                      Kê biên, thu giữ bộ sưu tập đồng hồ xa xỉ và khối tài sản
                      "khủng" của cựu Bí thư Tình uỷ Bến Tre.
                    </lable>
                    <div className="flex items-center gap-2 mt-1">
                      <img className="h-4" src={reactLogo}></img>
                      <lable className="text-xs">6 giờ</lable>
                      <lable className="text-xs">20 liên quan</lable>
                    </div>
                  </div>
                </div>
                <div className="border border-metal border-opacity-15 h-0"></div>

                <div className="flex items-center h-20 gap-2 ">
                  <img className="h-full rounded" src={pictureSample1}></img>
                  <div className="h-full">
                    <lable className="text-warp text-sm">
                      Kê biên, thu giữ bộ sưu tập đồng hồ xa xỉ và khối tài sản
                      "khủng" của cựu Bí thư Tình uỷ Bến Tre.
                    </lable>
                    <div className="flex items-center gap-2 mt-1">
                      <img className="h-4" src={reactLogo}></img>
                      <lable className="text-xs">6 giờ</lable>
                      <lable className="text-xs">20 liên quan</lable>
                    </div>
                  </div>
                </div>
                <div className="border border-metal border-opacity-15 h-0"></div>

                <div className="flex items-center h-20 gap-2 ">
                  <img className="h-full rounded" src={pictureSample1}></img>
                  <div className="h-full">
                    <lable className="text-warp text-sm">
                      Kê biên, thu giữ bộ sưu tập đồng hồ xa xỉ và khối tài sản
                      "khủng" của cựu Bí thư Tình uỷ Bến Tre.
                    </lable>
                    <div className="flex items-center gap-2 mt-1">
                      <img className="h-4" src={reactLogo}></img>
                      <lable className="text-xs">6 giờ</lable>
                      <lable className="text-xs">20 liên quan</lable>
                    </div>
                  </div>
                </div>
                <div className="border border-metal border-opacity-15 h-0"></div>
              </div>
              <div className="mt-2">
                <lable className="text-orangetext border-l-4 pl-2 text-lg">
                  NĂNG LƯỢNG TÍCH CỰC
                </lable>
              </div>
              {/* fourth article */}
              <div className="flex h-64 my-2 ">
                <div className="flex flex-col gap-2 w-64">
                  <img className="h-20 rounded" src={pictureSample1}></img>
                  <img className="h-20 rounded" src={pictureSample1}></img>
                  <img
                    className="h-20 rounded opacity-25"
                    src={pictureSample1}
                  ></img>
                </div>
                <div className="flex flex-col gap-2 ml-4">
                  <div>
                    <lable className="text-warp text-sm">
                      Kê biên, thu giữ bộ sưu tập đồng hồ xa xỉ và khối tài sản
                      "khủng" của cựu Bí thư Tình uỷ Bến Tre.
                    </lable>
                    <img className="h-4" src={reactLogo}></img>
                  </div>
                  <div className="border border-metal border-opacity-15 h-0"></div>
                  <div>
                    <lable className="text-warp text-sm">
                      Kê biên, thu giữ bộ sưu tập đồng hồ xa xỉ và khối tài sản
                      "khủng" của cựu Bí thư Tình uỷ Bến Tre.
                    </lable>
                    <img className="h-4" src={reactLogo}></img>
                  </div>
                  <div className="border border-metal border-opacity-15 h-0"></div>
                  <div className="opacity-25">
                    <lable className="text-warp text-sm">
                      Kê biên, thu giữ bộ sưu tập đồng hồ xa xỉ và khối tài sản
                      "khủng" của cựu Bí thư Tình uỷ Bến Tre.
                    </lable>
                    <img className="h-4" src={reactLogo}></img>
                  </div>
                </div>
              </div>
              {/* fifth article */}
              <div className="flex flex-col gap-2">
                <div className="border border-metal border-opacity-15 h-0"></div>
                <div className="flex items-center h-20 gap-2 ">
                  <img className="h-full rounded" src={pictureSample1}></img>
                  <div className="h-full">
                    <lable className="text-warp text-sm">
                      Kê biên, thu giữ bộ sưu tập đồng hồ xa xỉ và khối tài sản
                      "khủng" của cựu Bí thư Tình uỷ Bến Tre.
                    </lable>
                    <div className="flex items-center gap-2 mt-1">
                      <img className="h-4" src={reactLogo}></img>
                      <lable className="text-xs">6 giờ</lable>
                      <lable className="text-xs">20 liên quan</lable>
                    </div>
                  </div>
                </div>
                <div className="border border-metal border-opacity-15 h-0"></div>

                <div className="flex items-center h-20 gap-2 ">
                  <img className="h-full rounded" src={pictureSample1}></img>
                  <div className="h-full">
                    <lable className="text-warp text-sm">
                      Kê biên, thu giữ bộ sưu tập đồng hồ xa xỉ và khối tài sản
                      "khủng" của cựu Bí thư Tình uỷ Bến Tre.
                    </lable>
                    <div className="flex items-center gap-2 mt-1">
                      <img className="h-4" src={reactLogo}></img>
                      <lable className="text-xs">6 giờ</lable>
                      <lable className="text-xs">20 liên quan</lable>
                    </div>
                  </div>
                </div>
                <div className="border border-metal border-opacity-15 h-0"></div>

                <div className="flex items-center h-20 gap-2 ">
                  <img className="h-full rounded" src={pictureSample1}></img>
                  <div className="h-full">
                    <lable className="text-warp text-sm">
                      Kê biên, thu giữ bộ sưu tập đồng hồ xa xỉ và khối tài sản
                      "khủng" của cựu Bí thư Tình uỷ Bến Tre.
                    </lable>
                    <div className="flex items-center gap-2 mt-1">
                      <img className="h-4" src={reactLogo}></img>
                      <lable className="text-xs">6 giờ</lable>
                      <lable className="text-xs">20 liên quan</lable>
                    </div>
                  </div>
                </div>
                <div className="border border-metal border-opacity-15 h-0"></div>
              </div>
            </div>
            <div className="w-2/5 h-full ml-4">
              <div className="flex flex-col gap-3 mt-4 ">
                <div className="flex  h-20 gap-2  ">
                  <img
                    className="h-1/2 rounded mt-2"
                    src={pictureSample1}
                  ></img>
                  <div className="h-full">
                    <lable className="text-warp text-sm">
                      Kê biên, thu giữ bộ sưu tập đồng hồ xa xỉ và khối tài sản
                      "khủng" của cựu Bí thư Tình uỷ Bến Tre.
                    </lable>
                    <div className="flex items-center gap-2 mt-1">
                      <img className="h-2" src={reactLogo}></img>
                      <lable className="text-xs">6 giờ</lable>
                      <lable className="text-xs">20 liên quan</lable>
                    </div>
                  </div>
                </div>
                <div className="border border-metal border-opacity-15 h-0"></div>
                <div className="flex  h-20 gap-2  ">
                  <img
                    className="h-1/2 rounded mt-2"
                    src={pictureSample1}
                  ></img>
                  <div className="h-full">
                    <lable className="text-warp text-sm">
                      Kê biên, thu giữ bộ sưu tập đồng hồ xa xỉ và khối tài sản
                      "khủng" của cựu Bí thư Tình uỷ Bến Tre.
                    </lable>
                    <div className="flex items-center gap-2 mt-1">
                      <img className="h-2" src={reactLogo}></img>
                      <lable className="text-xs">6 giờ</lable>
                      <lable className="text-xs">20 liên quan</lable>
                    </div>
                  </div>
                </div>
                <div className="border border-metal border-opacity-15 h-0"></div>
                <div className="flex  h-20 gap-2  ">
                  <img
                    className="h-1/2 rounded mt-2"
                    src={pictureSample1}
                  ></img>
                  <div className="h-full">
                    <lable className="text-warp text-sm">
                      Kê biên, thu giữ bộ sưu tập đồng hồ xa xỉ và khối tài sản
                      "khủng" của cựu Bí thư Tình uỷ Bến Tre.
                    </lable>
                    <div className="flex items-center gap-2 mt-1">
                      <img className="h-2" src={reactLogo}></img>
                      <lable className="text-xs">6 giờ</lable>
                      <lable className="text-xs">20 liên quan</lable>
                    </div>
                  </div>
                </div>
                <div className="border border-metal border-opacity-15 h-0"></div>
                <div className="flex  h-20 gap-2  ">
                  <img
                    className="h-1/2 rounded mt-2"
                    src={pictureSample1}
                  ></img>
                  <div className="h-full">
                    <lable className="text-warp text-sm">
                      Kê biên, thu giữ bộ sưu tập đồng hồ xa xỉ và khối tài sản
                      "khủng" của cựu Bí thư Tình uỷ Bến Tre.
                    </lable>
                    <div className="flex items-center gap-2 mt-1">
                      <img className="h-2" src={reactLogo}></img>
                      <lable className="text-xs">6 giờ</lable>
                      <lable className="text-xs">20 liên quan</lable>
                    </div>
                  </div>
                </div>
                <div className="border border-metal border-opacity-15 h-0"></div>
                <div className="flex  h-20 gap-2  ">
                  <img
                    className="h-1/2 rounded mt-2"
                    src={pictureSample1}
                  ></img>
                  <div className="h-full">
                    <lable className="text-warp text-sm">
                      Kê biên, thu giữ bộ sưu tập đồng hồ xa xỉ và khối tài sản
                      "khủng" của cựu Bí thư Tình uỷ Bến Tre.
                    </lable>
                    <div className="flex items-center gap-2 mt-1">
                      <img className="h-2" src={reactLogo}></img>
                      <lable className="text-xs">6 giờ</lable>
                      <lable className="text-xs">20 liên quan</lable>
                    </div>
                  </div>
                </div>
                <div className="border border-metal border-opacity-15 h-0"></div>
                <div className="flex  h-20 gap-2  ">
                  <img
                    className="h-1/2 rounded mt-2"
                    src={pictureSample1}
                  ></img>
                  <div className="h-full">
                    <lable className="text-warp text-sm">
                      Kê biên, thu giữ bộ sưu tập đồng hồ xa xỉ và khối tài sản
                      "khủng" của cựu Bí thư Tình uỷ Bến Tre.
                    </lable>
                    <div className="flex items-center gap-2 mt-1">
                      <img className="h-2" src={reactLogo}></img>
                      <lable className="text-xs">6 giờ</lable>
                      <lable className="text-xs">20 liên quan</lable>
                    </div>
                  </div>
                </div>
                <div className="border border-metal border-opacity-15 h-0"></div>
                <div className="flex  h-20 gap-2  ">
                  <img
                    className="h-1/2 rounded mt-2"
                    src={pictureSample1}
                  ></img>
                  <div className="h-full">
                    <lable className="text-warp text-sm">
                      Kê biên, thu giữ bộ sưu tập đồng hồ xa xỉ và khối tài sản
                      "khủng" của cựu Bí thư Tình uỷ Bến Tre.
                    </lable>
                    <div className="flex items-center gap-2 mt-1">
                      <img className="h-2" src={reactLogo}></img>
                      <lable className="text-xs">6 giờ</lable>
                      <lable className="text-xs">20 liên quan</lable>
                    </div>
                  </div>
                </div>
                <div className="border border-metal border-opacity-15 h-0"></div>
              </div>
              <div className="flex flex-col bg-graybg h-28 mt-4">
                <label className=" basis-1/5 text-xs ml-4">
                  Đối tác chính thức
                </label>
                <div className="basis-4/5 grid grid-cols-3 gap-2 px-4 pb-4 self-stretch  ">
                  <img className="h-full" src={pictureSample1}></img>
                  <img className="h-full" src={pictureSample1}></img>
                  <img className="h-full" src={pictureSample1}></img>
                </div>
              </div>

              <div className="bg-graybg h-64 mt-8 p-4">
                <img className="h-full" src={pictureSample1}></img>
              </div>

              <div className="flex flex-col bg-yellowbg mt-8 h-100 bg-opacity-75 p-4 gap-3">
                <div className="flex justify-items-start gap-2">
                  <svg
                    className="h-8 fill-red-300"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                  </svg>
                  <label className="text-red-300 text-2xl self-center">
                    ĐỊA PHƯƠNG
                  </label>
                </div>
                <select name="cars">
                  <option value="volvo">An Giang</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
                <div className="flex h-20 gap-2  ">
                  <img
                    className="h-1/2 rounded mt-2"
                    src={pictureSample1}
                  ></img>
                  <div className="h-full">
                    <lable className="text-warp text-sm">
                      Kê biên, thu giữ bộ sưu tập đồng hồ xa xỉ và khối tài sản
                      "khủng" của cựu Bí thư Tình uỷ Bến Tre.
                    </lable>
                    <div className="flex items-center gap-2 mt-1">
                      <img className="h-2" src={reactLogo}></img>
                      <lable className="text-xs">6 giờ</lable>
                      <lable className="text-xs">20 liên quan</lable>
                    </div>
                  </div>
                </div>
                <div className="border border-metal border-opacity-15 h-0"></div>
                <div className="flex  h-20 gap-2  ">
                  <img
                    className="h-1/2 rounded mt-2"
                    src={pictureSample1}
                  ></img>
                  <div className="h-full">
                    <lable className="text-warp text-sm">
                      Kê biên, thu giữ bộ sưu tập đồng hồ xa xỉ và khối tài sản
                      "khủng" của cựu Bí thư Tình uỷ Bến Tre.
                    </lable>
                    <div className="flex items-center gap-2 mt-1">
                      <img className="h-2" src={reactLogo}></img>
                      <lable className="text-xs">6 giờ</lable>
                      <lable className="text-xs">20 liên quan</lable>
                    </div>
                  </div>
                </div>
                <div className="border border-metal border-opacity-15 h-0"></div>
                <div className="flex  h-20 gap-2  ">
                  <img
                    className="h-1/2 rounded mt-2"
                    src={pictureSample1}
                  ></img>
                  <div className="h-full">
                    <lable className="text-warp text-sm">
                      Kê biên, thu giữ bộ sưu tập đồng hồ xa xỉ và khối tài sản
                      "khủng" của cựu Bí thư Tình uỷ Bến Tre.
                    </lable>
                    <div className="flex items-center gap-2 mt-1">
                      <img className="h-2" src={reactLogo}></img>
                      <lable className="text-xs">6 giờ</lable>
                      <lable className="text-xs">20 liên quan</lable>
                    </div>
                  </div>
                </div>
                <div className="border border-metal border-opacity-15 h-0"></div>
              </div>
            </div>
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
