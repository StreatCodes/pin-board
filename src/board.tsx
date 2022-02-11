import { h, Component, render, FunctionalComponent, Fragment } from 'preact';
import { useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'preact/hooks';

import './board.css';
import { TextItem } from './boardItems/textItem';
import { useBoardContext } from './store/context';
import { reducer } from './store/store';

export interface BoardOffset {
    x: number;
    y: number;
}

export const Board: FunctionalComponent = () => {
    const boardRef = useRef<HTMLDivElement>(null);
    const { board, dispatch } = useBoardContext();

    const [offset, setOffset] = useState<BoardOffset>({ x: 0.0, y: 0.0 });

    useEffect(() => {
        const board = boardRef.current;
        const scrollHandler = (e: WheelEvent) => {
            setOffset(v => ({ x: v.x - e.deltaX, y: v.y - e.deltaY }));
        };

        if (board) {
            board.addEventListener('wheel', scrollHandler);
            return () => board.removeEventListener('wheel', scrollHandler);
        }
    }, [boardRef]);

    const items = board.map((item, index) => {
        if (item.type === 'text') return <TextItem key={index} item={item} offset={offset} />;
        // if (item.type === 'image') return <ImageItem item={item} /> TODO
    });

    return (
        <div class="board-wrap" ref={boardRef}>
            <div class="board">{items}</div>
        </div>
    );
};
