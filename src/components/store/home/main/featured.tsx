"use client";
import Link from "next/link";
import MainSwiper from "../../shared/swiper";
import { SimpleProduct } from "@/lib/types";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function Featured({ products }: { products: SimpleProduct[] }) {
  const is1170px = useMediaQuery({ query: "(min-width: 1170px)" });
  const is1700px = useMediaQuery({ query: "(min-width: 1700px)" });

  // State to store the current width of the screen
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    // Function to handle resize event and update screen width
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Add the resize event listener when the component mounts
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative rounded-md overflow-hidden">
      <div
        className="w-full h-[400px] flex items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/assets/images/ads/featured.jpeg)" }}
      >
        {/* Coupon */}
      
        {/* Product swiper */}
        <div
          className={is1700px ? "ml-10" : ""}
          style={{
            width: !is1170px
              ? `${screenWidth - 300}px` // Less than 1170px
              : is1700px
              ? "750px" // More than 1700px
              : `calc(500px + 5vw)`, // Between 1170-1700px
          }}
        >
          {/*
            
            1170-1700===>
            */}
          <MainSwiper
            products={products}
            type="simple"
            slidesPerView={1}
            spaceBetween={-10}
          />
        </div>
      </div>
    </div>
  );
}
