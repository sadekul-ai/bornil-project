"use client";
import { ReactNode } from "react";
import ColorButton from "./ColorButton";

interface WarningButtonProps {
    sIcon?: ReactNode;
    lIcon?: ReactNode;
    text?: string;
    onClick?: () => void;
    className?: string;
    variant?: "primary" | "outline" | "circular" | "wide";
    isDark?: boolean;
}

const WarningButton = (props: WarningButtonProps) => {
    return <ColorButton {...props} colorKey="warning" />;
};

export default WarningButton;
