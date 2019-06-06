declare var Module;

Module.onRuntimeInitialized = _ => {
    console.log(returnObj('kekomat'));
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