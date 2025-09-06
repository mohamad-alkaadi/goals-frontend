import { GoalsType } from "@/api/goals";
import { changeGoalCompletion } from "@/api/goalsClient";
import { Dispatch, SetStateAction } from "react";
import { FaCheck } from "react-icons/fa6";

const GoalCheck = ({
  id,
  completedGoal,
  setCompletedGoal,
  setGoalsState,
}: {
  id: string;
  completedGoal: boolean;
  setCompletedGoal: Dispatch<SetStateAction<boolean>>;
  setGoalsState: Dispatch<SetStateAction<GoalsType[]>>;
}) => {
  return (
    <div className="w-[18px] h-[18px] border-[2px] rounded-full border-[#cbcbcb] flex justify-center items-center text group mt-[2px]">
      <FaCheck
        onClick={(event: React.MouseEvent) => {
          event.stopPropagation();
          changeGoalCompletion(id, completedGoal, setCompletedGoal);
          setGoalsState((prev) =>
            prev.map((goal) =>
              goal._id === id ? { ...goal, completed: !completedGoal } : goal
            )
          );
        }}
        className={`text-[10px] text-[#cbcbcb] group-hover:block ${
          completedGoal ? "block" : "hidden"
        }`}
      />
    </div>
  );
};

export default GoalCheck;
