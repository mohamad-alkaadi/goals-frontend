"use client";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { createGoal, GoalsType } from "@/api/goals";
import { v4 as uuidv4 } from "uuid";
import AddGoalAddDueDate from "./AddGoalAddDueDate";
import AddGoalAddPeople from "./AddGoalAddPeople";

const AddGoal = ({
  setGoalsState,
}: {
  setGoalsState: Dispatch<SetStateAction<GoalsType[]>>;
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (
    e?: React.FormEvent | React.MouseEvent,
    options?: { allowPageReload?: boolean }
  ) => {
    // Prevent default so we can control when the page actually reloads
    e?.preventDefault();

    // If the input isn't focused, focus it and don't submit yet
    if (inputRef.current != document.activeElement) {
      inputRef.current?.focus();
      return;
    }

    const title = inputValue.trim();
    if (!title) {
      // don't submit empty values; keep focus on input
      inputRef.current?.focus();
      return;
    }

    // create the goal then optionally allow the page to reload
    await createGoal(title);
    setInputValue("");
    inputRef.current?.blur();
    setIsFocused(false);

    if (options?.allowPageReload) {
      // programmatically submit the native form to trigger a reload
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
        {/* Clicks on + will create goal then reload if input is focused and non-empty */}
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
        <AddGoalAddDueDate />
        <AddGoalAddPeople />
      </div>
    </form>
  );
};

export default AddGoal;

// const newGoal = {
//   title: inputValue,
//   description: "",
//   date: new Date(),
//   dueDateActive: false,
//   dueDate: new Date(),
//   overDue: false,
//   completed: false,
//   completedAt: new Date(),
//   favorite: false,
//   shared: false,
//   sharedWith: [],
//   groupName: "ungrouped",
//   groupId: "ungrouped",
//   userId: "",
//   _id: uuidv4(),
// };
// setGoalsState((prev) => [...prev, newGoal]);
// setInputValue("");
