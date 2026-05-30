import {
  GraduationCap,
  LayoutDashboard,
  ChartBarIncreasing,
  Settings,
  User,
} from "lucide-react";

export default function Sidebar() {
  const links = [
    { name: "Dashboard", href: "#", icon: <LayoutDashboard size={18} /> },
    { name: "Courses", href: "#", icon: <GraduationCap size={18} /> },
    { name: "Analytics", href: "#", icon: <ChartBarIncreasing size={18} /> },
    { name: "Settings", href: "#", icon: <Settings size={18} /> },
    { name: "Profile", href: "#", icon: <User size={18} /> },
  ];

  return (
    <aside className="w-64 min-h-screen bg-[#201F1F] p-8" aria-label="Sidebar">
      <header className="flex items-center gap-3 mb-8">
        <GraduationCap size={28} />

        <h1 className="text-lg font-bold leading-tight">
          Next - <span className="text-[#ADC6FF]">Gen</span>
          <br />
          Learning
        </h1>
      </header>

      <nav aria-label="Main Navigation">
        <ul className="space-y-2">
          {links.map((link) => {
            const active = link.name === "Dashboard";

            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                    active
                      ? "bg-indigo-600/20 text-indigo-200 ring-1 ring-indigo-600"
                      : "text-gray-300 hover:bg-gray-800/60"
                  }`}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
