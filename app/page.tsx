import Active from "@/component/active";
import Hero from "@/component/hero";
import Nav from "@/component/Nav";
import Sidebar from "@/component/Sidebar";
import { Code, Flame } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0F0F11] text-white grid grid-cols-[256px_1fr]">
      <aside>
        <Sidebar />
      </aside>
      <div className="flex flex-col">
        <header className="sticky top-0 z-10 border-b border-white/10 bg-[#0F0F11]/80 backdrop-blur-md">
          <Nav />
        </header>

        <main className="flex-1 p-8">
          <Hero />

          {/* Dashboard Cards */}
          <Active />
        </main>
      </div>
    </div>
  );
}
