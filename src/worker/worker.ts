let taskRunning = false;

onmessage = function (e: MessageEvent) {
  switch (e.data) {
      case 'start':
          taskRunning = true
          task();
          console.log('test');
          break;
      case 'getStatus':
          postMessage(x, null);
          break;
      case 'stop':
          taskRunning = false;
          postMessage(x, null);
          break;
  }
};

let x = 0;
async function task() {
    while (taskRunning) {
        await new Promise(resolve => setTimeout(resolve, 0));
        // to increase frequency of task runs
        for (let i = 0; i < 100; i++) {
            taskStep();
        }
    }
}

function taskStep() {
    // simulating a long running simulation step
    const arr = [];
    for (let i = 0; i < 100000; i++) {
        arr.push(i * i + 200 / 2005465)
    }
    x++;
}