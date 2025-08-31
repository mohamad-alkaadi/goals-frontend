"use client"
import React from "react"
import { FaRegLightbulb } from "react-icons/fa6"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { IoAdd } from "react-icons/io5"
const SuggestionsSheet = () => {
  return (
    <Sheet>
      <SheetTrigger className="bg-[#303030] hover:bg-[#373737] rounded-sm w-[28px] h-[28px] flex justify-center items-center">
        <FaRegLightbulb />
      </SheetTrigger>
      <SheetContent className="bg-[#272727] border-0 text-white">
        <SheetHeader className="flex flex-col justify-center space-y-1 h-full">
          <SheetTitle className="text-white text-[25px]">
            Suggestions
          </SheetTitle>
          <div className="w-full flex-grow overflow-auto">
            <div className="w-full flex justify-center items-center space-x-2 py-3 hover:bg-[#373737] px-2  border-b-[1px] border-[#393939]">
              <div className="flex justify-start items-center text-[17px] font-[500] flex-grow">
                User Name
              </div>
              <IoAdd className="text-[#76b9ed] text-[25px] hover:bg-[#3e4347]  cursor-pointer" />
            </div>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export default SuggestionsSheet
