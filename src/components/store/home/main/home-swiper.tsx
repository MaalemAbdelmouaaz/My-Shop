"use client";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
const AutoplaySlider = withAutoplay(AwesomeSlider);
import Img1 from "@/public/assets/images/swiper/1.jpeg";
import Img2 from "@/public/assets/images/swiper/2.jpeg";
import Img3 from "@/public/assets/images/swiper/3.jpeg";
import Img4 from "@/public/assets/images/swiper/4.jpeg";
import Img5 from "@/public/assets/images/swiper/5.jpeg";
import Img6 from "@/public/assets/images/swiper/6.jpeg";
import Img7 from "@/public/assets/images/swiper/7.jpeg";
import Img8 from "@/public/assets/images/swiper/8.jpeg";
import Image from "next/image";
export default function HomeMainSwiper() {
  return (
    <div className="w-full h-[420px] md:h-[420px]">
      <AutoplaySlider
        className="w-full h-full"
        animation="cubeAnimation"
        bullets={false}
        play={true}
        cancelOnInteraction={false}
        interval={6000}
      >
        {images.map((img) => (
          <div key={img.id} className="relative w-full h-full">
            <Image src={img.url} alt="" fill className="object-cover" priority />
          </div>
        ))}
      </AutoplaySlider>
    </div>
  );
}

const images = [
  {
    id: 1,
    url: Img1,
  },
  {
    id: 2,
    url: Img2,
  },
  {
    id: 3,
    url: Img3,
  },
  {
    id: 4,
    url: Img4,
  },
  {
    id: 5,
    url: Img5,
  },
  {
    id: 6,
    url: Img6,
  },
  {
    id: 7,
    url: Img7,
  },
  {
    id: 8,
    url: Img8,
  },
];
