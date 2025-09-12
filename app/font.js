// app/font.js
import localFont from "next/font/local";

export const aeronaut = localFont({
  src: [
    {
      path: "./fonts/poiaeronauttrial-regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-aeronaut",
  display: "swap",
});
