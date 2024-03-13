"use client";

import { useState } from "react";
import AppBarContainer from "../components/appbar";
import Link from "next/link";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { emptyCart } from "../components/Defaults";
import { ProductStore } from "./components/ProductStore";
import { numberOfItems } from "./components/cart/functions";
import { CartDialog } from "./components/cart";

export default function Store(): JSX.Element {
  const [openCart, setOpenCart] = useState(false);
  const [cart, setCart] = useState(emptyCart);
  const [number, setNumber] = useState(numberOfItems(cart));

  return (
    <>
      <AppBarContainer
        openCart={openCart}
        setOpenCart={setOpenCart}
        numberOfItems={number}
      />
      <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-12">
        <div className="mb-12 md:mb-32 text-center lg:max-w-5xl w-full lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
          {!openCart ? (
            <ProductStore
              cart={cart}
              setCart={(c) => {
                setCart(c);
                setNumber(numberOfItems(c));
              }}
              openCart={openCart}
              setOpenCart={setOpenCart}
              numberOfItems={number}
            />
          ) : (
            <CartDialog
              openCart={openCart}
              setOpenCart={setOpenCart}
              cart={cart}
              setCart={(c) => {
                setCart(c);
                setNumber(numberOfItems(c));
              }}
            />
          )}
        </div>
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <a
            href="/"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Home{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Home Page</p>
          </a>
          <a
            href="/store"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Store{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Shop our latest products
            </p>
          </a>

          <a
            href="/store/about"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              About{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
              Learn more about our brand and products
            </p>
          </a>
          <div
            role="presentation"
            onClick={() => setOpenCart(true)}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <Link href="#">
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Cart{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                <Badge badgeContent={number} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </p>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
