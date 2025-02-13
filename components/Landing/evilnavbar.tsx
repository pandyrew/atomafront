"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

// Types
type ActiveDropdown = "products" | "about" | null;

interface NavDropdownProps {
  id: string;
  title: string;
  items: string[];
  onHover: (hovering: boolean) => void;
  isDark: boolean;
  isActive: boolean;
  isMenuHovered?: boolean;
}

// Add proper typing for the NavMenu component
interface NavMenuProps {
  children:
    | React.ReactElement<NavDropdownProps>
    | React.ReactElement<NavDropdownProps>[];
}

const NavMenu = ({ children }: NavMenuProps) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="hidden md:flex items-center space-x-6 font-satoshi mr-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement<NavDropdownProps>(child)) {
          return React.cloneElement(child, {
            ...child.props,
            isMenuHovered: isHovered,
          });
        }
        return child;
      })}
    </div>
  );
};

// NavDropdown Component
const NavDropdown = ({
  title,
  items,
  onHover,
  isDark,
  isMenuHovered,
}: NavDropdownProps) => {
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const [buttonPosition, setButtonPosition] = React.useState({
    left: 0,
    width: 0,
  });
  const [isHovered, setIsHovered] = React.useState(false);

  React.useEffect(() => {
    const updatePosition = () => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        setButtonPosition({
          left: rect.left,
          width: rect.width,
        });
      }
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, []);

  React.useEffect(() => {
    onHover(isMenuHovered || false);
  }, [isMenuHovered, onHover]);

  return (
    <div
      className="relative group"
      onMouseEnter={() => {
        setIsHovered(true);
        onHover(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        onHover(false);
      }}
    >
      <div className="h-[20px] overflow-hidden">
        <div
          className="flex flex-col transition-transform duration-500 ease-in-out"
          style={{
            transform: isHovered ? "translateY(-20px)" : "translateY(0)",
          }}
        >
          {/* Original Text */}
          <button
            ref={buttonRef}
            className="flex items-center text-sm  h-[20px]"
          >
            <span
              className={`transition-colors duration-300 ease-in-out ${
                isDark ? "text-white" : "text-gray-200"
              } font-satoshi`}
            >
              {title}
            </span>
            <svg
              className={`w-4 h-4 ml-1 transition-colors duration-300 ease-in-out ${
                isDark ? "stroke-white" : "stroke-white"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {/* Duplicate Text for Animation */}
          <button className="flex items-center text-sm  h-[20px]">
            <span
              className={`transition-colors duration-300 ease-in-out ${
                isDark ? "text-white" : "text-gray-200"
              } font-satoshi`}
            >
              {title}
            </span>
            <svg
              className={`w-4 h-4 ml-1 transition-colors duration-300 ease-in-out ${
                isDark ? "stroke-white" : "stroke-black"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown Menu */}
      <div
        className="fixed top-0 left-0 w-screen border-b border-white/20 transition-opacity duration-300 ease-in-out opacity-0 invisible group-hover:opacity-100 group-hover:visible overflow-hidden"
        style={{
          height: "20vh",
          zIndex: -1,
        }}
      >
        <div className="w-[500px]  h-full relative z-10 ">
          <div
            className="pt-14 absolute"
            style={{
              left: buttonPosition.left,
              width: buttonPosition.width,
            }}
          >
            <div className="grid gap-y-4">
              {items.map((item, index) => (
                <Link
                  key={item}
                  href="#"
                  className="text-sm whitespace-nowrap hover:text-gray-300 text-white font-satoshi transition-all duration-300 ease-in-out transform group-hover:translate-y-0 translate-y-2 opacity-0 group-hover:opacity-100"
                  style={{
                    transitionDelay: `${index * 50}ms`,
                  }}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NavLink = ({
  href,
  title,
  isDark,
}: {
  href: string;
  title: string;
  isDark: boolean;
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="h-[20px] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="flex flex-col transition-transform duration-500 ease-in-out"
        style={{
          transform: isHovered ? "translateY(-20px)" : "translateY(0)",
        }}
      >
        {/* Original Text */}
        <Link href={href} className="flex items-center text-sm h-[20px]">
          <span
            className={`transition-colors duration-300 ease-in-out ${
              isDark ? "text-white" : "text-gray-200"
            } font-satoshi`}
          >
            {title}
          </span>
        </Link>
        {/* Duplicate Text */}
        <Link href={href} className="flex items-center text-sm h-[20px]">
          <span
            className={`transition-colors duration-300 ease-in-out ${
              isDark ? "text-white" : "text-gray-200"
            } font-satoshi`}
          >
            {title}
          </span>
        </Link>
      </div>
    </div>
  );
};

export const EvilNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] =
    React.useState<ActiveDropdown>(null);
  const [isVisible, setIsVisible] = React.useState(true);
  const [isHovering, setIsHovering] = React.useState(false);
  const lastScrollY = React.useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY.current;

      if (Math.abs(scrollDelta) > 10) {
        if (currentScrollY < 100) {
          setIsVisible(true);
        } else {
          setIsVisible(scrollDelta < 0);
        }
        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const shouldShow = isVisible || isHovering;

  return (
    <>
      {/* Hover detection area */}
      <div
        className="fixed top-0 left-0 w-full h-4 z-[98]"
        onMouseEnter={() => setIsHovering(true)}
      />

      {/* Dark overlay when dropdown is open */}
      <div
        className={`fixed inset-0 bg-black transition-all duration-300 ease-in-out z-[98] ${
          isDropdownOpen
            ? "opacity-95 h-[20vh]"
            : "opacity-0 pointer-events-none h-[19vh]"
        }`}
      />

      <motion.nav
        className="fixed top-0 left-0 right-0 w-full z-[99]"
        initial={{ opacity: 0 }}
        animate={{ opacity: shouldShow ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="flex items-center justify-between mx-auto relative">
          {/* Left Block: Logo and Navigation */}
          <div
            className={`flex items-center ${
              isDropdownOpen ? "bg-transparent" : "bg-black/40"
            } backdrop-blur-sm px-6 h-12 rounded-br-3xl border-b border-r ${
              isDropdownOpen ? "border-transparent" : "border-gray-200/20"
            } transition-all duration-300 ease-in-out`}
          >
            {/* Logo */}
            <Link href="/">
              <div className="flex-shrink-0 mr-12 transition-all duration-300 ease-in-out">
                <Image
                  src={
                    isDropdownOpen
                      ? "/images/landing/text_logo_white.svg"
                      : "/images/landing/text_logo_white.svg"
                  }
                  alt="Atoma Media"
                  width={31}
                  height={31}
                  className="h-[31px] w-auto"
                />
              </div>
            </Link>

            {/* Main Navigation */}
            <NavMenu>
              <NavDropdown
                id="products"
                title="Products"
                items={["View All", "AtomaLuna", "Coming Soon"]}
                onHover={(hovering) => {
                  setIsDropdownOpen(hovering);
                  setActiveDropdown(hovering ? "products" : null);
                }}
                isDark={isDropdownOpen}
                isActive={activeDropdown === "products"}
              />
            </NavMenu>
            <div className="flex items-center h-full mr-2 space-x-8">
              <NavLink
                href="#pricing"
                title="Pricing"
                isDark={isDropdownOpen}
              />
              <NavLink href="/about" title="About" isDark={isDropdownOpen} />
            </div>
          </div>

          <div
            className={`${
              isDropdownOpen ? "bg-transparent" : "bg-black/40"
            } backdrop-blur-sm px-6 h-12 rounded-bl-3xl border-b border-l ${
              isDropdownOpen ? "border-transparent" : "border-gray-200/20"
            } transition-all duration-300 ease-in-out`}
          >
            <div className="flex items-center h-full">
              <NavLink
                href="/dashboard"
                title="Dashboard"
                isDark={isDropdownOpen}
              />
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
};
