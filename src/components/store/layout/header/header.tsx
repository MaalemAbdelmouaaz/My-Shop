import Link from "next/link";
import Image from "next/image";
import UserMenu from "./user-menu/user-menu";
import Cart from "./cart";
import DownloadApp from "./download-app";
import Search from "./search/search";
import { cookies } from "next/headers";
import { Country } from "@/lib/types";
import CountryLanguageCurrencySelector from "./country-lang-curr-selector";

export default function Header() {
  // Get cookies from the store
  const cookieStore = cookies();
  const userCountryCookie = cookieStore.get("userCountry");

  // Set default country if cookie is missing
  let userCountry: Country = {
    name: "Algeria",
    city: "",
    code: "DZ",
    region: "",
  };

  // If cookie exists, update the user country
  if (userCountryCookie) {
    userCountry = JSON.parse(userCountryCookie.value) as Country;
  }

  return (
    <div className="bg-gradient-to-r from-purple-primary to-purple-secondary">
      <div className="h-full w-full lg:flex text-white px-4 lg:px-12">
        <div className="flex lg:w-full lg:flex-1 flex-col lg:flex-row gap-3 py-3">
          <div className="flex items-center justify-between">
            {/* Background logo - disabled for now */}
            {/* <span 
              className="absolute -left-16 top-1/2 transform -translate-y-1/3 bg-contain bg-no-repeat bg-center opacity-30 z-0 filter brightness-50 w-48 h-48"
              style={{
                backgroundImage: "url('/assets/icons/logo-1.png')",
                backgroundSize: 'contain',
                backgroundPosition: 'center',
              }}
            ></span> */}
            <Link href="/" className="flex items-center gap-x-2">
              <Image 
                src="/assets/icons/cube_only.png" 
                alt="VEE MALL Logo" 
                width={56} 
                height={56}
                className="w-14 h-14 object-contain"
              />
              <h1 className="font-extrabold text-3xl font-mono">
                VEE MALL
              </h1>
            </Link>
            <div className="flex lg:hidden">
              <UserMenu />
              <Cart />
            </div>
          </div>
          <Search />
        </div>
        <div className="hidden lg:flex w-full lg:w-fit lg:mt-2 justify-end mt-1.5 pl-6">
          <div className="lg:flex">
            <DownloadApp />
          </div>
          <CountryLanguageCurrencySelector userCountry={userCountry} />
          <UserMenu />
          <Cart />
        </div>
      </div>
    </div>
  );
}
