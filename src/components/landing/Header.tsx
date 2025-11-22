import { SignInButton, SignUpButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className="fixed top-0 right-0 z-50 px-6 py-2 w-full border-b border-border/50 bg-background/80 backdrop-blur-md h-16">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="">
          <Link href={"/"} className="flex items-center gap-2">
            <Image
              src={"/logo.png"}
              alt="Logo"
              width={32}
              height={32}
              className="w-11"
            />
            <span className="font-semibold text-lg">Dentwise</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {["How it Works", "Pricing", "About"].map((item) => (
            <a href="#" key={item} className="text-muted-foreground">
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <SignInButton>
            <Button variant={"ghost"} size={"sm"}>
              Login
            </Button>
          </SignInButton>
          <SignUpButton>
            <Button size={"sm"}>Sign Up</Button>
          </SignUpButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
