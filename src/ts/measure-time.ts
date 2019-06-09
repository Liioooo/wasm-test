export function measureTime() {
    return function (target, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
        const method = descriptor.value;

        descriptor.value = function (...args: any[]) {
          const start = performance.now();
          const result = method.apply(this, args);

          console.log(`Execution of ${propertyKey} took ${performance.now()-start}ms`);

          return result;
        };

        return descriptor;
    }
}

export function measureTimeAverage() {
    return function (target, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
        const method = descriptor.value;

        let times = [];

        descriptor.value = function (...args: any[]) {
            if(times.length > 200) {
                times = times.slice(times.length - 100);
            }
            const start = performance.now();

            const result = method.apply(this, args);

            times.push(performance.now()-start);
            const avg = times.reduce((acc, cur) => acc + cur) / times.length;
            console.log(`Avarage execution of ${propertyKey} takes ${avg}ms`);

            return result;
        };

        return descriptor;
    }
}