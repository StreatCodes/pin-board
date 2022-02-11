import { h, Component, render, FunctionalComponent } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';

import { FolderIcon, NewFileIcon, PlusIcon } from './icons';
import { MenuItem } from './menuItem';
import './fileExplorer.css';

export const FileExplorer: FunctionalComponent = () => {
    const [expanded, setExpanded] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            const ele = e.target as Element;
            if (!contentRef.current.contains(ele)) {
                setExpanded(false);
            }
        };
        window.addEventListener('click', handler);
        return () => window.removeEventListener('click', handler);
    }, [expanded]);

    let expandedStyle = '';
    if (contentRef.current && expanded) {
        const width = contentRef.current.clientWidth;
        const height = contentRef.current.clientHeight;
        expandedStyle = `max-height: ${height}px; max-width: ${width}px;`;
    }

    return (
        <div class={`file-explorer ${expanded ? 'expanded' : ''}`} style={expandedStyle}>
            <div style="width: fit-content" ref={contentRef}>
                <div class="folder-button" onClick={() => setExpanded(!expanded)}>
                    <PlusIcon />
                </div>

                <MenuItem text="New Folder">
                    <FolderIcon width={20} height={20} />
                </MenuItem>

                <MenuItem text="Create New Board">
                    <NewFileIcon width={20} height={20} />
                </MenuItem>

                <hr />

                <section>
                    <div style="width: 24px; height: 24px; border-radius: 50%; background-color: gray"></div>
                </section>
            </div>
        </div>
    );
};
