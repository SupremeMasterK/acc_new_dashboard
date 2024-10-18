import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#7ca1f7] text-white px-20 py-40 ">
      <div className="flex justify-between items-center mt-[-140px]">
        <div>
          <Link href="/">
            <Image
              src="/images/acc_logo_nav.png"
              alt="logo"
              width={100}
              height={100}
              className="rounded"
            />
          </Link>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:underline">
            Over View
          </a>
          <a href="#" className="hover:underline">
            Scan Items
          </a>
          <a href="#" className="hover:underline">
            Reimbursement
          </a>
          <a href="#" className="hover:underline">
            Invoice_AR
          </a>
          <a href="#" className="hover:underline">
            Invoice_AP
          </a>
          <a href="#" className="hover:underline">
            Reports
          </a>
          <a href="#" className="hover:underline">
            User Settings
          </a>
        </div>
        <UserButton afterSwitchSessionUrl="/" />
      </div>
    </nav>
  );
};

export default Navbar;
