import { h, render, FunctionalComponent } from "preact";
import { useReducer } from "preact/hooks";
import { Board } from "./board";
import { FileExplorer } from "./fileExplorer";
import "./global.css"
import { BoardContext } from "./store/context";
import { reducer } from "./store/store";
import { ToolBar } from "./toolBar";

const App: FunctionalComponent = () => {
    const [board, dispatch] = useReducer(reducer, []);

    return <BoardContext.Provider value={{ board, dispatch }}>
        <Board />
        <FileExplorer />
        <ToolBar />
    </BoardContext.Provider>;
}

const appElement = document.getElementById('app');
if (appElement) {
    render(<App />, appElement);
} else {
    throw new Error(`No element found with id 'app'`)
}
