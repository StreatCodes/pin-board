import { h, Component, render, FunctionalComponent, Fragment } from "preact";
import { useEffect, useRef, useState } from "preact/hooks"
import { IconButton } from "./components/iconButton";
import { Modal } from "./components/modal";
import { DrawIcon, FilmIcon, HexagonIcon, ImageIcon, NewFileIcon, ShareIcon, TextIcon } from './icons';

import "./toolBar.css"


export const ToolBar: FunctionalComponent = () => {
    const [showModal, setShowModal] = useState(false);

    return <Fragment>
        <div class="toolbar">
            <IconButton icon={TextIcon} caption="Add Text" onClick={() => setShowModal(true)} />
            <IconButton icon={ImageIcon} caption="Add Image" />
            <IconButton icon={DrawIcon} caption="Draw Lines" />
            <IconButton icon={HexagonIcon} caption="Add Shape" />
            <hr />
            <IconButton icon={FilmIcon} caption="Animate or Present" />
            <IconButton icon={ShareIcon} caption="Share" />
        </div>

        {showModal && (
            <Modal onClose={() => setShowModal(false)} title="Add Text">
                <h3>Add Text</h3>
            </Modal>
        )}
    </Fragment>
}