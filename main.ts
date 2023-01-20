export const buildString = (input: string): string => {
  return `Input is ${input}`;
};

// main
const input = process.argv[2];
const output = buildString(input);
console.log(output);
