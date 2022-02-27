import React from "react";

export default function ThemeToggle() {

  let dropdown: Element | null;

  const switchTheme = (e: Event) => {
    // @ts-ignore
    if (e.target.checked) {
      document.documentElement.classList.add("dark");
      dropdown?.classList.add("dark-mode")
    }
    else {
      document.documentElement.classList.remove("dark")
      dropdown?.classList.remove("dark-mode")
    }    
  }
  
  React.useEffect(() => {
    const toggleCheckbox = document.getElementById("theme-checkbox");
    dropdown = document.querySelector(".dropdown-content");
    toggleCheckbox?.addEventListener('change', switchTheme, false);
  }, []);

  return (
    <div className="toggle-container flex flex-col items-center">
    <p className="text-xs mb-0">Dark mode</p>
    <label className="switch" htmlFor="theme-checkbox">
      <input type="checkbox" id="theme-checkbox" />
      <div className="slider round"></div>
    </label>
  </div>
  )
}