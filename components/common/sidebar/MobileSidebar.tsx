"use client"
import React, { useState, useEffect } from "react"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { usePathname } from "next/navigation"

export default function MobileSidebar({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Close sidebar on navigation
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <div className="md:hidden absolute top-[24px] left-[16px] z-40">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button className="p-1 text-[#8795a0] hover:bg-[#373737] rounded-sm transition-colors">
            <Menu size={26} />
          </button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-[300px] border-none bg-[#222222]">
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          {children}
        </SheetContent>
      </Sheet>
    </div>
  )
}
