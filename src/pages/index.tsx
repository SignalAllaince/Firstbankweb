/* eslint-disable @next/next/no-img-element */
import Modal from "@/components/modal";
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
      <div className="">
        <h1 className="text-2xl">FirstBank Shop</h1>
        <button
          onClick={() => setOpen(true)}
          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
        >
          Open modal
        </button>
        <Modal
          isOpen={isOpen}
          closeModal={setClose}
          title="Payment successful"
        ></Modal>
      </div>
    </main>
  );
}
