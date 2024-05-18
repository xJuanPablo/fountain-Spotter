import React, { useState, useEffect } from "react";
import "react-toggle/style.css";
import Toggle from "react-toggle";
import {useMediaQuery} from "react-responsive";

function ThemeToggle() {
    const systemPrefersDark = useMediaQuery({query: "(prefers-color-scheme: dark)"});
    const [isDark, setIsDark] = useState(systemPrefersDark);

    useEffect(() => {
        setIsDark(systemPrefersDark);
        console.log("System prefers dark mode:", systemPrefersDark);
    }, [systemPrefersDark]);

    const handleToggleChange = ({target}) => {
        console.log("Toggle checked:", target.checked);
        setIsDark(target.checked)
    }

    useEffect(() => {
        document.documentElement.className = isDark ? "dark-mode" : "light-mode";
    }, [isDark])

    return (
        <Toggle
            checked={isDark}
            onChange={handleToggleChange}
            icons={{ checked: "🌙", unchecked: "☀️" }}
            aria-label="Light Dark mode toggle"
    />
    );
}

export default ThemeToggle;
