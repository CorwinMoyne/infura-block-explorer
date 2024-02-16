"use client";

import { Route } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaPowerOff } from "react-icons/fa";
import { IoIosSpeedometer, IoMdFolder, IoMdSettings } from "react-icons/io";
import { NavbarLink } from "./NavbarLink";


/**
 * The sidebar navigation
 *
 * @returns JSX.Element
 */
const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav
      className="bg-primary-light min-h-screen w-12 text-white flex flex-col justify-between items-center sm:w-24"
      aria-label="Main"
    >
      <div className="w-full">
        <div className="border-b-[1px] border-primary w-full pb-4 pt-5 flex justify-center items-center">
          <Link
            href={Route.Dashboard}
            className="w-[34px] h-[34px] sm:w-[48px] sm:h-[48px]"
          >
            <Image
              src="/logo.jpg"
              alt="Infura Block Explorer"
              style={{ objectFit: "cover" }}
              width={48}
              height={48}
              priority
              data-testid="nav-logo"
            />
          </Link>
        </div>

        <NavbarLink
          href={Route.Dashboard}
          icon={<IoIosSpeedometer className="w-8 h-8" />}
          pathname={pathname}
        >
          dashboard
        </NavbarLink>

        <NavbarLink
          href={Route.Projects}
          icon={<IoMdFolder className="w-8 h-8" />}
          pathname={pathname}
        >
          projects
        </NavbarLink>

        <NavbarLink
          href={Route.Explorer}
          icon={<BsFillGrid3X3GapFill className="w-7 h-7" />}
          pathname={pathname}
        >
          explorer
        </NavbarLink>
      </div>

      <div className="w-full">
        <NavbarLink
          href={Route.Settings}
          icon={<IoMdSettings className="w-8 h-8" />}
          pathname={pathname}
        >
          settings
        </NavbarLink>

        <NavbarLink
          icon={<FaPowerOff className="w-7 h-7" />}
          pathname={pathname}
          testId="power-btn"
        >
          logout
        </NavbarLink>
      </div>
    </nav>
  );
};

export default Navbar;
