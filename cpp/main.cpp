#include <emscripten/bind.h>
#include <string>

using namespace emscripten;

struct StringProps {
    std::string arg;
    size_t length;
    uintptr_t chars;
};

int testFunc(int arg) {
    arg = arg * arg;
    return arg - 20;
}

StringProps getStringProps(std::string arg) {
  size_t len = arg.length();

  StringProps props = {
    .arg = arg,
    .length = len,
    .chars = reinterpret_cast<std::uintptr_t>(&arg[0])
  };
  return props;
}

int sum_array(uintptr_t input, int length) {
    const int* array = reinterpret_cast<int*>(input);

    int total = 0;

    for (int i = 0; i < length; i++) {
        total += array[i];
    }
    return total;
}

EMSCRIPTEN_BINDINGS(my_module) {
    function("testFunc", &testFunc);
    function("returnObj", &getStringProps);
    function("sum_array", &sum_array);

    value_object<StringProps>("StringProps")
        .field("arg", &StringProps::arg)
        .field("length", &StringProps::length)
        .field("chars", &StringProps::chars);
}