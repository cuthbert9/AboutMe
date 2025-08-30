
"use client";

import { useState } from "react";
import Link from "next/link";
import { IoMdHeart } from "react-icons/io";
import {
    FaAlignJustify,FaBars
} from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(true);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/#about" },
        { name: "Projects", href: "/#projects" },
        { name: "Contact", href: "/#contact" },
    ];

    return (
        <nav className="bg-white shadow-md fixed w-full p-3 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="text-4xl font-bold text-gray-800 font-[cursive] ">
                              Cuthbert.Dev
                        </Link>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-700 text-xl font-bold hover:text-blue-500 transition font-mono"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-700 hover:text-blue-500 focus:outline-none"
                        >
                            {isOpen ? <IoMdCloseCircle size={30} className="text-black-500" />: <FaBars size={24} className="text-black-500" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md">
                    <div className="px-2 pt-2 pb-3 space-y-1 ">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block px-3 py-2 text-gray-700 hover:text-blue-500 font-bold"
                                onClick={() => setIsOpen(false)} // close menu on click
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
