import React from "react";
import { Link } from "react-router-dom";
import { Popover } from "@headlessui/react";
import clsx from "clsx";

// ✅ Replace with your actual Button & Container components or create simple ones below


interface MobileNavLinkProps {
    href: string;
    children: React.ReactNode;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ href, children }) => {
    return (
        <Popover.Button as={Link} to={href} className="block w-full p-2">
            {children}
        </Popover.Button>
    );
};

const MobileNavIcon: React.FC<{ open: boolean }> = ({ open }) => (
    <svg
        aria-hidden="true"
        className="h-5 w-5 overflow-visible stroke-zinc-400"
        fill="none"
        strokeWidth={2}
        strokeLinecap="round"
    >
        <path
            d="M0 1H14M0 7H14M0 13H14"
            className={clsx("origin-center transition", open && "scale-90 opacity-0")}
        />
        <path
            d="M2 2L12 12M12 2L2 12"
            className={clsx("origin-center transition", !open && "scale-90 opacity-0")}
        />
    </svg>
);

const MobileNavigation: React.FC = () => {
    return (
        <Popover>
            {({ open }) => (
                <>
                    <Popover.Button
                        className="relative z-10 flex h-8 w-8 items-center justify-center focus:outline-none"
                        aria-label="Toggle Navigation"
                    >
                        <MobileNavIcon open={open} />
                    </Popover.Button>

                    {/* Backdrop */}
                    <Popover.Overlay
                        className={clsx(
                            "fixed inset-0 bg-zinc-900/80 transition-opacity duration-150",
                            open ? "opacity-100" : "opacity-0"
                        )}
                    />

                    {/* Mobile menu panel */}
                    <Popover.Panel
                        className={clsx(
                            "absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-zinc-900 p-4 text-lg tracking-tight text-white shadow-xl ring-1 ring-zinc-900/5 transition-all",
                            open
                                ? "opacity-100 scale-100 duration-150 ease-out"
                                : "opacity-0 scale-95 duration-100 ease-in"
                        )}
                    >
                        <MobileNavLink href="#features">Features</MobileNavLink>
                        <MobileNavLink href="#team">Team</MobileNavLink>
                    </Popover.Panel>
                </>
            )}
        </Popover>
    );
};

export const Header: React.FC = () => {
    return (
        <header className="px-20 py-8 bg-black">
            <nav className="relative z-50 flex items-center justify-between">
                {/* 🔹 Left - Logo */}
                <div className="font-logo text-slate-100 text-lg font-semibold">
                    <Link to="/" aria-label="Home">
                        AUDIO REALITIES
                    </Link>
                </div>

                {/* 🔹 Center - Navigation (Desktop only) */}
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex gap-x-8 text-white">
                    {/* <a href="#features" className="hover:text-lime-400 transition-colors">
                        Features
                    </a>
                    <a href="#team" className="hover:text-lime-400 transition-colors">
                        Team
                    </a> */}
                </div>

                {/* 🔹 Right - Login + Mobile Nav */}
                <div className="flex items-center gap-x-4">
                    <a
                        href="/login"
                        className="text-black bg-lime-400 rounded-lg px-5 hover:bg-lime-300 transition"
                    >
                        Login
                    </a>
                    {/* Mobile Menu Button (only on small screens) */}
                    <div className="md:hidden">
                        <MobileNavigation />
                    </div>
                </div>
            </nav>
        </header>

    );
};

// ----------------------------
// 🔹 Simple placeholder components
// (Replace with your real versions)
// ----------------------------

interface ButtonProps {
    href: string;
    color?: "lime" | "default";
    children: React.ReactNode;
}

export const button: React.FC<ButtonProps> = ({ href, color = "default", children }) => (
    <Link
        to={href}
        className={clsx(
            "px-4 py-2 rounded-lg font-medium transition",
            color === "lime"
                ? "bg-lime-400 text-black hover:bg-lime-300"
                : "bg-gray-700 text-white hover:bg-gray-600"
        )}
    >
        {children}
    </Link>
);

export const div: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
);

export const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({
    href,
    children,
}) => (
    <a
        href={href}
        className="text-sm font-medium text-slate-200 hover:text-lime-400 transition"
    >
        {children}
    </a>
);
