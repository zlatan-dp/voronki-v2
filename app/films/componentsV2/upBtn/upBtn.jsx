"use client";

import styles from './upBtn.module.css'

import classNames from 'classnames';

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
            className={classNames(styles.scrollToTop, {[styles.show]: showButton})}
            onClick={scrollToTop}
        >
        </button>
    );
}