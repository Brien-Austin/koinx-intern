"use client";

import Image from "next/image";

export default function AppHeader() {
  return (
    <header className="h-[80px] bg-white w-full px-16">
      <div className="flex justify-between items-center h-full">
        <Image
          unoptimized
          src="/koinx.png"
          alt="KoinX logo"
          width={96}
          height={24}
        />
        <nav className="flex items-center gap-8">
          <ul className="flex items-center gap-8 list-none">
            <li className="cursor-pointer hover:text-gray-600">Crypto Taxes</li>
            <li className="cursor-pointer hover:text-gray-600">Free Tools</li>
            <li className="cursor-pointer hover:text-gray-600">Resource Center</li>
          </ul>
          <button className="bg-blue-600 font-medium text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Get Started
          </button>
        </nav>
      </div>
    </header>
  );
}