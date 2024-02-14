import { Route } from "@/constants";
import Link from "next/link";
import React from "react";

interface NavbarLinkProps {
  href: Route;
  icon: React.ReactNode;
  children: React.ReactNode;
  pathname: string;
}

/**
 * Navbar link component
 * 
 * @param href     The router link href
 * @param icon     The icon to display
 * @param children React children
 * @param pathname The current url pathname
 * @returns 
 */
const NavbarLink = ({href, icon, children, pathname}: NavbarLinkProps) => {

  return (
    <Link href={href} className={`grid place-items-center w-full py-4 ${pathname === href ? 'bg-primary' : ''}`}>
      {icon}
      <div className="uppercase hidden sm:block text-xs mt-2">{children}</div>
    </Link>
  );
};

export default NavbarLink;
