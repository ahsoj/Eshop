import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const AdminHeader = (props: Props) => {
  return (
    <div className="flex w-full flex-grow justify-center border-b border-slate-100 py-2 dark:border-slate-800">
      <Link href="/admin/next" className="flex items-end p-2">
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
        />{" "}
        <span className="pl-1 text-3xl font-black text-black dark:text-white">
          | <b>Admin</b>
        </span>
      </Link>
    </div>
  );
};

export default AdminHeader;
