import React from "react"
import Goal from "./Goal"

const Goals = () => {
  const due = new Date().toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  })
  return (
    <div className="w-full h-[20px] flex-grow overflow-auto pr-1 mt-4 flex flex-col space-y-1">
      <Goal
        goal={"finish 5 videos"}
        groupName={"tasks"}
        favorite={true}
        dueDate={true}
        overdue={true}
        overDueDate={due}
        shared={true}
      />
      <Goal
        goal={"test num 1"}
        groupName={"tests"}
        favorite={false}
        dueDate={false}
        overdue={false}
        overDueDate={due}
        shared={false}
      />
      <Goal
        goal={"test num 1"}
        groupName={"tests"}
        favorite={false}
        dueDate={true}
        overdue={false}
        overDueDate={due}
        shared={false}
      />
    </div>
  )
}

export default Goals
