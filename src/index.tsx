import { h, Component, render, FunctionalComponent, Fragment } from "preact";
import { FileExplorer } from "./fileExplorer";
import "./global.css"

//Init the canvas
const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

//Init the preact UI
const App: FunctionalComponent = () => {
    return <Fragment>
        <FileExplorer />
    </Fragment>;
}

const appElement = document.getElementById('app');
render(<App />, appElement);
