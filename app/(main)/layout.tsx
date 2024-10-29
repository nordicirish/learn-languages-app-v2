import { MobileHeader } from "@/components/mobile-header";
import { SideBar } from "@/components/sidebar";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <>
    <MobileHeader />
      <SideBar className="hidden lg:flex" />
      {/* pl- for sidebar */}
      <main className="lg:pl-[16rem] h-full pt-[3.125rem] lg:pt-0">
        <div className="bg-red-500 h-full">{children}</div>
      </main>
    </>
  );
};

export default MainLayout;
