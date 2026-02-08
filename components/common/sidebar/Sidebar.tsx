import React from "react"
import { HiOutlineDotsVertical } from "react-icons/hi"
import SidebarUser from "./SidebarUser"
import SideBarSeparator from "./SideBarSeparator"
import SidebarConstantGroupButton from "./SidebarConstantGroupButton"
import SidebarAddedGroupButton from "./SidebarAddedGroupButton"
import SidebarAddGroup from "./SidebarAddGroup"

const Sidebar = () => {
  return (
    <div className="w-[300px] h-screen bg-[#222222] pt-3 flex flex-col justify-between">
      <div className="flex flex-col">
        <SidebarUser />
        <SideBarSeparator />
        <div className="h-[calc(100vh-69px-68px)] overflow-auto">
          <SidebarConstantGroupButton title={""} nOfGoals={2} />
          <SidebarConstantGroupButton title={"overdue"} nOfGoals={4} />
          <SidebarConstantGroupButton title={"completed"} nOfGoals={10} />
          <SidebarConstantGroupButton title={"shared"} nOfGoals={3} />
          <SideBarSeparator />

          {/*<SidebarAddedGroupButton title={"study"} nOfGoals={3} />*/}
        </div>
      </div>
      <SidebarAddGroup />
    </div>
  )
}

export default Sidebar
