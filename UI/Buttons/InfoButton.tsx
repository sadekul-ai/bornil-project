"use client";
import { ReactNode } from "react";
import ColorButton from "./ColorButton";

interface InfoButtonProps {
    sIcon?: ReactNode;
    lIcon?: ReactNode;
    text?: string;
    onClick?: () => void;
    className?: string;
    variant?: "primary" | "outline" | "circular" | "wide";
    isDark?: boolean;
}

const InfoButton = (props: InfoButtonProps) => {
    return <ColorButton {...props} colorKey="info" />;
};

export default InfoButton;
