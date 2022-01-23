import { h, Component, render, FunctionalComponent, ComponentChildren } from "preact";
import "./menuItem.css"

interface Props {
    text: string;
    children?: ComponentChildren;
    onClick?: () => void;
}

export const MenuItem: FunctionalComponent<Props> = ({ text, children, onClick }: Props) => {
    return <div class="menu-item" onClick={onClick}>
        {children}
        <div class="text">{text}</div>
    </div>
}