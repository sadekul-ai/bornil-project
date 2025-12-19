"use client";
import { ReactNode } from "react";
import ColorButton from "./ColorButton";

interface SuccessButtonProps {
    sIcon?: ReactNode;
    lIcon?: ReactNode;
    text?: string;
    onClick?: () => void;
    className?: string;
    variant?: "primary" | "outline" | "circular" | "wide";
    isDark?: boolean;
}

const SuccessButton = (props: SuccessButtonProps) => {
    return <ColorButton {...props} colorKey="success" />;
};

export default SuccessButton;
