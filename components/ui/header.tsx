import ThemeToggle from "./theme-toggle";
import Image from "next/image";
import UserImg from "@/public/images/user-image.jpg";

export default function Header() {
  return (
    <header className="text-center pt-6">
      {/* Dark mode toggle */}
      <ThemeToggle />
      {/* Intro */}
      <div className="mb-10">
        <Image
          className="inline-flex rounded-full shadow-lg mb-4 object-cover"
          src={UserImg}
          width={100}
          height={20}
          alt="Mohit Bhatia"
          priority
          style={{ borderRadius: '50%', objectFit: 'cover', width:"100px", height:"100px" }}
        />
        <div className="mb-5">
          <h1 className="font-inter-tight font-bold text-gray-800 dark:text-gray-100 text-2xl mb-1">
            Mohit Bhatia
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            
          </p>
        </div>
        <a
          className="btn-sm text-gray-200 dark:text-gray-800 bg-gradient-to-r from-gray-800 to-gray-700 dark:from-gray-300 dark:to-gray-100 dark:hover:bg-gray-100 shadow relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.2)_50%,transparent_75%,transparent_100%)] dark:before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[1500ms]"
          href="mailto:mbhatia120@gmail.com"
        >
          Frontend engineer based in Bengaluru, KA
        </a>
      </div>
    </header>
  );
}
