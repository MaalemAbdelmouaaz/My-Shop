"use client";

import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
const AutoplaySlider = withAutoplay(AwesomeSlider);
 
// Removed product strip inside ad slides to keep images single and centered
import { SimpleProduct } from "@/lib/types";

interface AdSwiperProps {
  products?: SimpleProduct[];
  imageUrls?: string[];
}

export default function AdSwiper({
  products,
  imageUrls = [
    "/assets/images/ads/new-ads/Image-1.jpeg",
    "/assets/images/ads/new-ads/Image-2.jpeg",
    "/assets/images/ads/new-ads/Image-3.jpeg",
    "/assets/images/ads/new-ads/Image-4.jpeg",
    "/assets/images/ads/new-ads/Image-5.jpeg",
    "/assets/images/ads/new-ads/Image-6.jpeg",
    "/assets/images/ads/new-ads/Image-7.jpeg",
    "/assets/images/ads/new-ads/Image-8.jpeg",
    "/assets/images/ads/new-ads/Image-9.jpeg",
    "/assets/images/ads/new-ads/Image-10.jpeg",
  ],
}: AdSwiperProps) {
  return (
    <div className="w-full h-full flex-1">
      <AutoplaySlider
        className="h-[500px]"
        bullets={false}
        play={true}
        cancelOnInteraction={false}
        interval={3500}
      >
        {imageUrls.map((imageUrl, index) => (
          <div key={index} className="!h-full !w-full overflow-hidden" style={{ width: "100%", height: "100%" }}>
            <img src={imageUrl} alt="ad" className="w-full h-full object-cover" />
          </div>
        ))}
      </AutoplaySlider>
    </div>
  );
}


