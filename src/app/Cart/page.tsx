import Image from "next/image";
import Link from "next/link";
import React from "react";

const CartPage = () => {
  return (
    <Link href='/cart' className='flex items-center gap-4'>
      <div className='relative w-8 h-8'>
        <Image src='/cart.png' alt='Cart' fill />
      </div>
      <span>Cart (5)</span>
    </Link>
  );
};

export default CartPage;
