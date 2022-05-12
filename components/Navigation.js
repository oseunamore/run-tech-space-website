import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Button from "./Button";
import CustomLink from "./CustomLink";

function Navigation() {
  const router = useRouter();
  const [hamClicked, setHamClicked] = useState(false);

  const handleClick = () => {
    setHamClicked(!hamClicked);
  };

  return (
    <nav className='relative border-b-2 border-lightGrey py-3'>
      <div className='container flex items-center justify-between '>
        <Link href='/'>
          <a>
            <img src='/images/logo.svg' alt='RUN Tech Space' />
          </a>
        </Link>

        <ul className='hidden space-x-8 md:flex'>
          <li>
            <Link href='/#stacks'>
              <a
                className={`${
                  router.pathname == "/#stacks" ? "text-[#1253A6]" : ""
                } font-medium`}
              >
                Stacks
              </a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a
                className={`${
                  router.pathname == "/about" ? "text-[#1253A6]" : ""
                } font-medium`}
              >
                About
              </a>
            </Link>
          </li>
          <li>Donate</li>
        </ul>

        <div className='flex items-center space-x-4'>
          <Button
            type='secondary'
            className='hidden items-center gap-2 md:inline-flex'
          >
            <img src='/images/whatsapp.svg' alt='whatsapp' />
            Join us on WhatsApp
          </Button>
          <Button type='link' href='/join_us'>
            Join us
          </Button>
          <button className='my space-y-1 md:hidden' onClick={handleClick}>
            <span
              className={`block h-1 w-7 transform rounded-md bg-[#323232] transition ${
                hamClicked ? "translate-y-1 rotate-45" : ""
              }`}
            ></span>
            <span
              className={`block h-1 w-7 transform rounded-md bg-[#323232] ${
                hamClicked ? "hidden" : "block"
              } `}
            ></span>
            <span
              className={`block h-1 w-7 transform rounded-md bg-[#323232] transition ${
                hamClicked ? "-translate-y-1 -rotate-45" : ""
              } `}
            ></span>
          </button>
        </div>
      </div>
      {/* Navigation for Mobile */}
      <div
        className={`absolute top-[86px] w-full bg-white transition md:hidden ${
          hamClicked ? "block" : "hidden"
        }`}
      >
        <ul className='flex flex-col space-y-8 p-5'>
          <li>
            <Link href='/#stacks'>
              <a>Stacks</a>
            </Link>
          </li>
          <li>
            {/* <CustomLink to='/about'>About</CustomLink> */}
            <Link href='/about'>
              <a>About</a>
            </Link>
          </li>
          <li>Donate</li>
          <li>
            <Button type='secondary' className='inline-flex items-center gap-2'>
              <img src='/images/whatsapp.svg' alt='whatsapp' />
              Join us on WhatsApp
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
