import Button from "./Button";
import { LiaCookieBiteSolid } from "react-icons/lia";
import { MdClose } from "react-icons/md";

const CookieCard = () => {
  return (
    <article className="flex flex-col w-64 bg-black px-7 py-6 rounded-2xl m-5">
      <div className="flex justify-between	">
        <LiaCookieBiteSolid className="text-white size-16" />
        <MdClose className="text-white" />
      </div>
      <p className=" text-white text-xl font-medium mt-14">We use cookies to improve your user experience.</p>
      <Button></Button>
    </article>
  );
};

export default CookieCard;
