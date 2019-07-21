// import {WasmFunctions} from "./wasm-functions";
// declare var Module;
//
// Module.onRuntimeInitialized = _ => {
//     //console.log(returnObj('kekomat'));
//     //console.log(sumArray([10, 4, 4, 20, 212]));
//     //console.log(WasmFunctions.doubleArrayTyped(new Int32Array([1, 2, 3])));
//     //console.log(WasmFunctions.doubleArrayNormal([1, 2, 3]));
// };
//
// document.getElementById('typed').addEventListener('click', () => {
//     for (let i = 0; i < 100; i++) {
//         callTyped();
//     }
// });
//
// document.getElementById('normal').addEventListener('click', () => {
//     for (let i = 0; i < 100; i++) {
//         callNormal();
//     }
// });
//
// function callNormal() {
//     const arr = [];
//     for (let i = 0; i < 200; i++) {
//         arr.push(Math.round(Math.random()*1000));
//     }
//     WasmFunctions.doubleArrayNormal(arr)
//     //console.log(WasmFunctions.doubleArrayNormal(arr));
// }
//
// function callTyped() {
//     const arr = new Int32Array(200);
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = Math.round(Math.random()*1000);
//     }
//     WasmFunctions.doubleArrayTyped(arr)
//     //console.log(WasmFunctions.doubleArrayTyped(arr));
// }

const worker = new Worker('assets/worker.js');

worker.addEventListener('message', (e) => {
   console.log(e);
});

document.getElementById('start').addEventListener('click', () => {
    worker.postMessage('start');
});

document.getElementById('getStatus').addEventListener('click', () => {
    worker.postMessage('getStatus');
});

document.getElementById('stop').addEventListener('click', () => {
    worker.postMessage('stop');
});