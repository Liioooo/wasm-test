declare var Module;

Module.onRuntimeInitialized = _ => {
    console.log(returnObj('kekomat'));
    console.log(sumArray([10, 4, 4, 20, 212]));
};

function returnObj(arg: string) {
    let result = Module.returnObj(arg);
    let chars: string[] = [];
    for (let i = result.chars; i < result.chars + result.length; i++) {
        chars.push(String.fromCharCode(Module.HEAP8[i]));
    }
    result.chars = chars;
    return result;
}

function sumArray(arr: number[]): number {
    const typedArray = new Int32Array(arr);
    const buffer = Module._malloc(typedArray.length * typedArray.BYTES_PER_ELEMENT);
    Module.HEAP32.set(typedArray, buffer >> 2);
    const result = Module.sum_array(buffer, arr.length);
    return result;
}