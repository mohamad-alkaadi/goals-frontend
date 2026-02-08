"use client"
import React, { useRef, useState } from "react"
import { HiOutlineDotsVertical } from "react-icons/hi"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const SidebarAddGroup = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const handleSubmit = async (
    e?: React.FormEvent | React.MouseEvent,
    options?: { allowPageReload?: boolean }
  ) => {
    e?.preventDefault();
    if (inputRef.current != document.activeElement) {
      inputRef.current?.focus();
      return;
    }

    const title = inputValue.trim();
    if (!title) {
      inputRef.current?.focus();
      return;
    }

    // await createGoal(title, dueDate, shared, sharedWith);
    setInputValue("");
    inputRef.current?.blur();
    setIsFocused(false);

    if (options?.allowPageReload) {
      formRef.current?.submit();
    }
  };
  return (
    <div className="flex items-center text-white">
      <div className="flex items-center space-x-2 w-[85%] hover:bg-[#333333] pl-4 py-2 cursor-pointer">
        <button
          type="button"
          onClick={(e) => handleSubmit(e, { allowPageReload: true })}
        >
          <div className="text-[25px] cursor-pointer">+</div>
        </button>
        <input
          ref={inputRef}
          placeholder="Add Group"
          className="w-full outline-0"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

      </div>
      <DropdownMenu>
        <DropdownMenuTrigger className="hover:bg-[#333333] py-2 flex-grow flex justify-center items-center h-full cursor-pointer">
          <HiOutlineDotsVertical className="" />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          side="right"
          className="bg-[#212121] text-white border-0 mt-1 rounded-sm"
        >
          <DropdownMenuItem className="hover:bg-[#333333] rounded-sm cursor-pointer">
            Profile
          </DropdownMenuItem>
          <DropdownMenuSeparator className="bg-[#343434]" />
          <DropdownMenuItem className="hover:bg-[#333333] rounded-sm cursor-pointer">
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div >
  )
}

export default SidebarAddGroup
