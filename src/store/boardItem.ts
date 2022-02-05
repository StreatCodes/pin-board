import { State } from "./store";

interface BaseItem {
    offsetX: number
    offsetY: number
    width: number
    height: number
}

export interface TextItem extends BaseItem {
    type: 'text',
    text: string
}

export interface ImageItem extends BaseItem {
    type: 'image',
    url: string
}

export type BoardItem = TextItem | ImageItem;

export interface AddBoardItem {
    type: 'add-board-item',
    payload: BoardItem
}

export function addBoardItem(state: State, payload: BoardItem): State {
    return [...state, payload]
}