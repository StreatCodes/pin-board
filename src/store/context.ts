import { createContext } from "preact";
import { useContext } from "preact/hooks";
import { Action, State } from "./store";

export interface IBoardContext {
    board: State,
    dispatch: (action: Action) => void
}

export const BoardContext = createContext<IBoardContext | null>(null);

export function useBoardContext(): IBoardContext {
    const context = useContext(BoardContext)
    if (context === null) {
        throw new Error("useBoardContext must be within TodoProvider")
    }

    return context
}