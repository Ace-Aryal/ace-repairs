"use client";
import React from "react";
import MaxWidth from "../ui/templates/max-width";
import { Button } from "../ui/button";
import { Users, Sheet, LogOut, LogIn, File } from "lucide-react";
import Link from "next/link";
function Navbar() {
  const isAuthenticated = true;
  return (
    <header className="w-full top-0 border-b border-gray-200 sticky z-40 bg-white/70 backdrop-blur-lg">
      <MaxWidth className="flex w-full  justify-between px-2 sm-px-4 md:px-8 h-14 items-center">
        <div className="text-2xl font-semibold text-primary">
          ace<span className="text-zinc-800">repairs</span>
        </div>
        <nav className="flex gap-2 sm:gap-3 items-center ">
          {isAuthenticated ? (
            <>
              <Link href={"/tickets"}>
                <Button className="" variant={"link"}>
                  {" "}
                  <File className="h-5 w-5" />
                </Button>
              </Link>
              <Link href={"/customers"}>
                <Button variant={"link"}>
                  {" "}
                  <Users className="h-5 w-5" />
                </Button>
              </Link>
              <Button className="cursor-pointer">
                Sign Out <LogOut />
              </Button>
            </>
          ) : (
            <Button className="cursor-pointer">
              Sign In <LogIn />
            </Button>
          )}
        </nav>
      </MaxWidth>
    </header>
  );
}

export default Navbar;
