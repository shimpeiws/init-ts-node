# init-ts-node

skelton project for ts-node

## Setup

Node.js `18.13.0` recuired

Install Packages

```
npm i
```

## Execute

```
% npm run execute Hello                                                                                                                                                                               [5:44:45]

> init-ts-node@1.0.0 execute
> ts-node src/main.ts Hello

Input is Hello
```

## Test

```
% npm run test                                                                                                                                                                                        [5:45:51]

> init-ts-node@1.0.0 test
> jest src

  console.log
    Input is src

      at Object.<anonymous> (src/main.ts:8:9)

 PASS  src/main.test.ts
  ✓ build Output (2 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.242 s, estimated 2 s
```

## Stack

- TypeScript
- ts-node
- jest
- ESLint
- Prettier
