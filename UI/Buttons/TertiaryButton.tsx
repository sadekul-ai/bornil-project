"use client";
import { ReactNode } from "react";
import ColorButton from "./ColorButton";

interface TertiaryButtonProps {
    sIcon?: ReactNode;
    lIcon?: ReactNode;
    text?: string;
    onClick?: () => void;
    className?: string;
    variant?: "primary" | "outline" | "circular" | "wide";
    isDark?: boolean;
}

const TertiaryButton = (props: TertiaryButtonProps) => {
    return <ColorButton {...props} colorKey="tertiary" />;
};

export default TertiaryButton;
