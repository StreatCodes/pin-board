import { h, Component, render, FunctionalComponent, AnyComponent, ComponentChildren } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';
import { CloseIcon } from '../icons';
import { IconButton } from './iconButton';

import './modal.css';

interface Props {
    onClose?: () => void;
    children?: ComponentChildren;
    title?: string;
}

export const Modal: FunctionalComponent<Props> = ({ onClose, children, title }) => {
    return (
        <div class="modal-wrap" onClick={onClose}>
            <div class="modal" onClick={e => e.stopPropagation()}>
                {title && <h3>{title}</h3>}
                {children}
            </div>
        </div>
    );
};
