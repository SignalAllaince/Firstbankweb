/* eslint-disable @next/next/no-img-element */
import CustomSwitch from "@/components/switch";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isOpen, setOpen] = useState(true);
  const setClose = () => setOpen(false);
  return (
    <main
      className={`${inter.className} flex min-h-screen flex-col items-center`}
    >
      <div className="space-y-4">
        <h1 className="text-2xl">FirstBank Shop</h1>
        <button
          onClick={() => setOpen(true)}
          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-2 font-sans text-sm font-medium text-white shadow-sm hover:bg-indigo-700"
        >
          Open modal
        </button>
        <CustomSwitch />
      </div>
    </main>
  );
}
