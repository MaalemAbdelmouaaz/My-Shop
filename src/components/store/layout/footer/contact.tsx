"use client";
import { Headset } from "lucide-react";
import SocialLogo from "social-logos";

export default function Contact() {
  return (
    <div className="flex flex-col gap-y-5">
      <div className="space-y-2">
        <div className="flex items-center gap-x-6">
          <Headset className="scale-[190%] stroke-purple-primary" />
          <div className="flex flex-col">
            <span className="text-muted-foreground text-sm">
              Got Questions ? Call us 24/7!
            </span>
            <span className="text-xl">+213 672 284 495</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <b>Contact Info</b>
        <span className="text-sm">
          Tebessa, Tebessa, 12000, DZ
        </span>
        <div className="flex flex-wap gap-2 mt-4">
          <SocialLogo
            icon="facebook"
            size={28}
            fill="#7C7C7C"
            className="cursor-pointer hover:fill-purple-primary"
          />
          <SocialLogo
            icon="whatsapp"
            size={28}
            fill="#7C7C7C"
            className="cursor-pointer hover:fill-purple-primary"
          />
          <SocialLogo
            icon="pinterest"
            size={28}
            fill="#7C7C7C"
            className="cursor-pointer hover:fill-purple-primary"
          />
          <SocialLogo
            icon="linkedin"
            size={28}
            fill="#7C7C7C"
            className="cursor-pointer hover:fill-purple-primary"
          />
          <SocialLogo
            icon="instagram"
            size={28}
            fill="#7C7C7C"
            className="cursor-pointer hover:fill-purple-primary"
          />
          <SocialLogo
            icon="youtube"
            size={28}
            fill="#7C7C7C"
            className="cursor-pointer hover:fill-purple-primary"
          />
          <SocialLogo
            icon="telegram"
            size={28}
            fill="#7C7C7C"
            className="cursor-pointer hover:fill-purple-primary"
          />
        </div>
      </div>
    </div>
  );
}
