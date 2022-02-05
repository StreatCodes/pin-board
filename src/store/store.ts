import { useState } from "preact/hooks";
import { AddBoardItem, addBoardItem, BoardItem } from "./boardItem";

export type State = BoardItem[];
export type Action = AddBoardItem;

export function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'add-board-item': return addBoardItem(state, action.payload);
        default: throw new Error(`Unexpected action: ${action.type}`);
    }
};