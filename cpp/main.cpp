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

EMSCRIPTEN_BINDINGS(my_module) {
    function("testFunc", &testFunc);
    function("returnObj", &getStringProps);

    value_object<StringProps>("StringProps")
        .field("arg", &StringProps::arg)
        .field("length", &StringProps::length)
        .field("chars", &StringProps::chars);
}