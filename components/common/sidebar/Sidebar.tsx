import React from "react"
import { HiOutlineDotsVertical } from "react-icons/hi"
import SidebarUser from "./SidebarUser"
import SideBarSeparator from "./SideBarSeparator"
import SidebarConstantGroupButton from "./SidebarConstantGroupButton"
import SidebarAddedGroupButton from "./SidebarAddedGroupButton"
import SidebarAddGroup from "./SidebarAddGroup"
import { getAllGroups, GroupsType } from "@/api/groups"

const Sidebar = async () => {
  const groups = await getAllGroups()
  return (
    <div className="w-[300px] h-screen bg-[#222222] pt-3 flex flex-col justify-between">
      <div className="flex flex-col">
        <SidebarUser />
        <SideBarSeparator />
        <div className="h-[calc(100vh-69px-68px)] overflow-auto">
          <SidebarConstantGroupButton title={""} slug={""} />
          <SidebarConstantGroupButton title={"overdue"} slug={"overdue"} />
          <SidebarConstantGroupButton title={"completed"} slug={"completed"} />
          <SidebarConstantGroupButton title={"shared"} slug={"shared"} />
          <SideBarSeparator />
          {groups.map((item: GroupsType) => (<div key={item._id}><SidebarConstantGroupButton title={item.name} slug={item.slug} /></div>))}
          {/*<SidebarAddedGroupButton title={"study"} nOfGoals={3} />*/}
        </div>
      </div>
      <SidebarAddGroup />
    </div>
  )
}

export default Sidebar
