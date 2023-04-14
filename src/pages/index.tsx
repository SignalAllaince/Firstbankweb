import Heading from "@/components/heading";
import CustomSwitch from "@/components/switch";
import useNotification from "@/hooks/use-notification";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { toast } = useNotification();

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
            toast({
              appearance: "success",
              // title: "John",
              description:
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sitenim iste, optio qui consequuntur omnis quod possimus",
            })
          }
        >
          Add Toast
        </button>
        <Heading as="h3">John</Heading>
        blanditiis dolore veniam similique nostrum praesentium, nam corrupti
        ipsam aliquam!
        <CustomSwitch />
      </div>
    </main>
  );
}
