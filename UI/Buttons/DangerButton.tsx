"use client";
import { ReactNode } from "react";
import ColorButton from "./ColorButton";

interface DangerButtonProps {
    sIcon?: ReactNode;
    lIcon?: ReactNode;
    text?: string;
    onClick?: () => void;
    className?: string;
    variant?: "primary" | "outline" | "circular" | "wide";
    isDark?: boolean;
}

const DangerButton = (props: DangerButtonProps) => {
    return <ColorButton {...props} colorKey="danger" />;
};

export default DangerButton;
