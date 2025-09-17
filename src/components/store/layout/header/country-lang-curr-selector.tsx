"use client";

// React, Next.js
import { useState } from "react";

// Icons
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { ChevronDown } from "lucide-react";

// Types
import { Country, SelectMenuOption } from "@/lib/types";

// Country selector
import CountrySelector from "@/components/shared/country-selector";

// Language provider
import { useLanguage } from "@/providers/language-provider";

// countries data
import countries from "@/data/countries.json";
import { useRouter } from "next/navigation";

const LANGUAGES = [
  { name: "English", code: "en" },
  { name: "Français", code: "fr" }
];

export default function CountryLanguageCurrencySelector({
  userCountry,
}: {
  userCountry: Country;
}) {
  // Router hook for navigation
  const router = useRouter();

  // Language context
  const { language, setLanguage, t } = useLanguage();

  // State to manage dropdowns visibility
  const [show, setshow] = useState(false);
  const [showLang, setShowLang] = useState(false);
  const [selectedLang, setSelectedLang] = useState(
    LANGUAGES.find(lang => lang.code === language) || LANGUAGES[0]
  );

  const handleCountryClick = async (value: SelectMenuOption) => {
      const data: Country = {
      name: value.name,
      code: value.code,
        city: "",
        region: "",
      };
    
      try {
        const response = await fetch("/api/setUserCountryInCookies", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ userCountry: data }),
        });
      
        if (response.ok) {
        setshow(false);
        window.location.reload();
        }
    } catch (error) {
      console.error("Failed to update country:", error);
    }
  };

  const handleLanguageClick = (language: typeof LANGUAGES[0]) => {
    setSelectedLang(language);
    setShowLang(false);
    setLanguage(language.code);
  };

  return (
    <div className="relative inline-block group">
      {/* Trigger */}
      <div>
        <div className="flex items-center h-11 py-0 px-2 cursor-pointer">
          <span className="mr-0.5 h-[90px] w-[90px] grid place-items-center">
            <span className={`fi fi-${userCountry.code.toLowerCase()} text-4xl`} />
          </span>
          <div className="ml-1">
            <span className="block text-xs text-white leading-3 mt-2">
              {/* {userCountry.name}/ */}{selectedLang.code.toUpperCase()}/
            </span>
            <b className="text-xs font-bold text-white ">
              DZD
              <span className="text-white scale-[60%] align-middle inline-block">
                <ChevronDown />
              </span>
            </b>
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="absolute hidden top-0 group-hover:block cursor-pointer">
        <div className="relative mt-12 -ml-32 w-[300px]  bg-white rounded-[24px] text-main-primary pt-2 px-6 pb-6 z-50 shadow-lg">
          {/* Triangle */}
          <div className="w-0 h-0 absolute -top-1.5 right-24 border-l-[10px] border-l-transparent border-b-[10px] border-white border-r-[10px] border-r-transparent" />
          <div className="mt-4 leading-6 text-[20px] font-bold">{t("common.ship_to")}</div>
          <div className="mt-2">
            <div className="relative text-main-primary bg-white rounded-lg">
              <CountrySelector
                id={"countries"}
                open={show}
                onToggle={() => setshow(!show)}
                onChange={handleCountryClick}
                selectedValue={
                  (countries.find(
                    (option) => option.name === userCountry?.name
                  ) as SelectMenuOption) || countries[0]
                }
              />
              <div>
                <div className="mt-4 leading-6 text-[20px] font-bold">
                  {t("common.language")}
                </div>
                <div 
                  className="relative"
                  onClick={() => setShowLang(!showLang)}
                >
                  <div className="relative mt-2.5 h-10 py-0 px-3 border-[1px] border-black/20 rounded-lg flex items-center cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap">
                    <div className="align-middle">{selectedLang.name}</div>
                  <span className="absolute right-2">
                    <ChevronDown className="text-main-primary scale-75" />
                  </span>
                  </div>
                  {/* Language Dropdown */}
                  {showLang && (
                    <div className="absolute w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                      {LANGUAGES.map((lang) => (
                        <div
                          key={lang.code}
                          className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => handleLanguageClick(lang)}
                        >
                          {lang.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div>
                <div className="mt-4 leading-6 text-[20px] font-bold">
                  {t("common.currency")}
                </div>
                <div className="relative mt-2 h-10 py-0 px-3 border-[1px] border-black/20 rounded-lg  flex items-center cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap">
                  <div className="align-middle">DZD (Algerian Dinar)</div>
                  <span className="absolute right-2">
                    <ChevronDown className="text-main-primary scale-75" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
