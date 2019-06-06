## Prerequisites

- Python must be installed
- Install the Emscripten SDK 
    - [Tutorial](https://emscripten.org/docs/getting_started/downloads.html#installation-instructions)
    
## Build your WASM Module
    
- Type `emcc -O3 --bind -std=c++14 -o assets/wasm/wasm.js cpp/main.cpp` in a correctly configured terminal.

[How to Pass Arrays to WASM]([Tutorial](https://emscripten.org/docs/getting_started/downloads.html#installation-instructions))