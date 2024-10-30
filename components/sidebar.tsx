import { cn } from "@/lib/utils";
import { SidebarItem } from "@/components/sidebar-item";
import Image from "next/image";
import Link from "next/link";
import { ClerkLoading, ClerkLoaded, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

type Props = {
  className?: string;
};

// allow classname to be passed as a prop
export const SideBar = ({ className }: Props) => {
  return (
    // use fixed as sidebar doesn't scroll
    <div
      className={cn(
        "flex flex-col lg:w-[16rem] h-full lg:fixed left-0 top-0 w-full px-4 border-r-2",
        className
      )}
    >
      <Link href="/learn">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          {/*Logo from https://kenney.nl/assets/brick-pack */}

          <Image
            src="/smiley-brick.svg"
            height={40}
            width={40}
            alt="Mascot Logo"
          />

          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
            Learn Lingos
          </h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem label="Learn" href="/learn" iconSrc="/learn.svg" />
        <SidebarItem
          label="Leaderboard"
          href="/leaderboard"
          iconSrc="/leaderboard.svg"
        />
        <SidebarItem label="Quests" href="/quests" iconSrc="/quests.svg" />
        <SidebarItem label="Shop" href="/shop" iconSrc="/shop.svg" />
      </div>

      <div className="p-4">
        <ClerkLoading>
          <Loader className="w-5 h-5 animate-spin text-muted-foreground" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton />
        </ClerkLoaded>
      </div>
    </div>
  );
};
