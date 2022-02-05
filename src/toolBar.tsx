import { h, Component, render, FunctionalComponent, Fragment } from "preact";
import { useEffect, useRef, useState } from "preact/hooks"
import { IconButton } from "./components/iconButton";
import { Modal } from "./components/modal";
import { DrawIcon, FilmIcon, HexagonIcon, ImageIcon, NewFileIcon, ShareIcon, TextIcon } from './icons';
import { useBoardContext } from "./store/context";

import "./toolBar.css"


export const ToolBar: FunctionalComponent = () => {
    const [showModal, setShowModal] = useState(false);
    const { dispatch } = useBoardContext();

    const addText = () => {
        dispatch({
            type: 'add-board-item',
            payload: {
                offsetX: 0,
                offsetY: 0,
                width: 200,
                height: 200,
                type: 'text',
                text: 'Sample text'
            }
        })
    }

    return <Fragment>
        <div class="toolbar">
            <IconButton icon={TextIcon} caption="Add Text" onClick={addText} />
            <IconButton icon={ImageIcon} caption="Add Image" />
            <IconButton icon={DrawIcon} caption="Draw Lines" />
            <IconButton icon={HexagonIcon} caption="Add Shape" />
            <hr />
            <IconButton icon={FilmIcon} caption="Animate or Present" />
            <IconButton icon={ShareIcon} caption="Share" />
        </div>
    </Fragment>
}