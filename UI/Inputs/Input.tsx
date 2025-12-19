"use client";

import React, { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { usePalette } from "../hooks/usePalette";

type InputVariant = "bordered" | "underlined" | "filled";

interface BaseInputProps {
    isDark?: boolean;
    variant?: InputVariant;
    className?: string;
    error?: boolean;
    success?: boolean;
}

interface RegularInputProps extends BaseInputProps, Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {
    as?: "input";
}

interface TextareaInputProps extends BaseInputProps, Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'className'> {
    as: "textarea";
}

type InputProps = RegularInputProps | TextareaInputProps;

const Input: React.FC<InputProps> = (props) => {
    const {
        isDark: isDarkProp,
        variant = "bordered",
        className = "",
        error = false,
        success = false,
        as = "input",
        ...restProps
    } = props;

    const { palette, mode } = usePalette(isDarkProp ? "dark" : isDarkProp === false ? "light" : undefined);
    const isDark = mode === "dark";

    const baseColor = isDark ? palette.white : palette.grayDark;
    const bgColor = isDark ? palette.grayLight : palette.white;
    const borderColor = error
        ? palette.danger
        : success
            ? palette.success
            : isDark
                ? palette.grayLight
                : "#D1D5DB";

    const focusBorderColor = error ? palette.danger : success ? palette.success : palette.primary;
    const placeholderColor = isDark ? "#9CA3AF" : "#6B7280";

    const baseStyles = {
        color: baseColor,
        backgroundColor: variant === "filled" ? bgColor : "transparent",
        borderColor: variant !== "underlined" ? borderColor : "transparent",
        borderBottomColor: borderColor,
        transition: "all 0.3s ease",
    };

    const baseClasses = `w-full px-4 py-2 text-sm font-medium transition-all duration-300 outline-none focus:ring-2 focus:ring-offset-0 ${variant === "bordered" ? "border-2 rounded-lg" : ""
        }${variant === "underlined" ? "border-b-2 border-t-0 border-x-0 rounded-none" : ""}${variant === "filled" ? "border-2 rounded-lg" : ""
        }`;

    const focusStyles = `
    focus:border-[${focusBorderColor}]
    focus:ring-[${focusBorderColor}]
  `;

    const combinedClasses = `${baseClasses} ${focusStyles} ${className}`;

    const combinedStyles = {
        ...baseStyles,
        ...(restProps.style || {}),
    };

    if (as === "textarea") {
        const textareaProps = restProps as Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'className'>;
        return (
            <textarea
                className={combinedClasses}
                style={combinedStyles}
                {...textareaProps}
            />
        );
    }

    const inputProps = restProps as Omit<InputHTMLAttributes<HTMLInputElement>, 'className'>;
    return (
        <input
            className={combinedClasses}
            style={{
                ...combinedStyles,
                WebkitTextFillColor: baseColor,
            }}
            {...inputProps}
        />
    );
};

export default Input;
