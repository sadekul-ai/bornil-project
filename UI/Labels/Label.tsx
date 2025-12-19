"use client";

import React from "react";
import { usePalette } from "../hooks/usePalette";

type Tone = "default" | "primary" | "secondary" | "tertiary" | "teal" | "muted" | "danger" | "warning" | "success" | "info";
type LabelType = "text" | "badge";

type LabelProps = {
    text: string;
    htmlFor?: string;
    tone?: Tone;
    isDark?: boolean;
    required?: boolean;
    className?: string;
    type?: LabelType;
};

const mutedLight = "#6B7280"; // slate-500
const mutedDark = "#9CA3AF";  // slate-400

const Label: React.FC<LabelProps> = ({
    text,
    htmlFor,
    tone = "default",
    isDark: isDarkProp,
    required = false,
    className,
    type = "text",
}) => {
    const { palette, mode } = usePalette(isDarkProp ? "dark" : isDarkProp === false ? "light" : undefined);
    const isDark = mode === "dark";

    const getColorByTone = (tone: Tone) => {
        switch (tone) {
            case "primary":
                return palette.primary;
            case "secondary":
                return palette.secondary;
            case "tertiary":
                return palette.tertiary;
            case "teal":
                return palette.teal;
            case "muted":
                return isDark ? mutedDark : mutedLight;
            case "danger":
                return palette.danger;
            case "warning":
                return palette.warning;
            case "success":
                return palette.success;
            case "info":
                return palette.info;
            default:
                return isDark ? palette.white : palette.grayDark;
        }
    };

    const color = getColorByTone(tone);

    // Text label (form label)
    if (type === "text") {
        return (
            <label
                htmlFor={htmlFor}
                className={`${className ?? ""} inline-flex items-center gap-1 text-sm font-medium transition-colors duration-200`}
                style={{ color }}
            >
                <span>{text}</span>
                {required && <span aria-hidden="true" style={{ color: palette.danger }}>*</span>}
            </label>
        );
    }

    // Badge label (for sale, offer, new, etc.)
    return (
        <span
            className={`${className ?? ""} inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 transform hover:scale-105`}
            style={{
                backgroundColor: color,
                color: isDark ? palette.black : palette.white,
            }}
        >
            {text}
        </span>
    );
};

export default Label;
