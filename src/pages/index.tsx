import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className} flex  flex-col items-center`}>
      <Navbar />

      <Footer />
    </main>
  );
}
