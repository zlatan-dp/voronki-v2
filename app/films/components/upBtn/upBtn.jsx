"use client";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={scrollToTop}
            style={{
                position: "fixed",
                zIndex: "101",
                right: "max(calc((100vw - 400px) / 2 + 10px), 20px)",
                bottom: "20px",
                width: "36px",
                height: "36px",
                backgroundImage: "url('/images/scroll-up.svg')",
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
                opacity: showButton ? 1 : 0,
                transform: showButton ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.3s ease, transform 0.3s ease",
                pointerEvents: showButton ? "auto" : "none",
            }}
        >
        </button>
    );
}