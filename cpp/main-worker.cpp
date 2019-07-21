#include <emscripten/bind.h>
//#include <string>
//#include <iostream>

using namespace emscripten;

int count = 0;

void add(int arg) {
    int x = 0;
    for (int i = 0; i < 100; i++) {
        x += (i + 10 * i) / 12;
    }
    count += arg + x;
}

int get() {
    return count;
}

EMSCRIPTEN_BINDINGS(my_module) {
    function("add", &add);
    function("get", &get);
}