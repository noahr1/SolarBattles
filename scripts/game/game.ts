import { Player } from "./player/player";

export class GameObject {
    players: Array<Player>;
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    update: Function;
    render: Function;
    animation: number;
    constructor() {
        this.players = [];
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d")!;
        this.update;
        this.render;
        this.animation = -1;
    }
    start(init: Function): void {
        init();
        if(this.animation == -1) {
            this.animation = window.requestAnimationFrame(this.tick);
        }
    }
    addPlayer(player: Player) {
        this.players.push(player);
    }
    setUpdate(callback: Function) {
        this.update = callback;
    }
    setRender(callback: Function) {
        this.render = callback;
    }
    tick(elapsed: number): void {
        this.animation = window.requestAnimationFrame(this.tick);
        this.update();
        this.render();
    }
    stop(): void {
        window.cancelAnimationFrame(this.animation);
        this.animation = -1;
    }
}

