"use client";

import { ReactNode } from "react";
import ColorButton from "./ColorButton";

interface PrimaryButtonProps {
    sIcon?: ReactNode;
    lIcon?: ReactNode;
    text?: string;
    onClick?: () => void;
    className?: string;
    variant?: "primary" | "outline" | "circular" | "wide";
    isDark?: boolean;
}

const PrimaryButton = (props: PrimaryButtonProps) => {
    return <ColorButton {...props} colorKey="primary" />;
};

export default PrimaryButton;