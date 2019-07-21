importScripts('wasm/wasm.js');
declare var Module;

let taskRunning = false;

onmessage = function (e: MessageEvent) {
  switch (e.data) {
      case 'start':
          taskRunning = true;
          task();
          break;
      case 'getStatus':
          postMessage(Module.get(), null);
          break;
      case 'stop':
          taskRunning = false;
          postMessage(Module.get(), null);
          break;
  }
};

async function task() {
    while (taskRunning) {
        await new Promise(resolve => setTimeout(resolve, 0));
        // to increase frequency of task runs
        //const start = performance.now();
        for (let i = 0; i < 100; i++) {
            taskStep();
        }
        //console.log(performance.now() - start);
    }
}

function taskStep() {
    // simulating a long running simulation step
    Module.add(1);
}