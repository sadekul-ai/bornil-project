"use client";
import { ReactNode } from "react";
import ColorButton from "./ColorButton";

interface TealButtonProps {
    sIcon?: ReactNode;
    lIcon?: ReactNode;
    text?: string;
    onClick?: () => void;
    className?: string;
    variant?: "primary" | "outline" | "circular" | "wide";
    isDark?: boolean;
}

const TealButton = (props: TealButtonProps) => {
    return <ColorButton {...props} colorKey="teal" />;
};

export default TealButton;
