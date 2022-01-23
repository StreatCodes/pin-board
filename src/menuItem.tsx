import { h, Component, render, FunctionalComponent, ComponentChildren } from "preact";
import "./menuItem.css"

interface Props {
    children?: ComponentChildren;
    onClick?: () => void;
}

export const MenuItem: FunctionalComponent<Props> = ({ children, onClick }: Props) => {
    return <div class="menu-item" onClick={onClick}>
        {children}
    </div>
}