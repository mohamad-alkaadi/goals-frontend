import { Dispatch, SetStateAction } from "react";
import { FaCheck } from "react-icons/fa6";

const GoalCheck = ({
  completedGoal,
  setCompletedGoal,
}: {
  completedGoal: boolean;
  setCompletedGoal: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="w-[18px] h-[18px] border-[2px] rounded-full border-[#cbcbcb] flex justify-center items-center text group mt-[2px]">
      <FaCheck
        onClick={(event: React.MouseEvent) => {
          event.stopPropagation();
          alert("check clicked");
        }}
        className={`text-[10px] text-[#cbcbcb] hidden group-hover:block ${
          completedGoal && "block"
        }`}
      />
    </div>
  );
};

export default GoalCheck;
