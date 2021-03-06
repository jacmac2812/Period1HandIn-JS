abstract class Shape {
    private _color: string;
    constructor(color: string) {
        this._color = color;
    }
    abstract get area(): number;
    abstract get perimeter(): number;

    toString(): string { return '${this._color}' }
}