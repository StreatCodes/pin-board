import { h, Component, render, FunctionalComponent } from "preact";
import { useRef, useState } from "preact/hooks"

import { FolderIcon, NewFileIcon, PlusIcon } from "./icons"
import { MenuItem } from "./menuItem";
import "./fileExplorer.css";


export const FileExplorer: FunctionalComponent = () => {
    const [expanded, setExpanded] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    let expandedStyle = '';
    if (contentRef.current && expanded) {
        const width = contentRef.current.clientWidth;
        const height = contentRef.current.clientHeight;
        expandedStyle = `max-height: ${height}px; max-width: ${width}px;`;
    }

    return <div class={`file-explorer ${expanded ? 'expanded' : ''}`} style={expandedStyle}>
        <div style="width: fit-content" ref={contentRef}>
            <div class="folder-button" onClick={() => setExpanded(!expanded)}>
                <PlusIcon />
            </div>

            <MenuItem>
                <FolderIcon />
                <div>New Folder</div>
            </MenuItem>

            <MenuItem>
                <NewFileIcon />
                <div>Create New Board</div>
            </MenuItem>

            <section>
                <div style="width: 24px; height: 24px; border-radius: 50%; background-color: gray"></div>
            </section>
        </div>
    </div>;
}