import React, { ReactNode } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
const SheetTemplate = ({
  trigger,
  contentClassName = "",
  headerClassName = "",
  title,
  children,
}: {
  trigger: ReactNode;
  contentClassName?: string;
  headerClassName?: string;
  title: string;
  children: ReactNode;
}) => {
  return (
    <Sheet>
      <SheetTrigger>{trigger}</SheetTrigger>
      <SheetContent className={contentClassName}>
        <SheetHeader className={headerClassName}>
          <SheetTitle className="text-white text-[25px]">{title}</SheetTitle>
          {children}
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default SheetTemplate;
