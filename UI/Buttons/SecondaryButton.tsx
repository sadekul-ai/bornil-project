"use client";
import { ReactNode } from "react";
import ColorButton from "./ColorButton";

interface SecondaryButtonProps {
    sIcon?: ReactNode;
    lIcon?: ReactNode;
    text?: string;
    onClick?: () => void;
    className?: string;
    variant?: "primary" | "outline" | "circular" | "wide";
    isDark?: boolean;
}

const SecondaryButton = (props: SecondaryButtonProps) => {
    return <ColorButton {...props} colorKey="secondary" />;
};

export default SecondaryButton;
