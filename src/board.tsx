import { h, Component, render, FunctionalComponent, Fragment } from "preact";
import { useCallback, useEffect, useReducer, useRef, useState } from "preact/hooks";

import "./board.css"
import { TextItem } from "./boardItems/textItem";
import { useBoardContext } from "./store/context";
import { reducer } from "./store/store";

export const Board: FunctionalComponent = () => {
    const boardRef = useRef<HTMLDivElement>(null);
    const [scrollX, setScrollX] = useState(0.0);
    const [scrollY, setScrollY] = useState(0.0);
    const { board, dispatch } = useBoardContext();

    const items = board.map(item => {
        if (item.type === 'text') return <TextItem item={item} />
        // if (item.type === 'image') return <ImageItem item={item} /> TODO
    })

    //TODO unomptimized
    useEffect(() => {
        const board = boardRef.current;
        if (board) {
            const handler = (e: WheelEvent) => {
                setScrollX(scrollX - e.deltaX)
                setScrollY(scrollY - e.deltaY)
            }
            board.addEventListener('wheel', handler)

            return () => board.removeEventListener('wheel', handler)
        }
    }, [scrollX, scrollY, boardRef]);

    const style = `transform: translate(${scrollX}px, ${scrollY}px)`;

    return <div class="board" ref={boardRef}>
        <div class="item" style={style}>{items}</div>
    </div>
}
