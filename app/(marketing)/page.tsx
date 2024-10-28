import { Button } from "@/components/ui/button";
import { SignedIn, SignUpButton } from "@clerk/nextjs";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedOut,
  SignInButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

//(marketing) -wrapping  route in parenthesis so that path doesn't show in url
export default function Home() {
  const signInForceRedirectUrl =
    process.env.NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL;
  const signUpForceRedirectUrl =
    process.env.NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL;
  console.log("signInForceRedirectUrl", signInForceRedirectUrl);
  console.log("signUpForceRedirectUrl", signUpForceRedirectUrl);
  return (
    <div className="max-w-[61.75rem] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
      <div className="relative w-[15rem] h-[15rem] lg:w-[26.5rem] lg:h-[26.5rem] mb-8 lg:mb-0">
        <Image src="/hero.svg" alt="hero image" fill></Image>
      </div>
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="text-xl  lg:text-3xl font-bold text-neutral-600 max-w-[15rem] text-center">
          Learn, practice and master new languages with Learn Lingo
        </h1>

        <div className="flex flex-col items-center gap-y-3 max-w-[20.625rem] w-full">
          <ClerkLoading>
            <Loader className="w-5 h-5 text-muted-foreground animate-spin" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <SignUpButton
                mode="modal"
                forceRedirectUrl={signUpForceRedirectUrl}
              >
                <Button size={"lg"} variant={"secondary"} className="w-full">
                  Get Started
                </Button>
              </SignUpButton>
              <SignInButton
                mode="modal"
                forceRedirectUrl={signInForceRedirectUrl}
              >
                <Button
                  size={"lg"}
                  variant={"primaryOutline"}
                  className="w-full"
                >
                  I already have an account
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Button size="lg" variant="secondary" className="w-full" asChild>
                <Link href="/learn">Continue learning</Link>
              </Button>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}
