import Button from "./Button";
import { LiaCookieBiteSolid } from "react-icons/lia";
import { MdClose } from "react-icons/md";

const CookieConsent = () => {
  return (
    <article className="flex flex-col w-64 bg-black dark:bg-white px-7 py-6 rounded-2xl m-5">
      <div className="flex justify-between	">
        <LiaCookieBiteSolid className="text-white dark:text-black size-16" />
        <MdClose className="text-white dark:text-black" />
      </div>
      <p className=" text-white dark:text-black text-xl font-medium mt-14">We use cookies to improve your user experience.</p>
      <Button text="I love Cookies"></Button>
    </article>
  );
};

export default CookieConsent;
