import { h, Component, render, FunctionalComponent, Fragment } from "preact";
import { useCallback, useEffect, useReducer, useRef, useState } from "preact/hooks";
import { TextItem as ITextItem } from "../store/boardItem";

import "./item.css"

interface Props {
    item: ITextItem
}

export const TextItem: FunctionalComponent<Props> = ({ item }) => {
    return <div class="text-item">
        {item.text}
    </div>
}
