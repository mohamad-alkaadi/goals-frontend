import React from "react"
import { FaRegLightbulb } from "react-icons/fa6"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
const SuggestionsSheet = () => {
  return (
    <Sheet>
      <SheetTrigger className="bg-[#303030] hover:bg-[#373737] rounded-sm w-[28px] h-[28px] flex justify-center items-center">
        <FaRegLightbulb />
      </SheetTrigger>
      <SheetContent className="bg-[#272727] border-0">
        <SheetHeader>
          <SheetTitle>Suggestions Sheet</SheetTitle>
          <SheetDescription>Suggestions Sheet desc</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export default SuggestionsSheet
