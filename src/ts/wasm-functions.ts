import {measureTime, measureTimeAverage} from "./measure-time";

declare var Module;

export class WasmFunctions {

    @measureTime()
    static returnObj(arg: string) {
        let result = Module.returnObj(arg);
        let chars: string[] = [];
        for (let i = result.chars; i < result.chars + result.length; i++) {
            chars.push(String.fromCharCode(Module.HEAP8[i]));
        }
        result.chars = chars;
        return result;
    }

    @measureTime()
    static sumArray(arr: number[]): number {
        const typedArray = new Int32Array(arr);
        const buffer = Module._malloc(typedArray.byteLength);
        Module.HEAP32.set(typedArray, buffer >> 2);
        Module._free(buffer);
        return Module.sum_array(buffer, arr.length);
    }

    @measureTimeAverage()
    //@measureTime()
    static doubleArrayTyped(array: Int32Array): Int32Array {
        const buffer = Module._malloc(array.byteLength);
        Module.HEAP32.set(array, buffer >> 2);
        const result = Module.double_array(buffer, array.length);
        Module._free(buffer);
        return new Int32Array(Module.HEAP32.buffer, result, array.length);
    }

    @measureTimeAverage()
    //@measureTime()
    static doubleArrayNormal(arr: number[]): number[] {
        const typedArray = new Int32Array(arr);
        const buffer = Module._malloc(typedArray.byteLength);
        Module.HEAP32.set(typedArray, buffer >> 2);
        const result = Module.double_array(buffer, arr.length);
        Module._free(buffer);
        const toReturn = [];
        const start = result/Int32Array.BYTES_PER_ELEMENT
        for (let i = start; i < start + arr.length; i++) {
            toReturn.push(Module.HEAP32[i])
        }
        return toReturn;
    }
}