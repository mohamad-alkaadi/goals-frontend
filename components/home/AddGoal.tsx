"use client"
import { useRef, useState } from "react"
import { FaPlus } from "react-icons/fa6"
import AddGoalAddPeople from "./AddGoalAddPeople"
import AddGoalAddDueDate from "./AddGoalAddDueDate"

const AddGoal = () => {
  const [isFocused, setIsFocused] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <form
      className={`h-[47px] bg-[#2a2a2a] hover:bg-[#373737] ${
        isFocused ? "bg-[#373737]" : null
      } text-[#bac8d4] mt-2 rounded-sm flex items-center justify-between`}
    >
      <div className="flex justify-center items-center flex-grow">
        <FaPlus
          onClick={() => inputRef.current?.focus()}
          className="mx-3 text-[18px] cursor-pointer"
        />
        <input
          ref={inputRef}
          placeholder="Add a task"
          className="w-full outline-0"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div className={`flex text-[18px] ${inputValue == "" ? "hidden" : null}`}>
        <AddGoalAddDueDate />
        <AddGoalAddPeople />
      </div>
    </form>
  )
}

export default AddGoal
