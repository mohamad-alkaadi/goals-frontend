"use client";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { createGoal, GoalsType } from "@/api/goals";
import { v4 as uuidv4 } from "uuid";
import AddGoalAddDueDate from "./AddGoalAddDueDate";
import AddGoalAddPeople from "./AddGoalAddPeople";

const AddGoal = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [dueDate, setDueDate] = useState(Date.now());
  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

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

    await createGoal(title);
    setInputValue("");
    inputRef.current?.blur();
    setIsFocused(false);

    if (options?.allowPageReload) {
      formRef.current?.submit();
    }
  };
  return (
    <form
      ref={formRef}
      onSubmit={(e) => handleSubmit(e, { allowPageReload: true })}
      className={`h-[47px] bg-[#2a2a2a] hover:bg-[#373737] ${
        isFocused ? "bg-[#373737]" : null
      } text-[#bac8d4] mt-2 rounded-sm flex items-center justify-between`}
    >
      <div className="flex justify-center items-center flex-grow">
        <button
          type="button"
          onClick={(e) => handleSubmit(e, { allowPageReload: true })}
        >
          <FaPlus className="mx-3 text-[18px] cursor-pointer" />
        </button>

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
        <AddGoalAddDueDate dueDate={dueDate} setDueDate={setDueDate} />
        <AddGoalAddPeople />
      </div>
    </form>
  );
};

export default AddGoal;
