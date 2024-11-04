"use client";

import Button from "./Button";
import { LiaCookieBiteSolid } from "react-icons/lia";
import { MdClose } from "react-icons/md";
import { useState } from "react";

const CookieConsent = () => {
  const [isCookieClosed, setisCookieClosed] = useState(false);
  const [isCookieAccepted, setisCookieAccepted] = useState(false);
  return (
    !isCookieClosed &&
    !isCookieAccepted && (
      <article className="flex flex-col max-w-64 bg-black dark:bg-white px-7 py-6 rounded-2xl m-5">
        <header className="flex justify-between	items-start">
          <LiaCookieBiteSolid className="text-white dark:text-black size-16" />
          <button onClick={() => setisCookieClosed(!isCookieClosed)}>
            <MdClose className="text-white dark:text-black" />
          </button>
        </header>
        <p className=" text-white dark:text-black text-xl font-medium mt-14">We use cookies to improve your user experience.</p>
        <Button text="I love cookies" isCookieAccepted={isCookieAccepted} setisCookieAccepted={setisCookieAccepted}></Button>
      </article>
    )
  );
};

export default CookieConsent;
