import { h, Component, render, FunctionalComponent, Fragment } from 'preact';
import { useCallback, useEffect, useReducer, useRef, useState } from 'preact/hooks';
import { BoardOffset } from '../board';
import { TextItem as ITextItem } from '../store/boardItem';

import './item.css';

interface Props {
    item: ITextItem;
    offset: BoardOffset;
}

export const TextItem: FunctionalComponent<Props> = ({ item, offset }) => {
    const style = `left: ${offset.x}px; top: ${offset.y}px;`;

    return (
        <div class="text-item" style={style}>
            {item.text}
        </div>
    );
};
