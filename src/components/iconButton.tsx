import { h, Component, render, FunctionalComponent, AnyComponent } from "preact";
import { useEffect, useRef, useState } from "preact/hooks"

import "./iconButton.css"

interface Props {
    icon: FunctionalComponent;
    onClick?: () => void;
    caption?: string;
    captionAnchor?: 'left' | 'right' | 'top' | 'bottom';
}

export const IconButton: FunctionalComponent<Props> = ({ icon, onClick, caption, captionAnchor = 'left' }) => {
    const Icon = icon;

    return <div class="icon-button" onClick={onClick}>
        {caption && <div class={`caption anchor-${captionAnchor}`}>
            {caption}
        </div>}
        <Icon />
    </div>;
}