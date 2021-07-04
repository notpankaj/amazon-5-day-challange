import React from "react";
import Image from "next/image";
import Header from "../components/Header";
import CheckoutProduct from "../components/CheckoutProduct";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import { selectTotal } from "../slices/basketSlice";

import Currency from 'react-currency-formatter';
import { session } from "next-auth/client";

function checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  console.log(total,'❤❤❤😒');
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* left */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />

          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0
                ? "Your Amazon Basket is Empty"
                : "Shopping Basket"}
            </h1>

                {items.map((items,i)=>(
                    <CheckoutProduct 
                    key={i}
                    id={items.id}
                    title={items.title}
                    image={items.image}
                    rating={items.rating}
                    price={items.price}
                    description={items.description}
                    category={items.category}
                    hasPrime={items.hasPrime}
                    />
                ))}
                
          </div>
        </div>
        {/* right */}
        <div className="flex flex-col bg-white p-10 shadow-md">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">Sub total ({items.length}) items</h2>
              <span className="font-bold">
                <Currency quantity={total} currency="GBP" />
              </span>
              <button className={`button mt-2 ${!session && "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"}`}>
                {!session ? 'Sign In To Checkout': 'Proceed to checkout'}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default checkout;
