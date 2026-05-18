import { useEffect, useState } from "react";

const STORAGE_KEY = "theme";

function getInitialDark(): boolean {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored !== null) return stored === "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function applyTheme(isDark: boolean) {
  document.documentElement.classList.toggle("dark", isDark);
  document.querySelector(".dropdown-content")?.classList.toggle("dark-mode", isDark);
}

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const isDark = getInitialDark();
    setDark(isDark);
    applyTheme(isDark);
    // enable transitions only after initial theme is applied
    document.documentElement.classList.add("dark-ready");
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
    applyTheme(next);
  }

  return (
    <div className="toggle-container flex flex-col items-center">
      <p className="text-xs mb-0">Dark mode</p>
      <label className="switch" htmlFor="theme-checkbox">
        <input
          type="checkbox"
          id="theme-checkbox"
          checked={dark}
          onChange={toggle}
        />
        <div className="slider round"></div>
      </label>
    </div>
  );
}
