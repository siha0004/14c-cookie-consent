import CookieConsent from "@/components/CookieConsent";
import If from "@/components/If";
import Image from "next/image";

export default function Home() {
  const isPopupTrue = true;
  return (
    <div>
      <If condition={isPopupTrue}>
        <CookieConsent></CookieConsent>
      </If>
    </div>
  );
}
