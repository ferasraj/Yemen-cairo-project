import { useState } from "react";
import { assets } from "../assets/assets";
import { twMerge } from "tailwind-merge";

const Banner = () => {
  const [show, setShow] = useState(true);

  if (!show) return null;
  return (
    <div
      className={twMerge(
        // show ? "block" : "hidden", // 👈 هنا الإخفاء بالـ hidden
        "fixed text-sm bottom-5 left-5 bg-black/50 text-white font-bold ",
        "px-2 py-2 rounded-lg shadow-lg z-50  text-center"
      )}
    >
      {/* زر الإغلاق */}
      <button
        onClick={() => setShow(false)}
        className={twMerge(
          "absolute top-1 right-1 text-[#ffba00] hover:text-red-400 hover:cursor-pointer transition",
          "pr-1 text-xs"
        )}
      >
        ✕
      </button>
      <p className="pb-2">عروض العاصمة الإدارية</p>
      <a
        href="https://wa.me/201147799771"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={assets.capital}
          alt="capital"
          className={twMerge(
            "w-34 md:w-48 mb-2 flex items-center",
            "justify-center mx-auto hover:scale-101 transition",
            "opacity-70 hover:opacity-90"
          )}
        />
      </a>
    </div>
  );
};

export default Banner;
