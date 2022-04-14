import React from "react";
import "../../scss/styles.scss";
export declare type ButtonColor = "accept" | "decline" | "secondary" | "accent";
export declare type ButtonType = "primary" | "tertiary";
export interface IButtonProps {
    type: ButtonType;
    color?: ButtonColor;
    icon?: React.ReactNode;
    onClick?: Function;
    children?: React.ReactNode;
}
declare function Button({ type, color, icon, onClick, children }: IButtonProps): JSX.Element;
declare namespace Button {
    var defaultProps: Partial<IButtonProps>;
}
export default Button;
