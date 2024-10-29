import { cn } from "@/lib/utils";
type Props = {
  className?: string;
};

// allow classname to be passed as a prop
export const SideBar = ({ className }: Props) => {
  return (
    // use fixed as sidebar doesn't scroll
    <div
      className={cn(
        "flex flex-col lg:w-[16rem] h-full bg-blue-500 lg:fixed left-0 top-0 w-full px-4 border-r-2",
        className
      )}
    >
      Sidebar
    </div>
  );
};
