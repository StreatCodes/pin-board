import { h, Component, render, FunctionalComponent } from "preact";

interface Props {
    width?: number;
    height?: number;
}

export const FolderIcon: FunctionalComponent<Props> = ({ width = 24, height = 24 }: Props) => {
    return <svg viewBox="0 0 24 24" width={width} height={height} stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
    </svg>
}

export const NewFileIcon: FunctionalComponent<Props> = ({ width = 24, height = 24 }: Props) => {
    return <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="12" y1="18" x2="12" y2="12"></line>
        <line x1="9" y1="15" x2="15" y2="15"></line>
    </svg>
}

export const PlusIcon: FunctionalComponent<Props> = ({ width = 24, height = 24 }: Props) => {
    return <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
}
