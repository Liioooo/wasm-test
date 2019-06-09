## Prerequisites

- Python must be installed
- Install the Emscripten SDK 
    - [Tutorial](https://emscripten.org/docs/getting_started/downloads.html#installation-instructions)
    
## Build your WASM Module
    
- Type `emcc -O3 --bind -std=c++14 -o assets/wasm/wasm.js cpp/main.cpp` in a correctly configured terminal.

[How to Pass Arrays to WASM](https://becominghuman.ai/passing-and-returning-webassembly-array-parameters-a0f572c65d97)