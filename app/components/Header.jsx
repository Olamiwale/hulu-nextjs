import React from "react";
import Image from "next/image";
import HeaderIcons from "./HeaderIcons";
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import {
  HiOutlineLightningBolt,
  HiOutlineCollection,
  HiOutlineBadgeCheck,
} from "react-icons/hi";
import { CiUser } from "react-icons/ci";
export default function Header({ title, Icon }) {
  return (
    <header className="pt-8 flex flex-col justify-evenly items-center md:flex-row">
      <div className="text-white flex">
        <HeaderIcons title="Home" Icon={<AiOutlineHome size={50} />} />
        <HeaderIcons title="Search" Icon={<AiOutlineSearch size={50} />} />
        <HeaderIcons
          title="Trending"
          Icon={<HiOutlineLightningBolt size={50} />}
        />
        <HeaderIcons
          title="Collection"
          Icon={<HiOutlineCollection size={50} />}
        />
        <HeaderIcons
          title="Verified"
          Icon={<HiOutlineBadgeCheck size={50} />}
        />
        <HeaderIcons title="Account" Icon={<CiUser size={50} />} />
      </div>
      <div>
        <Image src="/Hulu_logo.png" alt="logo" width={150} height={40} />
      </div>
    </header>
  );
}
