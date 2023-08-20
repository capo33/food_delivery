"use client";

import { links } from "@/links/links";
import CartPage from "@/app/cart/page";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  // teporary user
  const user = false;
  return (
    <div>
      {!isOpen ? (
        <Image
          src='/open.png'
          alt='open logo'
          width={20}
          height={20}
          onClick={() => setIsOpen(true)}
        />
      ) : (
        <Image
          src='/close.png'
          alt='close logo'
          width={20}
          height={20}
          onClick={() => setIsOpen(false)}
        />
      )}
      {isOpen && (
        <div className='bg-red-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10'>
          {links.map((link) => (
            <Link
              href={link.url}
              key={link.id}
              onClick={() => setIsOpen(false)}
            >
              {link.title}
            </Link>
          ))}
          {!user ? (
            <Link href='/login' onClick={() => setIsOpen(false)}>
              Login
            </Link>
          ) : (
            <Link href='/orders' onClick={() => setIsOpen(false)}>
              Orders
            </Link>
          )}
          <Link href='/cart' onClick={() => setIsOpen(false)}>
            <CartPage />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
