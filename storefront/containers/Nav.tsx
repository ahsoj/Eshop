import Image from "next/image";
import { PiUserBold } from "react-icons/pi";
import { TfiSearch } from "react-icons/tfi";
import { MdOutlineKeyboardArrowDown, MdShoppingCart } from "react-icons/md";

import React from "react";
import { IconButton } from "@/components/IconButton";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <nav className="border-b border-slate-200 px-4 py-2 dark:border-slate-800">
      <div className="mx-auto flex max-w-[80rem] items-center justify-between gap-x-10">
        <div className="flex flex-grow items-center">
          <div className="items-center p-2">
            <Image
              src="/logo_light.png"
              alt=".Sale - Logo"
              priority
              width={120}
              height={120}
              className="flex object-contain object-center dark:hidden"
            />
            <Image
              src="/logo_dark.png"
              alt=".Sale - Logo"
              priority
              width={120}
              height={120}
              className="hidden object-contain object-center dark:flex"
            />
          </div>
          <form className="group relative flex overflow-hidden rounded-full border-[0.5px] border-brand bg-slate-100 transition-all sm:flex-1 sm:rounded-md dark:bg-gray-800">
            <input
              className="hidden w-full appearance-none border-0 bg-slate-50 bg-transparent py-2 pl-2 text-sm leading-6 text-slate-900 placeholder-slate-500 shadow-sm outline-none focus:placeholder-slate-700 sm:flex dark:bg-gray-700 dark:text-white dark:placeholder-slate-400 focus:dark:bg-gray-800"
              type="text"
              aria-label="Find Products you want..."
              placeholder="Find Products you want..."
            />
            <IconButton
              icon={<TfiSearch fontSize={25} />}
              className="rounded-none bg-brand text-white sm:px-4"
            />
          </form>
        </div>
        <div className="flex items-center gap-x-2">
          <IconButton
            className="text-slate-700 dark:text-slate-200"
            outlined
            circle
            icon={<PiUserBold fontSize={20} />}
          />
          <IconButton
            className="text-slate-700 dark:text-slate-200"
            outlined
            circle
            icon={<MdShoppingCart fontSize={20} />}
          />
          <IconButton
            className="text-slate-700 dark:text-slate-200"
            outlined
            circle
            icon={<MdOutlineKeyboardArrowDown fontSize={20} />}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
