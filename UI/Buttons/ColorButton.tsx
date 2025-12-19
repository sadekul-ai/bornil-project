"use client";

import { ReactNode, useMemo, useState } from "react";
import { usePalette } from "../hooks/usePalette";
import { ThemeColors } from "../Colors/Colors";

type Variant = "primary" | "outline" | "circular" | "wide";

type ColorKey = keyof ThemeColors;

type ColorButtonProps = {
    colorKey: ColorKey;
    sIcon?: ReactNode;
    lIcon?: ReactNode;
    text?: string;
    onClick?: () => void;
    className?: string;
    variant?: Variant;
    isDark?: boolean;
};

const hoverFallbackMap: Record<ColorKey, keyof ThemeColors> = {
    primary: "secondary",
    secondary: "primary",
    tertiary: "secondary",
    teal: "secondary",
    danger: "secondary",
    warning: "secondary",
    success: "secondary",
    info: "secondary",
    black: "grayDark",
    white: "grayLight",
    grayLight: "grayDark",
    grayDark: "grayLight",
};

const ColorButton = (props: ColorButtonProps) => {
    const { colorKey, sIcon, lIcon, text, onClick, className, variant = "primary", isDark: isDarkProp } = props;
    const { palette, mode } = usePalette(isDarkProp ? "dark" : isDarkProp === false ? "light" : undefined);
    const isDark = mode === "dark";
    const [isHovered, setIsHovered] = useState(false);

    const baseColor = palette[colorKey];
    const hoverColor = useMemo(() => palette[hoverFallbackMap[colorKey] ?? "secondary"], [palette, colorKey]);
    const textColor = isDark ? palette.white : "#000000";
    const borderColor = baseColor;

    const variantStyles = {
        primary: {
            class: "flex items-center justify-center gap-2 rounded-lg font-semibold cursor-pointer transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg",
            style: {
                backgroundColor: isHovered ? hoverColor : baseColor,
                color: textColor,
            },
        },
        outline: {
            class: "flex items-center justify-center gap-2 rounded-lg font-semibold cursor-pointer transition-all duration-300 border-2 hover:bg-opacity-10",
            style: {
                borderColor,
                color: textColor,
                backgroundColor: isHovered ? (isDark ? palette.grayLight : "#F3F4F6") : "transparent",
            },
        },
        circular: {
            class: "flex items-center justify-center w-12 h-12 rounded-full font-semibold cursor-pointer transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-md hover:shadow-lg",
            style: {
                backgroundColor: isHovered ? hoverColor : baseColor,
                color: textColor,
            },
        },
        wide: {
            class: "flex items-center justify-center gap-2 px-8 py-3 font-semibold cursor-pointer transition-all duration-300 border-b-4 transform hover:translate-y-[-2px] active:translate-y-0",
            style: {
                color: textColor,
                borderBottomColor: isHovered ? hoverColor : baseColor,
            },
        },
    } as const;

    const selectedVariant = variantStyles[variant];

    if (variant === "circular") {
        return (
            <button
                onClick={onClick}
                className={`${className ?? ""} ${selectedVariant.class}`}
                style={selectedVariant.style}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                title={text}
            >
                {sIcon || lIcon}
            </button>
        );
    }

    return (
        <button
            onClick={onClick}
            className={`${className ?? ""} ${selectedVariant.class}`}
            style={selectedVariant.style}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {sIcon && <span>{sIcon}</span>}
            {text && <span>{text}</span>}
            {lIcon && <span>{lIcon}</span>}
        </button>
    );
};

export default ColorButton;
