import React, { useRef } from "react";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiCloseFill } from "react-icons/ri";

function NavBar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef(null);
  const handleCartToggle=()=>{
    setIsCartOpen(true)    //instred of tru !isCartOpen such that when onclickng cart it can open and close also
  }
  const handleCartClose =()=>{
    setIsCartOpen(false);
  }
  return (
    <>
      <nav className="sticky top-0 bg-pink-200 text-gray-900 text-lg font-normal ">
        <div className="">
          <ul className="flex space-x-6 p-3 justify-center">
            <Link href="/hoodies">
              <li className="hover:text-black"> hoodies </li>
            </Link>     
            <Link href="/shirts">
              <li className="hover:text-black"> shirts </li>
            </Link>
            <Link href="/">
              <li className="hover:text-black"> contactus</li>
            </Link>
            <span className=" absolute right-5">
              <AiOutlineShoppingCart
                className=" w-8 h-8 cursor-pointer"
                onClick={handleCartToggle}
              />
            </span>
          {isCartOpen && (
            <div
            ref={cartRef}
            className="cart absolute shadow-xl rounded-md  right-2 top-2 bg-white p-7 "
            >
              <div className="p-4">
            <h2 className="font-semibold  ">CART</h2>
            <span className="absolute right-3 top-4 ">
              <RiCloseFill
              onClick={handleCartClose}
              className="w-8 h-6 bg-pink-100 rounded-full cursor-pointer" />
            </span>
            <ol className="">
              <li>orders</li>
              <li>wishlist</li>
            </ol>
            </div>
          </div>
          )
          }
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
