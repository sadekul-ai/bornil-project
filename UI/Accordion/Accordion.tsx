"use client";

import React, { ReactNode, useState } from "react";
import { usePalette } from "../hooks/usePalette";

type AccordionItemProps = {
    title: string | ReactNode;
    content: string | ReactNode;
    icon?: ReactNode;
    defaultOpen?: boolean;
    isDark?: boolean;
    titleClassName?: string;
    contentClassName?: string;
    titleBg?: string;
    contentBg?: string;
    titleColor?: string;
    contentColor?: string;
    bordered?: boolean;
    className?: string;
};

const AccordionItem: React.FC<AccordionItemProps> = ({
    title,
    content,
    icon,
    defaultOpen = false,
    isDark: isDarkProp,
    titleClassName = "",
    contentClassName = "",
    titleBg,
    contentBg,
    titleColor,
    contentColor,
    bordered = true,
    className = "",
}) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    const { palette, mode } = usePalette(isDarkProp ? "dark" : isDarkProp === false ? "light" : undefined);
    const isDark = mode === "dark";

    const defaultTitleBg = isDark ? palette.grayLight : palette.grayLight;
    const defaultContentBg = isDark ? palette.grayDark : palette.white;
    const defaultTitleColor = isDark ? palette.white : palette.grayDark;
    const defaultContentColor = isDark ? palette.white : palette.grayDark;
    const borderColor = isDark ? palette.grayLight : "#E5E7EB";

    return (
        <div
            className={`${className} overflow-hidden transition-all duration-300 ${bordered ? "border rounded-lg" : ""
                }`}
            style={{
                borderColor: bordered ? borderColor : "transparent",
            }}
        >
            {/* Accordion Header */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`${titleClassName} w-full flex items-center justify-between px-4 py-3 text-left font-semibold transition-all duration-300 hover:opacity-90 focus:outline-none`}
                style={{
                    backgroundColor: titleBg || defaultTitleBg,
                    color: titleColor || defaultTitleColor,
                }}
            >
                <div className="flex items-center gap-3">
                    {icon && <span>{icon}</span>}
                    <span>{title}</span>
                </div>
                <svg
                    className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"
                        }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* Accordion Content */}
            <div
                className={`transition-all duration-300 ease-in-out overflow-hidden`}
                style={{
                    maxHeight: isOpen ? "1000px" : "0",
                    opacity: isOpen ? 1 : 0,
                }}
            >
                <div
                    className={`${contentClassName} px-4 py-3`}
                    style={{
                        backgroundColor: contentBg || defaultContentBg,
                        color: contentColor || defaultContentColor,
                    }}
                >
                    {content}
                </div>
            </div>
        </div>
    );
};

type AccordionProps = {
    items: Array<Omit<AccordionItemProps, "isDark">>;
    isDark?: boolean;
    allowMultiple?: boolean;
    className?: string;
};

const Accordion: React.FC<AccordionProps> = ({
    items,
    isDark,
    allowMultiple = true,
    className = "",
}) => {
    const [openIndexes, setOpenIndexes] = useState<number[]>(
        items.map((item, index) => (item.defaultOpen ? index : -1)).filter((i) => i !== -1)
    );

    const handleToggle = (index: number) => {
        if (allowMultiple) {
            setOpenIndexes((prev) =>
                prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
            );
        } else {
            setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]));
        }
    };

    if (!allowMultiple) {
        return (
            <div className={`${className} space-y-2`}>
                {items.map((item, index) => (
                    <div key={index}>
                        <AccordionItem
                            {...item}
                            isDark={isDark}
                            defaultOpen={openIndexes.includes(index)}
                        />
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className={`${className} space-y-2`}>
            {items.map((item, index) => (
                <AccordionItem key={index} {...item} isDark={isDark} />
            ))}
        </div>
    );
};

export default Accordion;
export { AccordionItem };
