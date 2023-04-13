import CustomSwitch from "@/components/switch";
import { Inter } from "next/font/google";
import { useToasts } from "react-toast-notifications";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { addToast } = useToasts();
  return (
    <main className={`${inter.className} flex  flex-col items-center`}>
      <div className="space-y-4">
        <h1 className="text-2xl">FirstBank Shop</h1>
        <button className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-2 font-sans text-sm font-medium text-white shadow-sm hover:bg-indigo-700">
          Open modal
        </button>
        <button
          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-2 font-sans text-sm font-medium text-white shadow-sm hover:bg-indigo-700"
          onClick={() =>
            addToast(
              <div className="space-y-0 py-1">
                <h1 className="text-md font-mono font-bold">John</h1>
                <p className="text-[13px]">Goes to school</p>
              </div>,
              {
                appearance: "error",
              }
            )
          }
        >
          Add Toast
        </button>
        <CustomSwitch />
      </div>
    </main>
  );
}
