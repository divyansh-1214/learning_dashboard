import { Bell, CircleQuestionMark, Search } from "lucide-react";
export default function Nav() {
  return (
    <>
      <nav
        aria-label="Dashboard Navigation"
        className="flex items-center justify-between px-8 py-5"
      >
        {/* Search */}
        <form className="relative w-full max-w-md">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="search"
            placeholder="Search courses..."
            className="w-full rounded-xl border border-white/10 bg-[#1A1A1D] py-3 pl-10 pr-4 outline-none transition focus:border-indigo-500"
          />
        </form>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            aria-label="Notifications"
            className="rounded-xl p-3 hover:bg-white/5 transition"
          >
            <Bell size={20} />
          </button>

          <button
            aria-label="Help"
            className="rounded-xl p-3 hover:bg-white/5 transition"
          >
            <CircleQuestionMark size={20} />
          </button>

          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
        </div>
      </nav>
    </>
  );
}
