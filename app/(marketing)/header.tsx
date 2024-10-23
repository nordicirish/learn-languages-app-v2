import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  UserButton,
  SignInButton,
  SignedOut,
} from "@clerk/nextjs";
import Image from "next/image";
import { Loader } from "lucide-react";
import {} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
export const Header = () => {
  const signInForceRedirectUrl =
    process.env.NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL;

  return (
    <header className="h-20 w-full border-b-2 border-slate-200 px-4">
      <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full ">
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
        {/* Handle clerk loading status */}
        <ClerkLoading>
          <Loader className="w-5 h-5 animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            {/* afterSignOutUrl="/" set in ClerkProvider layout.tsx */}
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton
              mode="modal"
              forceRedirectUrl={signInForceRedirectUrl}
            >
              <Button size="lg" variant="ghost">
                Log In
              </Button>
            </SignInButton>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </header>
  );
};
