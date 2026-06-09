"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/services", label: "事業内容" },
    { href: "/works", label: "施工実績" },
    { href: "/company", label: "会社情報" },
    { href: "/recruitment", label: "採用情報" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="relative z-9999 mx-auto w-full max-w-490 bg-[#FDC056] px-4 py-3 md:px-6">
            <div className="flex items-center justify-between">
                <Link href="/" className="block h-10 w-48 overflow-hidden md:w-60 lg:w-73">
                    <Image
                        src="/Assets/Rectangle 20.png"
                        alt="Logo"
                        width={492}
                        height={120}
                        className="relative -top-5 h-auto w-full rounded-b-7.5 md:-top-7"
                    />
                </Link>

                <div className="hidden items-center justify-center space-x-5 rounded-full border border-white/60 bg-white/10 px-6 py-3 backdrop-blur-sm lg:flex xl:space-x-10 xl:px-10 xl:py-4">
                    {navLinks.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="noto-jp text-sm font-semibold text-[#0F172A] transition-opacity hover:opacity-80 xl:text-base"
                        >
                            {item.label}
                        </Link>
                    ))}

                    <Link
                        href="/contact"
                        className="noto-jp rounded-4xl bg-[#0F172A] px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-80 xl:text-base"
                    >
                        お問い合わせ
                    </Link>
                </div>

                <button
                    type="button"
                    onClick={() => setOpen((prev) => !prev)}
                    className="relative z-100 flex h-11 w-11 items-center justify-center rounded-full bg-[#0F172A] text-white lg:hidden"
                >
                    {open ? "✕" : "☰"}
                </button>
            </div>

            {open && (
                <div className="absolute left-4 right-4 top-full z-999 mt-3 rounded-3xl bg-white p-5 shadow-xl lg:hidden">
                    <div className="flex flex-col gap-4">
                        {navLinks.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className="noto-jp font-semibold text-[#0F172A]"
                            >
                                {item.label}
                            </Link>
                        ))}

                        <Link
                            href="/contact"
                            onClick={() => setOpen(false)}
                            className="noto-jp rounded-full max-w-35 bg-[#0F172A] px-5 py-3 text-center font-semibold text-white"
                        >
                            お問い合わせ
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}