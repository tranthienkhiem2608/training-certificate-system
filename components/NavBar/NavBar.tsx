"use client";
import React, { useState, useEffect, useRef } from "react";
import AdminDropdown from "../Dropdown/Dropdown";
import NavItem from "../NavItem/NavItem";

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <header className="flex justify-between items-center px-5 w-full bg-white border-b border-zinc-300 z-10 whitespace-nowrap md:px-20">
      <img
        loading="lazy"
        src="/images/logo.svg"
        alt="Company Logo"
        className="w-[74px] aspect-[2.65] object-contain"
      />
      <nav className="flex flex-wrap items-center gap-1 flex-1 ml-10 text-blue-800">
        <NavItem
          label="Certificates"
          iconSrc="/icons/certificate.svg"
          section="certificates"
          isActive={activeSection === 'certificates'}
          onClick={handleSectionClick}
        />
        <NavItem
          label="Organizations & Courses"
          iconSrc="/icons/organizations.svg"
          section="organizations"
          isActive={activeSection === 'organizations'}
          onClick={handleSectionClick}
        />
      </nav>
      <div className="flex items-center gap-2 relative" ref={dropdownRef}>
        <img
          loading="lazy"
          src="/images/avatar.svg"
          alt="Avatar"
          className="w-6 aspect-square object-contain"
        />
        <div className="relative flex items-center gap-2">
          <div
            onClick={handleDropdownToggle}
            className="text-blue-800 w-24 h-6 cursor-pointer"
          >
            Admin_name
          </div>
          {isDropdownOpen && (
            <div className="absolute top-full right-0 mt-2 bg-white border border-zinc-300 rounded shadow-lg">
              <AdminDropdown />
            </div>
          )}
          <img
            loading="lazy"
            src="/icons/vector.svg"
            alt="Dropdown arrow"
            className={`w-[11px] h-[6px] aspect-square object-contain cursor-pointer transition-transform duration-300 ${
              isDropdownOpen ? "rotate-180" : "rotate-0"
            }`}
            onClick={handleDropdownToggle}
          />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
