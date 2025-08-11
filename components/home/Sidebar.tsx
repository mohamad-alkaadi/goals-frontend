import React from "react"

const Sidebar = () => {
  return (
    <div className="w-[300px] h-screen bg-[#222222] pt-3 flex flex-col justify-between">
      <div className="flex flex-col">
        <div className="flex items-center space-x-2 mb-3 px-2  hover:bg-[#1f1f1f]">
          <div className="bg-green-300 w-[45px] h-[45px] flex justify-center items-center rounded-full">
            MA
          </div>
          <div className="flex flex-col text-white space-y-[-4px]">
            <div className="capitalize font-[500]">mohamad alkaadi</div>
            <div className="text-[12px] text-slate-300 font-[400]">
              mohamadalkaadi@gmail.com
            </div>
          </div>
        </div>
        <div className="border-b-[1px] border-[#343434] mb-3"></div>
        <div className="h-[calc(100vh-69px-68px)] overflow-auto">
          <div className="flex justify-between items-center px-4 py-2 text-white hover:bg-[#333333]">
            <div>My Day</div>
            <div className="text-[10px] bg-[#3c3c3c] w-[12px] h-[12px] rounded-full flex justify-center items-center">
              2
            </div>
          </div>
          <div className="flex justify-between items-center px-4 py-2 text-white bg-[#333333]">
            <div className="max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap">
              Overduesssssssssssssssssssssssssssss
            </div>
            <div className="text-[10px] bg-[#3c3c3c] w-[12px] h-[12px] rounded-full flex justify-center items-center">
              4
            </div>
          </div>
          <div className="flex justify-between items-center px-4 py-2 text-white bg-[#333333]">
            <div className="max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap">
              Completed
            </div>
            <div className="text-[10px] bg-[#3c3c3c] w-[12px] h-[12px] rounded-full flex justify-center items-center">
              4
            </div>
          </div>
          <div className="flex justify-between items-center px-4 py-2 text-white bg-[#333333]">
            <div className="max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap">
              Shared
            </div>
            <div className="text-[10px] bg-[#3c3c3c] w-[12px] h-[12px] rounded-full flex justify-center items-center">
              4
            </div>
          </div>
          <div className="flex justify-between items-center px-4 py-2 text-white bg-[#333333]">
            <div className="max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap">
              open sublist for shared
            </div>
            <div className="text-[10px] bg-[#3c3c3c] w-[12px] h-[12px] rounded-full flex justify-center items-center">
              4
            </div>
          </div>
        </div>

        <div className="border-b-[1px] border-[#343434]"></div>
      </div>
      <div className="flex items-center px-4 py-2 text-white bg-[#333333] space-x-2">
        <div className="text-[25px]">+</div>
        <div className="mt-[5px]">Add Group</div>
      </div>
    </div>
  )
}

export default Sidebar
