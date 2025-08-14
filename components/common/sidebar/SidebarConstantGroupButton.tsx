import React from "react"

const SidebarConstantGroupButton = ({
  title,
  nOfGoals,
}: {
  title: string
  nOfGoals: number
}) => {
  return (
    <div className="flex justify-between items-center px-4 py-2 text-white hover:bg-[#333333]">
      <div className="capitalize">{title}</div>
      <div className="text-[10px] bg-[#3c3c3c] w-[12px] h-[12px] rounded-full flex justify-center items-center">
        {nOfGoals}
      </div>
    </div>
  )
}

export default SidebarConstantGroupButton
