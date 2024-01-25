import Image from "next/image";
import { PiUserBold } from "react-icons/pi";
import { TfiSearch } from "react-icons/tfi";
import Link from "next/link";
import { MdOutlineKeyboardArrowDown, MdShoppingCart } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";

import React from "react";
import { IconButton } from "@/components/IconButton";

type Props = {};

const navLinks = [
  {
    link: "Categories",
    child: [
      "Grocery",
      "Home",
      "Furniture",
      "Kitchen & Dining",
      "OutDoor Living & Garden",
      "Electronics",
      "Sports & Outdoors",
      "Movies, Music & Books",
      "Gift Cards",
      "Arts, Crafts & Sewing",
      "Toys",
      "Baby",
      "Beauty",
      "Personal Care",
      "Health",
      "Pets",
      "Party Supplies",
    ],
  },
  {
    link: "Deals",
  },
  {
    link: "New & Featured",
  },
];

const NavBar = (props: Props) => {
  return (
    <nav className="border-b border-slate-200 px-4 py-2 dark:border-slate-800">
      <div className="mx-auto flex max-w-[80rem] items-center justify-between gap-x-10">
        <div className="flex flex-grow items-center">
          <Link href="/" className="items-center p-2">
            <Image
              src="/logo_light.png"
              alt=".Sale - Logo"
              priority
              width={100}
              height={100}
              className="flex object-contain object-center dark:hidden"
            />
            <Image
              src="/logo_dark.png"
              alt=".Sale - Logo"
              priority
              width={100}
              height={100}
              className="hidden object-contain object-center dark:flex"
            />
          </Link>
          <div className="hidden gap-x-4 whitespace-nowrap md:flex">
            {navLinks.map((links, idx) => (
              <span
                className="flex cursor-pointer items-center font-medium text-slate-500 hover:text-brand dark:text-slate-400"
                key={idx}
              >
                <h3>{links.link}</h3>
                {links.child && <RiArrowDownSLine fontSize={20} />}
              </span>
              // <NavDropdown key={idx} links={links.link} />
            ))}
          </div>
        </div>
        <div className="flex items-center gap-x-3">
          <SearchBar />
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
              className="flex text-slate-700 transition-all md:hidden dark:text-slate-200"
              outlined
              circle
              icon={<MdOutlineKeyboardArrowDown fontSize={20} />}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

export const SearchBar = () => {
  return (
    <form className="group relative hidden max-w-sm items-center overflow-hidden rounded-md bg-slate-100 transition-all sm:flex sm:flex-1 dark:bg-gray-800">
      <input
        className="flex w-full appearance-none border-0 bg-slate-50 bg-transparent py-1.5 pl-2 text-sm leading-6 text-slate-900 placeholder-slate-500 shadow-sm outline-none focus:placeholder-slate-600 dark:bg-gray-800 dark:text-white dark:placeholder-slate-400"
        type="text"
        aria-label="Find Products you want..."
        placeholder="What can we help you find?"
      />
      <span className=" h-0.5 w-8 rotate-90 bg-slate-100 dark:bg-slate-700" />
      <IconButton
        icon={<TfiSearch fontSize={20} />}
        className="rounded-none px-4 text-white"
      />
    </form>
  );
};
