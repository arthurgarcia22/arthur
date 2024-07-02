export const delayExecution = <T>(func: () => T): Promise<T> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = func();
      resolve(result);
    }, 1000); // 1 second delay
  });
};
