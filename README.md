## Prerequisites

- Python must be installed
- Install the Emscripten SDK 
    - [Tutorial](https://emscripten.org/docs/getting_started/downloads.html#installation-instructions)
    
## Build your WASM Module
    
- Type `emcc -O3 --bind -std=c++14 -o assets/wasm/wasm.js cpp/main.cpp` in a correctly configured terminal.

[How to Pass Arrays to WASM](https://becominghuman.ai/passing-and-returning-webassembly-array-parameters-a0f572c65d97)

nice to now:

https://floooh.github.io/2013/01/13/multithreading-in-emscripten-with-html5.html

CopyWebpackPlugin transforms wasm.js to find wasm.wasm when using loadScripts in webpack.common.js.