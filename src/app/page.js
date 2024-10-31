import CookieConsent from "@/components/CookieConsent";
import If from "@/components/If";
import Image from "next/image";

export default function Home() {
  const showPopup = true;
  return (
    <div>
      <If condition={showPopup}>
        <CookieConsent></CookieConsent>
      </If>
    </div>
  );
}
