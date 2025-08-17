import React from "react"
import { LuEarth } from "react-icons/lu"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
const FriendsSheet = () => {
  return (
    <Sheet>
      <SheetTrigger className="bg-[#303030] hover:bg-[#373737] rounded-sm w-[28px] h-[28px] flex justify-center items-center">
        <LuEarth />
      </SheetTrigger>
      <SheetContent className="bg-[#272727] border-0">
        <SheetHeader>
          <SheetTitle>Friends Sheet</SheetTitle>
          <SheetDescription>Friends Sheet desc</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export default FriendsSheet
