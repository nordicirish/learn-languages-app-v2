import { MobileSidebar } from "./mobile-sidebar";

export const MobileHeader = () => {
  return (
    <nav className="lg:hidden flex h-[3.125rem] px-6 items-center bg-green-500 border-b fixed top-0 w-full z-50">
      <MobileSidebar />
    </nav>
  );
};
