import React from "react";
import styles from "./Button.module.css";

export type ButtonVariant = "primary" | "secondary" | "danger";

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: ButtonVariant;
    disabled?: boolean;
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    variant = "primary",
    disabled = false,
    className = ""
}) => {

    console.log(styles, "styles")
    const classes = `${styles.button} ${styles[variant]} ${className}`;

    return (
        <button className={classes} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
}