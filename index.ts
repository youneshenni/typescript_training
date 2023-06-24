const a: number = 1;
const b: string = "x";
const c: any[] = [];

const d: number[] = [1,2,3,4];
const e:{
    x: number;
    y: string;
} = {
    x: 1, y: "s"
};
const f: {
    a: number; b: number
}[] = [
    {
        a: 1, b: 2
    }, {
        a: 2, b: 3
    }
]
const g: (number | string)[] = [1,2,3,"4","5",6];
